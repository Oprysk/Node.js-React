import './main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import reducers from './frontend/reducers'
import Layout from './frontend/containers/layout'
import Dashboard from './frontend/containers/dashboard'
import NotFound from './frontend/containers/errorPages/notFound'

import './main.css';
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path='/' component={Dashboard}/>
      </Route>
        <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
