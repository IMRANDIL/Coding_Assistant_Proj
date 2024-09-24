from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from validators.file_validator import validate_file
from services.ocr_service import extract_text_from_image
from utils.file_utils import save_file

upload_bp = Blueprint('upload_bp', __name__)

@upload_bp.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400
    
    file = request.files['file']
    
    # Validate the file
    error = validate_file(file)
    if error:
        return jsonify({"error": error}), 400

    # Secure and save the file
    filename = secure_filename(file.filename)
    filepath = save_file(file, filename)

    # Extract text using OCR
    extracted_text = extract_text_from_image(filepath)

    return jsonify({"extracted_text": extracted_text}), 200
