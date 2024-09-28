// src/pages/Home.tsx
import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import CodeBlock from '../components/CodeBlock';


const Home: React.FC = () => {
  const [extractedText, setExtractedText] = useState<string | null>(null);

  return (
    <div className="container">
      <h1 className="heading">Code Assistant - OCR with Model Query</h1>
      <div className="contentContainer">
        {/* Left side for File Upload */}
        <div className="leftSection">
          <FileUpload onExtractText={setExtractedText} />
        </div>

        {/* Right side for Code Block */}
        <div className="rightSection">
          {extractedText && (
            <>
              <h3 className="resultHeading">Extracted Text:</h3>
              <CodeBlock text={extractedText} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
