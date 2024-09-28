// src/api/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/upload'; // Adjust according to your Flask API URL

/**
 * Upload image and get extracted text.
 * @param file - Image file to be uploaded
 */
export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(API_BASE_URL, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data.extracted_text;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 'Failed to upload image and extract text.'
    );
  }
};
