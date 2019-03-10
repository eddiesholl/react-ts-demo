import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import createStore from './create-store'

const store = createStore()

const render = () => {
  const AppEntry = require('./App').default

  ReactDOM.render(
    <Provider store={store}>
        <AppEntry />
    </Provider>,
    document.getElementById('main')
  )
}

render()

// Hot Module Replacement API
if (module.hot) {
  // REVISIT: We may want to avoid hot reload on some parts of the client modules
  module.hot.accept('./App', render)
}
