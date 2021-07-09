import React, {useState} from "react";

const NewTodoForm = (todo) => {
    console.log(todo.todo.value)
    return (
        <div>
            <h3>{todo.todo.value}</h3>
        </div>
    )
}

export default NewTodoForm