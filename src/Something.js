import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withProp from './withProp'

export class Something extends Component {
  render() {
    const { prop1, prop2, extraFuncProp, fromState } = this.props
    
    return (
      <div>
        <div>Prop1: {prop1}</div>
        <div>Prop2: {prop2}</div>
        <div>extraFuncProp: {extraFuncProp.toString()}</div>
        <div>fromState: {fromState}</div>
      </div>
    )
  }
}

Something.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string.isRequired,
  extraFuncProp: PropTypes.func.isRequired,
  fromState: PropTypes.string.isRequired
}

export default withProp(Something)
