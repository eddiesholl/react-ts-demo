import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { todosReducer } from './todo/redux'

export default () => {
  const middlewares = [
    thunk
  ]
  let reduxDev
  reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  middlewares.push(createLogger())

  const store = createStore(
    combineReducers({ todos: todosReducer }),
    compose(
      reduxDev,
      applyMiddleware(...middlewares)
    )
  )

  return store
}
