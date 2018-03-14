import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'

import Login from './login'
import Dashboard from './dashboard'

const AppRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
)

export default AppRouter
