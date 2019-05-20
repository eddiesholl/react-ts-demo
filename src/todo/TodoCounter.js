import React from 'react'

const TodoCounter = (props) => {
  const { items } = props

  return <div>{`You've got ${items.length} items to remember 🤔`}</div>
}

export default TodoCounter
