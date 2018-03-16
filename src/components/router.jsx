import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'

import Login from './login'
import Layout from './_base/layout'
import Dashboard from './dashboard'
import CreateOrganisation from './organisation/createOrganisation'
import AddFile from './file/addFile'

const AppRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Layout exact path='/dashboard' component={Dashboard} />
        <Layout exact path='/createorganisation' component={CreateOrganisation} />
        <Layout exact path='/addfile' component={AddFile} />
      </Switch>
    </Router>
  </Provider>
)

export default AppRouter
