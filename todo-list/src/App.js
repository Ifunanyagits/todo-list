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
    <div>
        <h2>My to-do list</h2>
      <div className="container">
        <div className="todo-list">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add your to-do' value={newTodo} onChange={handleChange} required/>
            <button type="submit">Add Todo</button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                {todo}
                <button className='deleteItem' type="button" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;