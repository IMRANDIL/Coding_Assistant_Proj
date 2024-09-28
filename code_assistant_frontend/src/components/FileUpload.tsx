// src/components/FileUpload.tsx
import React, { useState } from 'react';
import { uploadImage } from '../api/api';

interface FileUploadProps {
  onExtractText: (text: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onExtractText }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
      onExtractText(extractedText); // Pass extracted text to parent
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Upload Image for OCR</h2>
      <label htmlFor="file-upload" style={styles.fileInputLabel}>
        {selectedFile ? selectedFile.name : 'Choose an image'}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={styles.input}
      />
      <button
        onClick={handleFileUpload}
        disabled={loading || !selectedFile}
        style={loading || !selectedFile ? styles.disabledButton : styles.button}
      >
        {loading ? 'Uploading...' : 'Upload Image'}
      </button>

      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '22px',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold' as 'bold',
  },
  input: {
    display: 'none', // Hidden input to be replaced by custom label
  },
  fileInputLabel: {
    display: 'block',
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '15px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
    textAlign: 'center' as 'center',
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  button: {
    padding: '12px 28px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
    width: '100%',
    textAlign: 'center' as 'center',
  },
  disabledButton: {
    padding: '12px 28px',
    backgroundColor: '#aaa',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'not-allowed' as 'not-allowed',
    textAlign: 'center' as 'center',
    width: '100%',
  },
  errorMessage: {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
    textAlign: 'center' as 'center',
  },
};

export default FileUpload;
