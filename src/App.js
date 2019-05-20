import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Something from './Something'
import ListView from './todo/ListView'

export class App extends Component {
  render() {
    return (
      <ListView items={[{ id: 1, text: 'Remember the milk'}, { id: 2, text: 'Don\'t forget me'}]} />
    )
  }
}

export default App
