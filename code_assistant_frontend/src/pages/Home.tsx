// src/pages/Home.tsx
import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import CodeBlock from '../components/CodeBlock';

const Home: React.FC = () => {
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>('javascript'); // Default language

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

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

              {/* Dropdown to select the language for syntax highlighting */}
              <div className="languageSelector">
                <label htmlFor="language-select" className="languageLabel">Select Language:</label>
                <select
                  id="language-select"
                  value={language}
                  onChange={handleLanguageChange}
                  className="languageDropdown"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="typescript">TypeScript</option>
                </select>
              </div>

              {/* CodeBlock to display extracted text with syntax highlighting */}
              <CodeBlock text={extractedText} language={language} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
