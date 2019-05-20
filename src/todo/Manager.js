import React, { useState } from 'react'

import ListView from './ListView'
import AddTodo from './AddTodo'
import TodoCounter from './TodoCounter'

const Manager = () => {
  return (
    <div>
      <ListView />
      <AddTodo />
      <TodoCounter />
    </div>
  )
}

export default Manager
