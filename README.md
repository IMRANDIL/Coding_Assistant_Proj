# Code Assistant - OCR with Model Query

## Overview

The **Code Assistant** project is a web application designed to extract code snippets from images using Optical Character Recognition (OCR) technology. It utilizes a combination of EasyOCR, Tesseract, and Flask to provide a seamless user experience for developers looking to capture and manage code snippets efficiently.

## Features

- Upload images containing code snippets for extraction.
- Syntax highlighting for various programming languages.
- Copy code snippets to clipboard easily.
- Responsive and user-friendly interface.

## Technologies Used

- **Backend:** Flask
- **OCR Libraries:** EasyOCR, Tesseract
- **Frontend:** React
- **Styling:** Tailwind CSS (or custom CSS)
- **APIs:** Hugging Face Hub for additional model capabilities

## Installation

### Prerequisites

Make sure you have Python 3.x installed on your machine. You can download it from [python.org](https://www.python.org/downloads/).

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/code-assistant.git
   cd code-assistant
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:

   - **Windows:**

     ```bash
     venv\Scripts\activate
     ```

   - **macOS/Linux:**

     ```bash
     source venv/bin/activate
     ```

4. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

5. Install Tesseract OCR:

   - **Windows:** Download the installer from [Tesseract at UB Mannheim](https://github.com/UB-Mannheim/tesseract/wiki).
   - **macOS:** Use Homebrew:

     ```bash
     brew install tesseract
     ```

   - **Linux:** Install using the package manager:

     ```bash
     sudo apt-get install tesseract-ocr
     ```

## Usage

1. Start the Flask backend server:

   ```bash
   python app.py
   ```

2. Navigate to `http://localhost:5000` in your browser to access the application.

3. Use the file upload feature to select an image containing code snippets, and the app will extract the text.

4. Choose the programming language from the dropdown to apply syntax highlighting to the extracted code.

5. Copy the code snippets to your clipboard as needed.

## Folder Structure

```
/code-assistant
├── /src                     # Frontend source code
│   ├── /components          # React components
│   ├── /pages               # Next.js pages
│   └── App.tsx             # Main application file
├── /backend                 # Backend source code
│   ├── app.py              # Flask application entry point
│   └── ...
├── requirements.txt         # Python dependencies
└── README.md                # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [EasyOCR](https://github.com/JaidedAI/EasyOCR) for optical character recognition.
- [Tesseract](https://github.com/tesseract-ocr/tesseract) for OCR capabilities.
- [Flask](https://flask.palletsprojects.com/) for the web framework.
- [Hugging Face](https://huggingface.co/) for model hosting and API.

---

Thank you for checking out the Code Assistant project! We hope it helps streamline your coding workflow.
