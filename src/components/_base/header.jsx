import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const HeaderComponent = ({ dispatchLogout }) => (
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
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

HeaderComponent.props = {
  dispatchLogout: PropTypes.func.isRequired
}

export const Header = connect(null, null)(
  HeaderComponent
)
