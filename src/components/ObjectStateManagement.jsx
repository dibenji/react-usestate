import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Components.css';

const ObjectStateManagement = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (field, value) => {
    setUser((prevObject) => ({
      ...prevObject,
      [field]: value,
    }));
  };

  const handleWrongUpdate = () => {
    user.firstName = 'Wrong update';
    setUser(user);
  };

  const handleCorrectUpdate = () => {
    setUser((prevObject) => ({
      ...prevObject,
      firstName: 'Correct update',
    }));
  };

  const jsxSnippet = `
  const ObjectStateManagement = () => {
    const [user, setUser] = useState({
      firstName: '',
      lastName: '',
    });

    const handleInputChange = (field, value) => {
      setUser((prevObject) => ({
        ...prevObject,
        [field]: value,
      }));
    };

    const handleWrongUpdate = () => {
      // wrong way - pitfall (this will not trigger a re-render of the component)
      user.firstName = 'Wrong update';
      setUser(user);
    };

    const handleCorrectUpdate = () => {
      setUser((prevObject) => ({
        ...prevObject,
        firstName: 'Correct update',
      }));
    };

    return (
      <h1>Object state management using useState</h1>
      <input
        type="text"
        placeholder="Firstname"
        value={user.firstName}
        onChange={(e) => handleInputChange('firstName', e.target.value)}
      />
      <input
        type="test"
        placeholder="Lastname"
        value={user.lastName}
        onChange={(e) => handleInputChange('lastName', e.target.value)}
      />
      <p>
        <strong>Firstname:</strong> {user.firstName}
      </p>
      <p>
        <strong>Lastname:</strong> {user.lastName}
      </p>
      <button onClick={handleWrongUpdate} className="btn">
        Update (wrong)
      </button>
      <button onClick={handleCorrectUpdate} className="btn">
        Update (correct)
      </button>
    );
  };
  `.trim();

  return (
    <section className="container">
      <div className="left-sub-container">
        <h1>Object state management using useState</h1>
        <input
          type="text"
          placeholder="Firstname"
          value={user.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
          className="form-input"
        />
        <input
          type="test"
          placeholder="Lastname"
          value={user.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
          className="form-input"
        />

        <div className="user-display">
          <p>
            <strong>Firstname:</strong> {user.firstName}
          </p>
          <p>
            <strong>Lastname:</strong> {user.lastName}
          </p>
        </div>
        <div className="button-group">
          <button onClick={handleWrongUpdate} className="btn btn-secondary">
            Update (wrong)
          </button>
          <button onClick={handleCorrectUpdate} className="btn btn-primary">
            Update (correct)
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

export default ObjectStateManagement;
