import { useState } from 'react'
import './App.scss';
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'
import Profile from './components/Profile/Profile'
function App() {

  return (
    <div className="App">
      <header className="App-header">
      <div className="App-header-box">
          <Form/>
          <TodoList/>
          <Profile/>
      </div>
      </header>
    </div>
  );
}

export default App;
