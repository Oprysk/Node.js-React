import './main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import reducers from 'reducers'
import Layout from 'containers/layout'
import Phones from 'containers/phones'
import Phone from 'containers/phone'
import Basket from 'containers/basket'
import Dashboard from 'containers/dashboard'
import Login from 'containers/login'
import NotFound from 'containers/errorPages/notFound'

import './main.css';
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path='/' component={Login} />
      <Route component={Layout}>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/phones' component={Phones}/>
        <Route path='/categories/:id' component={Phones}/>
      </Route>

        {/*<Route path='/login' component={Login}/>*/}
      <Route path='/phones/:id' component={Phone}/>
      <Route path='/basket' component={Basket} />


        <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
