import { useState } from "react"
import Form from "./Form";
import TodoItems from "./TodoItems";

export default function InputItem(){
 
    const [todoItems,setTodos]= useState([]);
  
     
    return <div>
        <Form todoItems={todoItems} setTodos={setTodos}/>
        <TodoItems todoItems={todoItems} setTodos={setTodos}/>
         </div>
}