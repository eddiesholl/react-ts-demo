import React, { useState } from 'react'


import ListView from './ListView'
import AddTodo from './AddTodo'

let idCounter = 0
const makeTodo = text => {
  return { id: idCounter++, text: text }
}

const startingList = [makeTodo('Remember the milk'), makeTodo('Don\'t forget me')]

const Manager = () => {
  const [todos, setTodos] = useState(startingList);

  return (
    <div>
      <ListView items={todos} />
      <AddTodo createTodo={newTodoText => setTodos([...todos, makeTodo(newTodoText)])} />
    </div>
  )
}

export default Manager
