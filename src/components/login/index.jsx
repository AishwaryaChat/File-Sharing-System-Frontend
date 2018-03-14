import React from 'react'
import { connect } from 'react-redux'

import logo from '../../logo.svg';
import '../../App.css';

// actions
import { startPostLogin } from '../../actions/login'

class LoginComponent extends React.Component {

  handleClick = () => {
    const { startLogin } = this.props
    const email = this.refs.email.value
    const password = this.refs.password.value
    startLogin({email, password})
  }

  render () {
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

const mapDispatchToProps = dispatch => ({
  startLogin (data) {
    dispatch(startPostLogin(data))
  }
})

const Login = connect(null, mapDispatchToProps)(LoginComponent)

export default Login
