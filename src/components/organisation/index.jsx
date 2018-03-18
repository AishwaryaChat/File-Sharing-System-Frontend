import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {CopyToClipboard} from 'react-copy-to-clipboard'

// seletors
import { getOrganisation } from '../../reducers/organisation'
import { getJwt } from '../../reducers/accounts'

// actions
import { startFetchFiles } from '../../actions/organisation'

import FileList from './fileList'

const mapStateToProps = state => ({
  organisation: getOrganisation(state),
  jwt: getJwt(state)
})

const mapDispatchToProps = dispatch => ({
  fetchFiles (data) {
    dispatch(startFetchFiles(data))
  }
})

class OrganisationComponent extends React.Component {
  componentDidMount () {
    const { fetchFiles, organisation, jwt } = this.props
    fetchFiles({id: organisation.files, jwt})
  }

  render () {
    const { organisation } = this.props
    return (
      <div>
        <nav className='nav justify-content-center navbar-light bg-light'>
          <Link to='/organisation' className='nav-link'>My Organisation</Link>
          <div className='nav-link'>|</div>
          <Link to='/sharedorganisation' className='nav-link'>Shared Organisations</Link>
        </nav>
        {Object.keys(organisation).length !== 0
          ? (
            <div>
              <h5>{organisation.name}</h5>
              <div className='col-sm-2'>
                <CopyToClipboard
                  text={this.getUrl(organisation.id)}
                  onCopy={() => this.setState({copied: true})}>
                  <button className='btn btn-info'>Get Link</button>
                </CopyToClipboard>
              </div>
              <div className='card'>
                <span className='card-header'><h4>Files</h4></span>
                <FileList
                  organisation={organisation}
                />
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
