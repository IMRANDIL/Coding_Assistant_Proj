import os

def allowed_file(filename, allowed_extensions):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions

def validate_file(file):
    allowed_extensions = {'png', 'jpg', 'jpeg'}
    if file.filename == '':
        return "No file selected."
    
    if not allowed_file(file.filename, allowed_extensions):
        return "Invalid file type. Only PNG, JPG, and JPEG are allowed."
    
    return None
