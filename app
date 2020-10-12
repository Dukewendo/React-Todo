import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  
  const [inputText, setInputText] = useState(""); // state for Form
  const [todos, setTodos] = useState([]); // array for todos

  return (
    <div className="App">
      
      <header><h1>Simple React To-do list</h1></header>
      
    <Form 
    inputText ={inputText} 
    todos ={todos} 
    setTodos = {setTodos} 
    setInputText = {setInputText}/>
    
    <TodoList 
    todos ={todos}
    setTodos ={setTodos}/>

    </div>
  );
}

export default App;
