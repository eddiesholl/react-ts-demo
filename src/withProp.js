import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const extraFuncProp = (foo) => foo + 'sss'

function withProp(WrappedComponent) {
  class WithProp extends Component {
    render() {
      console.log(this.props)
      return <WrappedComponent /*extraFuncProp={this.props.extraFuncProp}*/ {...this.props} />
    }
  }

  WithProp.propTypes = {
    extraFuncProp: PropTypes.func.isRequired,
    fromState: PropTypes.string.isRequired
  }

  const actionCreators = {
    extraFuncProp
  }

  const mapStateToProps = state => {
    return {
      fromState: 'foo'
    }
  }

  return connect(mapStateToProps, actionCreators)(WithProp)
}

export default withProp
