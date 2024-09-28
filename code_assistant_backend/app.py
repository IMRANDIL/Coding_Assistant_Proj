from flask import Flask, request, jsonify
from flask_cors import CORS
from routes.upload_route import upload_bp
# from routes.query_route import query_bp
from validators.exception_handler import handle_exception

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './static/uploads/'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# Enable CORS for the entire app
CORS(app)

# Register blueprints for routes
app.register_blueprint(upload_bp)
# app.register_blueprint(query_bp)

# Global error handler
@app.errorhandler(Exception)
def handle_exception(error):
    return jsonify({'error': str(error)}), 500

if __name__ == '__main__':
    print("Running Flask app on port 5000...")
    app.run(debug=True, port=5000)
