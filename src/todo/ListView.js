import React from 'react'
import connectTodos from './connectTodos';

const ListView = (props) => {
  const { todos } = props

  return (
    <ol>
      {
        todos.map(todo => <li key={todo.id}>{todo.text}</li>)
      }
    </ol>
  )
}

export default connectTodos(ListView)
