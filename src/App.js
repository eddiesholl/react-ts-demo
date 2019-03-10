import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Something from './Something'

export class App extends Component {
  render() {
    return (
      <Something prop1={'first'} prop2={'second'} />
    )
  }
}

export default App
