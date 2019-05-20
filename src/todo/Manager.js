import React, { useState } from 'react'


import ListView from './ListView'

const Manager = () => {
  const [todos, setTodos] = useState([{ id: 1, text: 'Remember the milk'}, { id: 2, text: 'Don\'t forget me'}]);

  return (
    <ListView items={todos} />
  )
}

export default Manager
