import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withProp from './withProp'

export class App extends Component {
  render() {
    const { prop1, prop2 } = this.props
    
    return (
      <div>
        Prop1: {prop1}
        Prop2: {prop2}
      </div>
    )
  }
}

App.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string.isRequired
}

export default withProp(App)
