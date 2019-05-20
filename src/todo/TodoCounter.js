import React from 'react'

import connectTodos from './connectTodos'

const TodoCounter = (props) => {
  const { todos } = props

  return <div>{`You've got ${todos.length} items to remember 🤔`}</div>
}

export default connectTodos(TodoCounter)
