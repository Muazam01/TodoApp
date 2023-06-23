
import TodoItems from "./TodoItems";

const TodoList=(props)=>{
    const deleteTodo=(Id)=>{
        let taskList=[...props.todos]
        return console.log(taskList[Id])
    }

    return(
        <div>
            {props.todos.map((todo)=><TodoItems deleteItem={deleteTodo} key={todo.index} title={todo.title} description={todo.description}/>)}
        </div>

    )
}

export default TodoList