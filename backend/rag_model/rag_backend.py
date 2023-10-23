import json
from transformers import RagTokenizer, RagSequenceForGeneration
import torch

# Load the RAG model
tokenizer = RagTokenizer.from_pretrained("facebook/rag-sequence-nq")
model = RagSequenceForGeneration.from_pretrained("facebook/rag-sequence-nq")

# Load the JSON data
with open("../Bon-Vida/backend/injuries.json", "r") as f:
    data = json.load(f)

def get_answer(query):
    input_ids = tokenizer(query, return_tensors="pt").input_ids
    outputs = model.generate(input_ids)
    answer = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return answer

def process_injury_or_illness(name):
    if name not in data:
        return "The specified injury or illness is not found in the dataset."
    dos = data[name].get("Dos", [])
    donts = data[name].get("Donts", [])
    response = ""

    if dos:
        response += "Do's:\n" + "\n".join(dos) + "\n\n"
    if donts:
        response += "Don'ts:\n" + "\n".join(donts) + "\n\n"
    return response

if __name__ == "__main__":
    while True:
        injury_or_illness_name = input("Please enter the name of the injury or illness (or type 'exit' to quit): ")
        
        if injury_or_illness_name.lower() in ['exit', 'quit']:
            print("Exiting program. Goodbye!")
            break
        
        print(process_injury_or_illness(injury_or_illness_name))


