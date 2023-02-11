import './App.css'

import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = event => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleDelete = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="todo-list">
        <form onSubmit={handleSubmit}>
          <input type="text" value={newTodo} onChange={handleChange} />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo} className="todo-item">
              {todo}
              <button type="button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;