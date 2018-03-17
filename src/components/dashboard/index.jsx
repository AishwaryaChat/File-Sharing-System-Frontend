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
      <div className='container'>
        <h3>Dashboard Component</h3>
        <div>
          <Link to='/addfile'>Create File</Link>
        </div>
        <div>
          <h3>My files</h3>
          <FileList />
        </div>
      </div>
    )
  }
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)

export default Dashboard
