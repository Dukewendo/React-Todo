import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  
  const [inputText, setInputText] = useState(""); // state for Form
  const [todos, setTodos] = useState([]); // array for todos
  const [status, setStatus] = useState("all"); //state for completed/ not
  const [filteredTodos, setFilteredTodos] = useState([]);

  return (
    <div className="App">
      
      <header><h1>Simple React To-do list</h1></header>
      <h2>Built with React from youtube turorial</h2>
      
    <Form 
    inputText ={inputText} 
    todos ={todos} 
    setTodos = {setTodos} 
    setInputText = {setInputText}
    setStatus ={setStatus}
    />
    
    <TodoList 
    todos ={todos}
    setTodos ={setTodos}
    />

    </div>
  );
}

export default App;
