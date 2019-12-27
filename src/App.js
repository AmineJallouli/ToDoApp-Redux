import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <Todo/>
      <List/>
    </div>
  );
}

export default App;
