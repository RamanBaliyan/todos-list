import React from 'react'
import TodoItem from "../myComponents/TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className = " my-3">Todos List</h3>
      {props.todos.length===0 ? <h4 className ="text-center my-10 ">No Todos To Display</h4>:
      props.todos.map((todo)=>{
      return <TodoItem todo={todo} key= {todo.sno} onDelete={props.onDelete}/>})

       }
       
       
     
    </div>
  )
}

export default Todos
