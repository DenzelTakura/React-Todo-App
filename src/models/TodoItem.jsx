import styles from "./css/todoitem.module.css"

export default function TodoItem({task,todos,setTodos,setTodo}){
    function handleDelete(task){
        setTodos(todos.filter((todo)=>todo !== task))

        }   
        function handleCompleted(task){
                setTodos(todos.map((todo)=> todo.name===task.name ? {...todo,done:!todo.done}:todo))
             
        }
        const className = task.done ? styles.completed :styles.task;
         return <div className={styles.todoContainer}>
        <form className={styles.miniForm}>
            <h3 onClick={()=>handleCompleted(task,)} className={className}>{task.name}  </h3>
        </form>
        <button className={styles.deleteBtn} onClick={()=>handleDelete(task)}>X</button>  
          </div>
}