import React from 'react'

const TodoForm = ({text,setText,todos,setTodos,getData,editId,setEditId}) => {
  return (
    <div className='todoForm'>
      <input placeholder='Enter Here..'
      value={text}
      onChange={(e)=>setText(e.target.value)}/>

      <button onClick={()=>{
        //fetch Post
        const data = {status:false,title:text};
        // if(editId){
        //   const editTodo= todos.find((i)=> i.id ===editId);

        //   const updatedTodos = todos.map((t)=>t.id === editTodo.id ?(
        //     t={id:t.id,text}):{id:t.id,title:t.title}
        //   );
        //   setTodos(updatedTodos);
        //   setEditId(0);
        //   setText("")
        //   return;
        // }

        if(editId){
          fetch(`http://localhost:3001/users/${editId}`,{
            method:"PUT",
            body:JSON.stringify(data),
            headers:{
              "content-type":"application/json"
            },
          }).then((res)=>res.json())
          .then(getData);
          return;
        }

        fetch(" http://localhost:3001/users",{
          method:"POST",
          body:JSON.stringify(data),
          headers:{
            "content-type":"application/json"
          },
        }).then(getData)
      }
        
      }>{editId ? "Edit":"Add"}</button>
    </div>
  )
}

export default TodoForm