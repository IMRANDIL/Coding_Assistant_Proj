from flask import Flask
from routes.upload_route import upload_bp
from routes.query_route import query_bp
from validators.exception_handler import handle_exception

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './static/uploads/'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# Register blueprints for routes
app.register_blueprint(upload_bp)
app.register_blueprint(query_bp)

# Global error handler
app.register_error_handler(Exception, handle_exception)

if __name__ == '__main__':
    app.run(debug=True)
