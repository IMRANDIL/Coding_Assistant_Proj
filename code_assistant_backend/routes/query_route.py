from flask import Blueprint, request, jsonify
from services.llm_service import process_extracted_text

query_bp = Blueprint('query_bp', __name__)

@query_bp.route('/query', methods=['POST'])
def query_code_agent():
    data = request.get_json()

    # Validate input data
    if not data or 'text' not in data or 'question' not in data:
        return jsonify({"error": "Both 'text' and 'question' fields are required"}), 400

    text = data['text']
    question = data['question']

    # Process the extracted text with LangChain
    response = process_extracted_text(text, question)

    return jsonify({"response": response}), 200
