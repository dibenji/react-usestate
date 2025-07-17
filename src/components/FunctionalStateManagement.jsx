import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Components.css';

const FunctionalStateManagement = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => setCount((previousValue) => previousValue - 1);
  const handleIncrement = () => setCount((previousValue) => previousValue + 1);
  const handleReset = () => setCount(0);

  const jsxSnippet = `
  const Counter = () => {
    const [count, setCount] = useState(0);
    
    const handleDecrement = () => setCount(previousValue => previousValue - 1);
    const handleIncrement = () => setCount(previousValue => previousValue + 1);
    const handleReset = () => setCount(0); 

    return (
      <div>
        <h1>Functional state management using useState</h1>
        <p>
          Count: <output>{count}</output>
        </p>
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
  };
  `.trim();

  return (
    <section className="container">
      <div className="left-sub-container">
        <h1>Functional state management using useState</h1>
        <p>
          Count: <output>{count}</output>
        </p>
        <div className="button-group">
          <button type="button" onClick={handleDecrement} className="btn">
            Decrement
          </button>
          <button type="button" onClick={handleIncrement} className="btn">
            Increment
          </button>
          <button type="button" onClick={handleReset} className="btn">
            Reset
          </button>
        </div>
      </div>
      <div className="right-sub-container">
        <SyntaxHighlighter
          language="jsx"
          style={oneLight}
          showLineNumbers="true"
          className="syntax-highlighter"
        >
          {jsxSnippet}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default FunctionalStateManagement;
