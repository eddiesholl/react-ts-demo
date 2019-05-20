import React, { useState } from 'react'

import ListView from './ListView'
import AddTodo from './AddTodo'
import TodoCounter from './TodoCounter'

const Manager = (props) => {
  const { todos } = props

  return (
    <div>
      <ListView items={todos} />
      <AddTodo />
      <TodoCounter items={todos} />
    </div>
  )
}

import connectTodos from './connectTodos'

export default connectTodos(Manager)
