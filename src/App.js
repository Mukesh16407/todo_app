import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  // const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1)
  const [editId, setEditId] = useState(0);
 

  useEffect(()=>{
    getData();
    
  },[page]);

  const getData =()=>{
    //setloading(true);
    fetch(`http://localhost:3001/users?_page=${page}&_limit=5`)
      .then((d)=> d.json())
      .then((res)=>{
        setTodos(res);
        //setloading(false);
        setText("")
      }).catch((err) => {
        // some error handling
        console.log(err)
      });
  }
 const handleEdit =(id)=>{
  
  const  editTodo = todos.find((i)=>i.id ===id);
  setText(editTodo.title);
  setEditId(id);
 }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm 
        text={text}
        setText={setText} 
        setTodos={setTodos} 
        todos={todos}
        getData={getData}
        editId={editId} />
        <TodoList 
         todos={todos}
         setTodos={setTodos}
         page={page}
         setPage={setPage}
         getData={getData}
         handleEdit={handleEdit}
         setEditId={setEditId}
         />
      </div>
    </div>
  );
}

export default App;
