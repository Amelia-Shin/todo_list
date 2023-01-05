import React from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

function App() {
  
  return (
    <main>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
    </main>
  );
}

export default App;
