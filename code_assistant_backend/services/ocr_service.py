import os
from dotenv import load_dotenv
import requests

load_dotenv()  # take environment variables from .env.
hugging_face_token = os.getenv('HUGGING_FACE_TOKEN')

# def extract_text_from_image(image_path):
#     API_URL = "https://api-inference.huggingface.co/models/kha-white/manga-ocr-base"
#     headers = {"Authorization": f"Bearer {hugging_face_token}"}
#     with open(image_path, "rb") as f:
#         data = f.read()
#     response = requests.post(API_URL, headers=headers, data=data)
#     return response.json()

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




import os
import logging
from PIL import Image
import pytesseract

# Setting up logging configuration
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def extract_text_from_image(image_path):
    """
    Extracts text from the given image using pytesseract OCR.
    
    :param image_path: str - Path to the image file.
    :return: str - Extracted text from the image.
    """
    # Check if the image file exists
    if not os.path.exists(image_path):
        logging.error(f"File {image_path} not found.")
        return None

    try:
        # Open the image file
        img = Image.open(image_path)
        logging.info(f"Image {image_path} loaded successfully.")
        
        # Perform OCR on the image
        text = pytesseract.image_to_string(img)
        logging.info("Text extraction completed.")
        
        return text

    except Exception as e:
        logging.error(f"An error occurred during text extraction: {str(e)}")
        return None