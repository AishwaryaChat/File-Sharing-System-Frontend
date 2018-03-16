import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

// ations
import { startPostOrganisation } from '../../actions/file'

// selectors
import { getJwt } from '../../reducers/accounts'

const mapStateToProps = state => ({
  jwt: getJwt(state)
})

const mapDispatchToProps = dispatch => ({
  createOrganisation (data, cb) {
    dispatch(startPostOrganisation(data, cb))
  }
})

class CreateOrganisationComponent extends React.Component {
  static propTypes = {
    createOrganisation: PropTypes.func.isRequired,
    jwt: PropTypes.string.isRequired
  }

  handleClick = () => {
    const { createOrganisation, jwt, history } = this.props
    const name = this.refs.name.value
    createOrganisation({name, jwt}, () => {
      history.push({
        pathname: '/dashboard'
      })
    })
  }

  render () {
    return (
      <div>
        <h3>Create New Organisation</h3>
        <div>
          <label htmlFor='name'>Organisation Name</label>
          <input id='name' type='text' ref='name'/>
        </div>
        <div>
          <button onClick={this.handleClick}>Create Organisation</button>
        </div>
      </div>
    )
  }
}

const CreateOrganisation = withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateOrganisationComponent))

export default CreateOrganisation
