import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Subtract } from 'utility-types'

import { State } from './types'

const extraFuncProp: (x: string) => string = (foo) => foo + 'sss'

export interface InjectedFuncProp {
  extraFuncProp: (x: string) => string
}

export interface InjectedStringProp {
  fromState: string
}

export interface InjectedProps extends InjectedFuncProp, InjectedStringProp {}

export function withProp<P extends InjectedProps>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentClass<P> {
  class WithProp extends Component<Subtract<P, InjectedProps>, {}> {
    render() {
      return <WrappedComponent {...this.props as P} />
    }
  }

  const actionCreators = {
    extraFuncProp
  }

  const mapStateToProps = (state: State, props: P):InjectedStringProp => {
    return {
      fromState: 'foo'
    }
  }

  // StateProps, DispatchProps, OwnProps
  return WithProp
  // return connect<any, any, any>(mapStateToProps, actionCreators)(WithProp)
}

export default withProp
