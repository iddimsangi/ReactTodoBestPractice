import { useState, useEffect } from 'react'
import './App.scss';
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'
import Profile from './components/Profile/Profile'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
const[people, setpeople] = useState([]);
const[personDetails, setpersonDetails] = useState({
  username:'',
  email:'',
  password:''
});
const key = "people";
useEffect(() =>{
const peopleRegistered = JSON.parse(localStorage.getItem(key));
if(peopleRegistered) setpeople(peopleRegistered)
      }, [])
useEffect(() =>{
  localStorage.setItem(key, JSON.stringify(people))
}, [people])
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <div className="App-header-box">
        <Routes>
            <Route path="/" exact element={<Form people={people} setpeople={setpeople} personDetails={personDetails} setpersonDetails={setpersonDetails}/>}/>
            <Route path="/list" exact element={ <TodoList/>}/>
        </Routes>
          
          {/* <TodoList/>
          <Profile/> */}
      </div>
      </header>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
