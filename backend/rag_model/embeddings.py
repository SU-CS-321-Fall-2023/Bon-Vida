import json
import numpy as np
from transformers import DPRContextEncoder, DPRContextEncoderTokenizer
import faiss
import torch

# Load the JSON data
with open('/Users/vakulnath/Documents/GitHub/Bon-Vida/Bon-Vida/backend/injuries.json', 'r') as file:
    data = json.load(file)

formatted_data = []
for injury, info in data.items():
    # Title
    title = injury

    # Context
    dos = 'Dos: ' + ' '.join(info['Dos'])
    donts = 'Donts: ' + ' '.join(info['Donts']) if info['Donts'] else ''
    context = dos + (' ' + donts if donts else '')

    # Combine title and context
    formatted_entry = f"Title: {title}\nContext: {context}"
    formatted_data.append(formatted_entry)

# Initialize DPR model
tokenizer = DPRContextEncoderTokenizer.from_pretrained('facebook/dpr-ctx_encoder-single-nq-base')
model = DPRContextEncoder.from_pretrained('facebook/dpr-ctx_encoder-single-nq-base')

# Process and generate embeddings for the formatted data
embeddings = []
for doc in formatted_data:
    inputs = tokenizer(doc, return_tensors="pt", padding=True, truncation=True, max_length=512)
    outputs = model(**inputs)
    embeddings.append(outputs.pooler_output.detach().cpu().numpy())

# Convert list of numpy arrays to a single numpy array
embeddings = np.vstack(embeddings)

# Create FAISS index
dim = embeddings.shape[1]
index = faiss.IndexFlatIP(dim)
index.add(embeddings)

# Save the index
faiss.write_index(index, "/Users/vakulnath/Documents/GitHub/Bon-Vida/Bon-Vida/backend/index2.faiss")

# Load the FAISS index
index = faiss.read_index("/Users/vakulnath/Documents/GitHub/Bon-Vida/Bon-Vida/backend/index2.faiss")

from transformers import DPRQuestionEncoder, DPRQuestionEncoderTokenizer

# Initialize DPR Question Encoder
question_tokenizer = DPRQuestionEncoderTokenizer.from_pretrained('facebook/dpr-question_encoder-single-nq-base')
question_model = DPRQuestionEncoder.from_pretrained('facebook/dpr-question_encoder-single-nq-base')

def query_index(question, question_tokenizer, question_model, index, documents, top_k=1):
    # Encode the question to an embedding
    question_inputs = question_tokenizer(question, return_tensors="pt", padding=True, truncation=True, max_length=512)
    question_embedding = question_model(**question_inputs).pooler_output
    question_embedding_2d = question_embedding.cpu().detach().numpy()

    # Search the index for the most similar document
    D, I = index.search(question_embedding_2d, top_k)

    # Fetch the most relevant document(s)
    relevant_docs = [documents[i] for i in I[0]]
    return relevant_docs    
from transformers import BartForConditionalGeneration, BartTokenizer

# Initialize BART model and tokenizer
bart_model = BartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
bart_tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

def generate_answer(context, bart_model, bart_tokenizer):
    # Tokenize the input context (retrieved document)
    inputs = bart_tokenizer.encode("summarize: " + context, return_tensors='pt', max_length=1024, truncation=True)
    
    # Generate a response
    summary_ids = bart_model.generate(inputs, max_length=150, min_length=40, length_penalty=2.0, num_beams=4, early_stopping=True)
    return bart_tokenizer.decode(summary_ids[0], skip_special_tokens=True)

def get_response(question, question_tokenizer, question_model, index, documents, bart_model, bart_tokenizer):
    relevant_docs = query_index(question, question_tokenizer, question_model, index, documents)
    if relevant_docs:
        content = relevant_docs[0].split("\nContext: ")[1]  # Extract the context
        answer = generate_answer(content, bart_model, bart_tokenizer)  # Generate response using BART
        return answer
    else:
        return "No relevant information found."

# Main loop
if __name__ == "__main__":
    while True:
        user_query = input("Please enter your question (or type 'exit' to quit): ")
        if user_query.lower() in ['exit', 'quit']:
            print("Thank you for using Bon Vida. Goodbye!")
            break
        response = get_response(user_query, question_tokenizer, question_model, index, formatted_data, bart_model, bart_tokenizer)
        print(response)
