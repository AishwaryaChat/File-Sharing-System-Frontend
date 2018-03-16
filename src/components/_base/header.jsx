import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// actions
import { startLogout } from '../../actions/login'

// selectores
import { getJwt } from '../../reducers/accounts'

class HeaderComponent extends React.Component {
  handleClick = () => {
      const { logout, jwt } = this.props
      logout({ jwt })
  }

  render () {
    return (
      <header>
        <div className="">
          <div className="">
            <nav className="navbar">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/dashboard">DashBoard</Link>
                </li>
                <li>
                  <Link to="/organisation">Organisation</Link>
                </li>
                <li>
                  <Link to="/invitations">Invitations</Link>
                </li>
                <li>
                  <button onClick={this.handleClick}>Logout</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      )
    }
}

HeaderComponent.props = {
  logout: PropTypes.func.isRequired,
  jwt: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  jwt: getJwt(state)
})

const mapDispatchToProps = dispatch => ({
  logout (data) {
    return dispatch(startLogout(data))
  }
})

export const Header = connect(mapStateToProps, mapDispatchToProps)(
  HeaderComponent
)
