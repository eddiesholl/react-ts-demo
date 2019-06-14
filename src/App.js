import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Something from './Something'

const greetings = (name) => {
  return "G'day ${name}"
}

export class App extends Component {
  render() {
    return (
      <Something prop1={'first'} prop2={'second'} extraFuncProp={greetings} />
    )
  }
}

export default App
