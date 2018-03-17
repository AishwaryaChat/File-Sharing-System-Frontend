import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// actions
import { startFetchOrganisation } from '../../actions/file'

// seletors
import { getOrganisation } from '../../reducers/file'
import { getJwt } from '../../reducers/accounts'

const mapStateToProps = state => ({
  organisation: getOrganisation(state),
  jwt: getJwt(state)
})

const mapDispatchToProps = dispatch => ({
  fetchOrganisation (data) {
    dispatch(startFetchOrganisation(data))
  }
})

class OrganisationComponent extends React.Component {
  componentDidMount () {
    const { fetchOrganisation, jwt } = this.props
    fetchOrganisation({ jwt })
  }

  render () {
    const { organisation } = this.props
    return (
      <div>
        {Object.keys(organisation).length !== 0
          ? (
            <div>
              <h3>My Organisation</h3>
              <h5>Name: <span>{organisation.name}</span></h5>
              <div>
                <h5>Add Members</h5>
                <input type="text" placeholder="type email id"/>
                <div>
                  <button>Add</button>
                </div>
              </div>
            </div>
          )
          : (
            <div>
              <Link to='/createorganisation'>Create Organisation</Link>
            </div>
          )}
      </div>
    )
  }
}

const Organisation = connect(mapStateToProps, mapDispatchToProps)(OrganisationComponent)

export default Organisation
