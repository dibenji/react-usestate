import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Components.css';

const BasicStateManagement = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => setCount(count - 1);
  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(0);

  const jsxSnippet = `
  const Counter = () => {
    const [count, setCount] = useState(0);
    
    const handleDecrement = () => setCount(count - 1);
    const handleIncrement = () => setCount(count + 1);
    const handleReset = () => setCount(0); 

    return (
      <h2>Basic state management using useState</h2>
      <p>
        Count: <output>{count}</output>
      </p>
      <div>
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    );
  }
  `.trim();

  return (
    <section className="container">
      <div className="left-sub-container">
        <h1>Basic state management using useState</h1>
        <p>
          Count: <output>{count}</output>
        </p>
        <div className="button-group">
          <button
            type="button"
            onClick={handleDecrement}
            className="btn btn-primary"
          >
            Decrement
          </button>
          <button
            type="button"
            onClick={handleIncrement}
            className="btn btn-secondary"
          >
            Increment
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="right-sub-container">
        <SyntaxHighlighter
          language="jsx"
          style={oneDark}
          showLineNumbers="true"
          customStyle={{
            margin: 0,
            borderRadius: '0.5rem',
            fontSize: '1.2rem',
            lineHeight: '1.5',
          }}
        >
          {jsxSnippet}
        </SyntaxHighlighter>
        <pre>
          <code></code>
        </pre>
      </div>
    </section>
  );
};

export default BasicStateManagement;
