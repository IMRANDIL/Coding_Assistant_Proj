// src/components/FileUpload.tsx
import React, { useState } from 'react';
import { uploadImage } from '../api/api';
import CodeBlock from './CodeBlock';

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setErrorMessage(null);

    try {
      const extractedText = await uploadImage(selectedFile);
      setExtractedText(extractedText);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload Image for OCR</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleFileUpload} disabled={loading || !selectedFile}>
        {loading ? 'Uploading...' : 'Upload Image'}
      </button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {extractedText && (
        <div>
          <h3>Extracted Text:</h3>
          <CodeBlock text={extractedText} />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
