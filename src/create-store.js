import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './redux/modules/reducer'

export default () => {
  const middlewares = [
    thunk
  ]
  let reduxDev
  reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  middlewares.push(createLogger())

  const store = createStore(
    rootReducer//,
    // reduxDev,
    // applyMiddleware(...middlewares)
  )

  return store
}
