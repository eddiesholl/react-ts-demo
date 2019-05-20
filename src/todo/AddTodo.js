import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createTodo } from './redux'

const AddTodo = (props) => {
  const { createTodo } = props
  const [newTodoText, setTodoText] = useState('')

  return (
    <div>
      <input value={newTodoText} onChange={e => setTodoText(e.target.value)} />
      <button onClick={() => createTodo(newTodoText)}>Add todo</button>
    </div>
  )
}

export default connect(null, { createTodo })(AddTodo)
