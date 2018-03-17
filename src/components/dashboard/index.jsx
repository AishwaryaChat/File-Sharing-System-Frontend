import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import FileList from '../file/fileList'

// actions
import { startFetchFiles } from '../../actions/file'

// selectors
import { getJwt } from '../../reducers/accounts'

const mapStateToProps = state => ({
  jwt: getJwt(state)
})

const mapDispatchToProps = dispatch => ({
  fetchFiles (data) {
    dispatch(startFetchFiles(data))
  }
})

class DashboardComponent extends React.Component {
  componentDidMount () {
    const { jwt, fetchFiles } = this.props
    fetchFiles({ jwt })
  }

  render () {
    return (
      <div className='col-sm-10 offset-sm-1 dashboard-wrapper'>
        <div className='row'>
          <div className='col-sm-6'>
            <h3>Dashboard</h3>
          </div>
          <div className='col-sm-2 offset-sm-4'>
            <Link className='btn btn-dark' to='/addfile'>Create File</Link>
          </div>
        </div>
        <div className='card'>
          <span className='card-header'><h4>My files</h4></span>
          <FileList />
        </div>
      </div>
    )
  }
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)

export default Dashboard
