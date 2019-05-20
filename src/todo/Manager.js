import React, { useState } from 'react'
import { connect } from 'react-redux'

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

import { selectTodos } from './redux'

const mapStateToProps = state => {
  return {
    todos: selectTodos(state)
  }
}

export default connect(mapStateToProps, null)(Manager)
