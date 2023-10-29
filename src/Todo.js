import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
        // <div data-testid="todo-1">
            <label>
                <input  type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
                {todo.name}
            </label>
        // </div>
    )
}
