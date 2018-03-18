import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// seletors
import { getOrganisation } from '../../reducers/organisation'
import { getJwt } from '../../reducers/accounts'

const mapStateToProps = state => ({
  organisation: getOrganisation(state),
  jwt: getJwt(state)
})

class OrganisationComponent extends React.Component {

  render () {
    const { organisation } = this.props
    return (
      <div>
        <nav className="nav justify-content-center navbar-light bg-light">
          <Link to='/organisation' className="nav-link">My Organisation</Link>
          <div className="nav-link">|</div>
          <Link to='/organisation' className="nav-link">Shared Organisations</Link>
        </nav>
        <div>
          <Link to='/createorganisation'>Create Organisation</Link>
        </div>
        {/* {Object.keys(organisation).length !== 0
          ? (
            <div>
              <h3>My Organisation</h3>
              <h5>Name: <span>{organisation.name}</span></h5>
              <div>
                Files
              </div>
            </div>
          )
          : (
            <div>
              <Link to='/createorganisation'>Create Organisation</Link>
            </div>
          )} */}
      </div>
    )
  }
}

const Organisation = connect(mapStateToProps)(OrganisationComponent)

export default Organisation
