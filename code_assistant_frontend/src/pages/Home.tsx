// src/pages/Home.tsx
import React from 'react';
import FileUpload from '../components/FileUpload';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Code Assistant - OCR with Model Query</h1>
      <FileUpload />
    </div>
  );
};

export default Home;
