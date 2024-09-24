import os

def save_file(file, filename, upload_folder='./static/uploads/'):
    if not os.path.exists(upload_folder):
        os.makedirs(upload_folder)
    
    filepath = os.path.join(upload_folder, filename)
    file.save(filepath)
    
    return filepath
