import React from "react";

const TodoList = ({todos,setTodos,page,setPage,getData,handleEdit}) => {
 
  const handleDelete=(id)=>{
    // only handle Frontend;

    //   const delTodo = todos.filter((to)=> to.id !== id);
    //  setTodos([...delTodo])

    // delete in backend data 
    fetch(`http://localhost:3001/users/${id}`,{
      method:"DELETE"
    }).then((result)=> result.json())
    .then(getData)
  }
  return (
    <ul className="allTodos">
      {todos.map((e)=>(
         <li className="singleTodo">
         <span className="todoText" key={e.id} >{e.title} -{e.status
         ?"Done":"Not Done"}</span>
         
          <button onClick={()=>{
            handleEdit(e.id)
          }}>Edit</button>
          <button onClick={()=>{
            handleDelete(e.id)
          }}>Delete</button>
        </li>
      ))}
      <div className="pagination">
      <button onClick={()=>{
        setPage(page -1)
      }}>Prev</button>
       <button onClick={()=>{
        setPage(page+1)
       }}>Next</button>
      </div>  
    </ul>
  );
};

export default TodoList;
