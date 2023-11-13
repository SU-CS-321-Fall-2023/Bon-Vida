from transformers import DPRReader, DPRReaderTokenizer
import faiss
import json

def database():
    name = "facebook/dpr-reader-multiset-base"
    model = DPRReader.from_pretrained(name)
    token = DPRReaderTokenizer.from_pretrained(name)

    with open('injuries.json', 'r') as f:
        data = json.load(f)

    passages = [entry['text'] for entry in data['passages']]

    # Encode passages
    encoded_passages = token(passages, return_tensors="pt", padding=True, truncation=True)

    # Create Faiss index
    index = faiss.IndexFlatIP(model.config.hidden_size)
    index.add(encoded_passages['input_ids'].numpy())

    # Save model, tokenizer, and Faiss index
    model.save_pretrained("path/to/save/model")
    token.save_pretrained("path/to/save/tokenizer")
    faiss.write_index(index, "path/to/save/faiss_index")
    
