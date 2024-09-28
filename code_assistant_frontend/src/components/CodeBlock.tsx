// src/components/CodeBlock.tsx
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // You can choose other styles if you'd like

interface CodeBlockProps {
  text: string;
  language: string;  // Add a language prop to dynamically specify the code language
}

const CodeBlock: React.FC<CodeBlockProps> = ({ text, language }) => {
  return (
    <div style={styles.container}>
      <SyntaxHighlighter language={language} style={darcula}>
        {text}
      </SyntaxHighlighter>
      <CopyToClipboard text={text}>
        <button style={styles.copyButton} onClick={() => alert('Code copied!')}>
          Copy code
        </button>
      </CopyToClipboard>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative' as 'relative',
    backgroundColor: '#2d2d2d',
    borderRadius: '8px',
    padding: '16px',
    overflow: 'auto',
    marginTop: '10px'
  },
  copyButton: {
    position: 'absolute' as 'absolute',
    top: '10px',
    right: '10px',
    padding: '5px 10px',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#000',
    fontSize: '12px',
  },
};

export default CodeBlock;
