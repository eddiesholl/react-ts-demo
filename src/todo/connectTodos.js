import { connect } from 'react-redux'

import { selectTodos } from './redux'

const mapStateToProps = state => {
  return {
    todos: selectTodos(state)
  }
}

export default connect(mapStateToProps, null)
