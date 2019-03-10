import React, { Component } from 'react'

import withProp from './withProp'

export interface SomethingProps {
  prop1: string,
  prop2: string,
  extraFuncProp: (x: string) => string,
  fromState: string
}

export class Something extends Component<SomethingProps, {}> {
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


export default withProp(Something)
