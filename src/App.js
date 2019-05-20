import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Something from './Something'
import Manager from './todo/Manager'

export class App extends Component {
  render() {
    return (
      <Manager />
    )
  }
}

export default App
