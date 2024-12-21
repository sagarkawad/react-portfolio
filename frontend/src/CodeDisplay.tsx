import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // One Dark theme

interface CodeDisplayProps {
  code: string;
  language: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, language }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.dot} />
        <div style={styles.dot} />
        <div style={styles.dot} />
      </div>
      <SyntaxHighlighter language={language} style={oneDark} customStyle={styles.codeBlock}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#282C34", // Matches One Dark background
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    padding: "16px",
    maxWidth: "800px",
    margin: "20px auto",
  },
  header: {
    display: "flex",
    gap: "8px",
    marginBottom: "12px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#E06C75", // Red-ish for the top-left dot
  },
  codeBlock: {
    borderRadius: "8px",
    margin: 0,
  },
};

export default CodeDisplay;
