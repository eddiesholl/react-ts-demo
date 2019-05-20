import React, { useState } from 'react'


import ListView from './ListView'
import AddTodo from './AddTodo'
import TodoCounter from './TodoCounter'

const Manager = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <ListView items={todos} />
      <AddTodo />
      <TodoCounter items={todos} />
    </div>
  )
}

export default Manager
