import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import reducers from './reducers'
import App from './presentationals/App'
import HomeContainer from './containers/HomeContainer'

const loggerMiddleware = createLogger()

const store = createStore(reducers,
  applyMiddleware(routerMiddleware(browserHistory), thunkMiddleware, loggerMiddleware))

const history = syncHistoryWithStore(browserHistory, store)

const container = document.createElement('div')
document.body.appendChild(container)

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="home" component={HomeContainer} />
      </Route>
    </Router>
  </Provider>
), container)
