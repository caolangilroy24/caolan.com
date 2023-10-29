import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {
  return (
    todos.map(todo => {
        return <Todo data-testid={todo.id} key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
    })
  )
}
