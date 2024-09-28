// src/components/CodeBlock.tsx
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface CodeBlockProps {
  text: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ text }) => {
  return (
    <div style={styles.container}>
      <pre style={styles.pre}>
        <code style={styles.code}>{text}</code>
      </pre>
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
  },
  pre: {
    margin: 0,
    fontFamily: 'monospace',
    color: '#f8f8f2',
    whiteSpace: 'pre-wrap' as 'pre-wrap',
  },
  code: {
    fontSize: '14px',
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
