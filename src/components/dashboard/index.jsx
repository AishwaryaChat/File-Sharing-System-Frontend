import React from 'react'
import { connect } from 'react-redux'

class DashboardComponent extends React.Component {
  render () {
    return (
      <div>
        Dashboard Component
      </div>
    )
  }
}

const Dashboard = connect()(DashboardComponent)

export default Dashboard
