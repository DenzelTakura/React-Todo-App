import TodoItem from "./TodoItem"
import styles from "./css/todoitems.module.css"
export default function TodoItems({todoItems,setTodos}){

    return <div className={styles.list}> {todoItems.map((item)=>(
        <TodoItem key={todoItems.indexOf(item)} task={item} todos={todoItems} setTodos={setTodos}/>
    ))}
    </div>
}