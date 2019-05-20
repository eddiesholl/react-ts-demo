import React from 'react'

const ListView = (props) => {
  const { items } = props

  return (
    <ol>
      {
        items.map(item => <li key={item.id}>{item.text}</li>)
      }
    </ol>
  )
}

export default ListView
