import { useState } from "react"
import styles from './css/form.module.css'

export default function Form({todoItems,setTodos}){
    const [todoItem,setTodo]= useState({name:"",done:false});

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todoItems,todoItem]);
        setTodo({name:""});
    }
    return <form className={styles.todoForm} onSubmit={handleSubmit}>
   <div className={styles.inputContainer}>
   <input className={styles.inputBox} onChange={(e)=> setTodo({name:e.target.value , done:false})} value={todoItem.name} type="text" />
    <button className={styles.submitBtn} type="submit">Add</button>
   </div>
</form>
}
