import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import logo from '../../logo.svg';
import '../../App.css';

// actions
import { startPostLogin } from '../../actions/login'

// selectors
import { getIsLoggedIn } from '../../reducers/accounts'

class LoginComponent extends React.Component {

  static propTypes = {
    startLogin: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  }

  handleClick = () => {
    const { startLogin } = this.props
    const email = this.refs.email.value
    const password = this.refs.password.value
    startLogin({email, password})
  }

  render () {
    const { isLoggedIn } = this.props
    if (isLoggedIn) return <Redirect to='/dashboard'/>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to File-sharing-system</h1>
        </header>
        <div className="App-intro">
          <div>
            <input type="email" ref="email"/>
            <input type="password" ref="password"/>
            <input type="button" onClick={this.handleClick} value="login"/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state)
})

const mapDispatchToProps = dispatch => ({
  startLogin (data) {
    dispatch(startPostLogin(data))
  }
})

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)

export default Login
