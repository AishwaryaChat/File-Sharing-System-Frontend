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
    return (
      <div>
        <h3>Organisation Component</h3>
        <div>
          <Link to='/createorganisation'>Create Organisation</Link>
        </div>
      </div>
    )
  }
}

const Organisation = connect(mapStateToProps, mapDispatchToProps)(OrganisationComponent)

export default Organisation
