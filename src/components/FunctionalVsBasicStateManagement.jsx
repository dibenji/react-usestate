import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Components.css';

const FunctionalVsBasicStateManagement = () => {
  const [count, setCount] = useState(0);

  const handleMultipleDecrementBasic = () => {
    setCount(count - 1);
    setCount(count - 1);
    setCount(count - 1);
  };

  const handleMultipleIncrementBasic = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleMultipleDecrementFunctional = () => {
    setCount((prevValue) => prevValue - 1);
    setCount((prevValue) => prevValue - 1);
    setCount((prevValue) => prevValue - 1);
  };

  const handleMultipleIncrementFunctional = () => {
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
  };

  const handleReset = () => setCount(0);

  const jsxSnippet = `
  const FunctionalVsBasicStateManagement = () => {
    const [count, setCount] = useState(0);

    const handleMultipleDecrementBasic = () => {
      // wrong way - pitfall (count doesn't change within handleMultipleDecrementBasic)
      setCount(count - 1);
      setCount(count - 1);
      setCount(count - 1);
    };

    const handleMultipleIncrementBasic = () => {
      // wrong way - pitfall (count doesn't change within handleMultipleIncrementBasic)
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    };

    const handleMultipleDecrementFunctional = () => {
      // correct way - prevValue changes within handleMultipleDecrementFunctional
      setCount((prevValue) => prevValue - 1);
      setCount((prevValue) => prevValue - 1);
      setCount((prevValue) => prevValue - 1);
    };

    const handleMultipleIncrementFunctional = () => {
      // correct way - prevValue changes within handleMultipleIncrementFunctional
      setCount((prevValue) => prevValue + 1);
      setCount((prevValue) => prevValue + 1);
      setCount((prevValue) => prevValue + 1);
    };

    const handleReset = () => setCount(0);

    return (
      <h2>Basic state management using useState</h2>
      <p>
        Count: <output>{count}</output>
      </p>
      <div>
        <button type="button" onClick={handleMultipleDecrementBasic}>
          Decrement -3 (wrong)
        </button>
        <button type="button" onClick={handleMultipleIncrementBasic}>
          Increment +3 (wrong)
        </button>
        <button type="button" onClick={handleMultipleDecrementFunctional}>
          Decrement -3 (correct)
        </button>
        <button type="button" onClick={handleMultipleIncrementFunctional}>
          Increment +3 (correct)
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
        <h1>Functional vs basic state management using useState</h1>
        <p>
          Count: <output>{count}</output>
        </p>
        <div className="button-group">
          <button
            type="button"
            onClick={handleMultipleDecrementBasic}
            className="btn btn-secondary"
          >
            Decrement -3 (wrong)
          </button>
          <button
            type="button"
            onClick={handleMultipleIncrementBasic}
            className="btn btn-primary"
          >
            Increment +3 (wrong)
          </button>
          <button
            type="button"
            onClick={handleMultipleDecrementFunctional}
            className="btn btn-secondary"
          >
            Decrement -3 (correct)
          </button>
          <button
            type="button"
            onClick={handleMultipleIncrementFunctional}
            className="btn btn-primary"
          >
            Increment (correct)
          </button>
          <button type="button" onClick={handleReset} className="btn">
            Reset
          </button>
        </div>
      </div>
      <div className="right-sub-container">
        <SyntaxHighlighter
          language="jsx"
          style={oneDark}
          showLineNumbers="true"
          className="syntax-highlighter"
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

export default FunctionalVsBasicStateManagement;
