import React, { useState, useReducer } from 'react';

import './App.css';
import Form from './Form';
import List from './List';
import todoReducer from './todoReducer';

function App() {
  let [items, dispatch] = useReducer(todoReducer, []);

  const handleAdd = text => {
    dispatch({ type: 'ADD_TODO', text });
  };

  const handleDelete = id => {
    dispatch({ type: 'DELETE_TODO', id });
  };

  return (
    <div className="app">
      <Form onAdd={handleAdd} />
      <List items={items} onDelete={handleDelete} />
    </div>
  );
}

export default App;
