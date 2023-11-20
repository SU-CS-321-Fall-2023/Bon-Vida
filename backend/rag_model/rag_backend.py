import json
from transformers import RagTokenizer, RagSequenceForGeneration
import torch
import Levenshtein
from flask import Flask, request, jsonify

app = Flask(__name__)


# Load the RAG model
tokenizer = RagTokenizer.from_pretrained("facebook/rag-sequence-nq")
model = RagSequenceForGeneration.from_pretrained("facebook/rag-sequence-nq")

# Load the JSON data
with open("../Bon-Vida/backend/injuries.json", "r", encoding='utf-8') as f:
    data = json.load(f)


def get_answer(query):
    input_ids = tokenizer(query, return_tensors="pt").input_ids
    outputs = model.generate(input_ids)
    answer = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return answer


def get_best_match(query):
    best_match = None
    best_distance = float('inf')

    for name in data:
        distance = Levenshtein.distance(query, name)
        if distance < best_distance:
            best_match = name
            best_distance = distance

    return best_match


def process_injury_or_illness(name):
    best_match = get_best_match(name)
    dos = data[best_match].get("Dos", [])
    donts = data[best_match].get("Donts", [])
    response = f"Best match: {best_match}\n\n"

    if dos:
        response += "Guide Sorce: Content is provided from Advent Healths' Source of truth:\n EPIC Healthcare Electronic medical Record(EMR)\n\n"
        response += "Do's:\n" + "\n".join(dos) + "\n\n"
    if donts:
        response += "Don'ts:\n" + "\n".join(donts) + "\n\n"

    return response


@app.route('/answer', methods=['GET'])
def get_answer():
    data = request.args.get('data')
    return process_injury_or_illness(data)


@app.route('/injuries', methods=['GET'])
def get_injuries():
    try:
        # Read the JSON data from the file
        with open("../Bon-Vida/backend/injuries.json", 'r') as file:
            injuries_data = json.load(file)

        # Create a list of dictionaries where each dictionary contains Dos and Don'ts for an injury
        injuries_list = [
            {
                'injury': injury,
                'Dos': injuries_data[injury]['Dos'],
                'Donts': injuries_data[injury]['Donts']
            }
            for injury in injuries_data
        ]

        return jsonify(injuries_list)
    except Exception as error:
        print("Error reading injuries data:", error)
        return jsonify([])


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
