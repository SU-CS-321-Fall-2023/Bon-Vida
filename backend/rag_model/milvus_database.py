from pymilvus import Collection, FieldSchema, CollectionSchema, DataType
from pymilvus_orm import connections, utility
import json
import numpy as np

# Define the host and port where Milvus is running
milvus_host = 'localhost'
milvus_port = 19530

# Connect to Milvus
connections.connect(host=milvus_host, port=milvus_port)

# Create a Milvus collection
collection_name = 'first_aid_collection'
dimension = 300  # You should choose an appropriate dimension for your vectors

field = FieldSchema(name='embedding', dtype=DataType.FLOAT_VECTOR, dim=dimension)
schema = CollectionSchema(fields=[field], description='First Aid Data Collection')
collection = Collection(name=collection_name, schema=schema)

# Load and preprocess your JSON data
with open('first_aid_data.json', 'r') as json_file:
    data = json.load(json_file)

vectors = []  # Store the preprocessed vectors here

# Assuming you have precomputed vectors for your text data
# You may use word embeddings or other techniques to convert text to vectors
for key, value in data.items():
    # Here, you should convert 'value' to a numerical vector
    # You can use pre-trained word embeddings or any other method

    # For the sake of example, we'll use random vectors
    vector = np.random.rand(dimension).tolist()
    vectors.append(vector)

# Insert the vectors into the Milvus collection
collection.insert(data=vectors)

# You now have your data in the Milvus collection and can perform similarity search.
