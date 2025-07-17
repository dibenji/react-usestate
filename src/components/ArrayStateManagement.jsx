import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Components.css';

const ArrayStateManagement = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodoCorrect = () => {
    if (inputValue.trim()) {
      setTodos((previousArray) => [
        ...previousArray,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue('');
    }
  };

  const addTodoWrong = () => {
    if (inputValue.trim()) {
      todos.push({ id: Date.now(), text: inputValue, completed: false });
      setTodos(todos);
    }
  };

  const toggleTodo = (id) => {
    setTodos((previousArray) =>
      previousArray.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((previousArray) => previousArray.filter((todo) => todo.id !== id));
  };

  const jsxSnippet = `
  const ArrayStateManagement = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodoCorrect = () => {
      if (inputValue.trim()) {
        setTodos((previousArray) => [
          ...previousArray,
          { id: Date.now(), text: inputValue, completed: false },
        ]);
      }
    };

    const addTodoWrong = () => {
      // wrong way - pitfall (this will not trigger a re-render of the component)
      if (inputValue.trim()) {
        todos.push({ id: Date.now(), text: inputValue, completed: false });
        setTodos(todos);
      }
    };

    const toggleTodo = (id) => {
      setTodos((previousArray) =>
        previousArray.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    const removeTodo = (id) => {
      setTodos((previousArray) => previousArray.filter((todo) => todo.id !== id));
    };

    return (
    
    )
  }
  `.trim();

  return (
    <section className="container">
      <div className="left-sub-container">
        <h1>Array state management using useState</h1>
        <input
          type="text"
          placeholder="Add a todo..."
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && addTodoCorrect()}
          className="form-input"
        />
        <div className="button-group">
          <button onClick={addTodoWrong} className="btn btn-secondary">
            Add (wrong)
          </button>
          <button onClick={addTodoCorrect} className="btn btn-primary">
            Add (correct)
          </button>
        </div>
        <div className="todo-items">
          {todos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? 'completed' : ''}>
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="btn btn-danger btn-small"
              >
                Remove
              </button>
            </div>
          ))}
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

export default ArrayStateManagement;
