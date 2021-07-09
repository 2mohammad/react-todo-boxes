import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import NewTodoForm from './NewTodoForm'

const TodoList = () => {

    const [todo, setTodo] = useState([])
    const handleSave = (e) => { 
        e.preventDefault()
        const value = document.getElementById("input").value
        setTodo([...todo, {value}])
        
    }

    return (
        <div>
            <input id="input"></input>
            <button onClick={handleSave}>Save</button>
            {todo.map(todoItem => <NewTodoForm todo={todoItem}></NewTodoForm>)}
        </div>
    )
}

export default TodoList;