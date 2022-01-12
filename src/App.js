import { useState } from 'react'
import './App.scss';
import Form from './components/Form/Form'
function App() {

  return (
    <div className="App">
      <header className="App-header">
      <div className="App-header-box">
          <Form/>
      </div>
      </header>
    </div>
  );
}

export default App;
