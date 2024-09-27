import os
from dotenv import load_dotenv
import requests

load_dotenv()  # take environment variables from .env.
hugging_face_token = os.getenv('HUGGING_FACE_TOKEN')

def extract_text_from_image(image_path):
    API_URL = "https://api-inference.huggingface.co/models/microsoft/trocr-base-handwritten"
    headers = {"Authorization": f"Bearer {hugging_face_token}"}
    with open(image_path, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()

# # import easyocr
# # 
# # load_dotenv()  # take environment variables from .env.
# # hugginig_face_token = os.getenv('HUGGING_FACE_TOKEN')
# # def extract_text_from_image(image_path):
# #     reader = easyocr.Reader(['en'])
# #     result = reader.readtext(image_path, detail=0)
# #     return " ".join(result)
# # 
# # 
# # # import requests
# # 
# # # API_URL = "https://api-inference.huggingface.co/models/microsoft/trocr-base-handwritten"
# # # headers = {"Authorization": "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
# # 
# # # def query(filename):
# # #     with open(filename, "rb") as f:
# # #         data = f.read()
# # #     response = requests.post(API_URL, headers=headers, data=data)
# # #     return response.json()
# # 
# # # output = query("cats.jpg")