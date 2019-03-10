import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const extraFunc = (foo) => foo + 'sss'

function withProp(WrappedComponent) {
  class WithProp extends Component {
    render() {
      return <WrappedComponent extraFuncProp={this.props.extraFuncProp} {...this.props} />
    }
  }

  WithProp.propTypes = {
    extraFuncProp: PropTypes.func.isRequired
  }

  const actionCreators = {
    extraFunc
  }

  return connect(null, actionCreators)(WithProp)
}

export default withProp
