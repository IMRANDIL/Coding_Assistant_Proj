from flask import jsonify

def handle_exception(e):
    response = {
        "error": "An unexpected error occurred",
        "details": str(e)
    }
    return jsonify(response), 500
