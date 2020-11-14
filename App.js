import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  // states
  
  const [inputText, setInputText] = useState(""); // state for Form
  const [todos, setTodos] = useState([]); // array for todos
  const [status, setStatus] = useState("all"); //state for completed/ not
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //run once when app starts

  useEffect(() => {
    getLocalTodos();
  }, []);
  
  // runs the filter completed or not
  useEffect(() =>  {
    filterHandler();
    saveLocaltodos();
    }, [todos, status]);

  //functions

  const filterHandler =() => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed == true))
        break;
      
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed == false))
        break;

        default: setFilteredTodos(todos);
        break;
    }
  };

  //get data from localstorage- store data to localstorage

  const saveLocaltodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };


  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      
      <header><h1>Simple React To-do list</h1></header>
      <h2>Built with React from youtube turorial</h2>
      <h3>Work in Progress</h3>
      
    <Form 
    inputText ={inputText} 
    todos ={todos} 
    setTodos = {setTodos} 
    setInputText = {setInputText}
    setStatus = {setStatus}
    
    />
    
    <TodoList 
    todos ={todos}
    setTodos ={setTodos}
    filteredTodos = {filteredTodos}
    />

    </div>
  );
}

export default App;
