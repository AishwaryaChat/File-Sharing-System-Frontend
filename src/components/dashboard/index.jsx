import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class DashboardComponent extends React.Component {
  render () {
    return (
      <div>
        <h3>Dashboard Component</h3>
        <div>
          <Link to='/createorganisation'>Create Organisation</Link>
        </div>
        <div>
          <Link to='/addfile'>Create File</Link>
        </div>
      </div>
    )
  }
}

const Dashboard = connect()(DashboardComponent)

export default Dashboard
