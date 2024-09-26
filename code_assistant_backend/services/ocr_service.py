import easyocr

def extract_text_from_image(image_path):
    reader = easyocr.Reader(['en'])
    result = reader.readtext(image_path, detail=0)
    return " ".join(result)




import requests

API_URL = "https://api-inference.huggingface.co/models/microsoft/trocr-base-handwritten"
headers = {"Authorization": "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}

def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()

output = query("cats.jpg")