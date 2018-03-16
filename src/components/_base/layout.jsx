import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Header } from './header'
import { getIsLoggedIn } from '../../reducers/accounts'

export const Layout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <Header />
          <Component {...matchProps} />
        </div>
      )}
    />
  )
}

const LayoutComponent = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => {
  if (isLoggedIn) {
    return <Layout {...rest} component={Component} />
  } else return <Redirect to='/' />
}

LayoutComponent.props = {
  isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state)
})

const PrivateLayout = connect(mapStateToProps)(LayoutComponent)

export default PrivateLayout
