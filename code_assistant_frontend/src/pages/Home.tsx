// src/pages/Home.tsx
import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import CodeBlock from '../components/CodeBlock';

const Home: React.FC = () => {
  const [extractedText, setExtractedText] = useState<string | null>(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Code Assistant - OCR with Model Query</h1>
      <div style={styles.contentContainer}>
        {/* Left side for File Upload */}
        <div style={styles.leftSection}>
          <FileUpload onExtractText={setExtractedText} />
        </div>

        {/* Right side for Code Block */}
        <div style={styles.rightSection}>
          {extractedText && (
            <>
              <h3 style={styles.resultHeading}>Extracted Text:</h3>
              <CodeBlock text={extractedText} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    padding: '20px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold' as 'bold',
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    marginBottom: '40px',
    textAlign: 'center' as 'center',
    animation: 'fadeIn 2s ease-in-out',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
    height: '500px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Larger shadow for more depth
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for a layered effect
    borderRadius: '20px', // Larger border radius for a smoother look
    overflow: 'hidden',
    backdropFilter: 'blur(10px)', // Blur background for a glassy effect
    border: '1px solid rgba(255, 255, 255, 0.3)', // Subtle border to add a glassy effect
    padding: '20px', // Added padding for spacing inside the container
    transition: 'transform 0.3s ease', // Smooth transition for hover effect
    '&:hover': {
      transform: 'scale(1.02)', // Slight zoom effect on hover
    },
  },
  leftSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRight: '1px solid #e0e0e0', // Separator between sections
  },
  rightSection: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#ffffff',
    overflowY: 'auto' as 'auto',
  },
  resultHeading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
};

export default Home;
