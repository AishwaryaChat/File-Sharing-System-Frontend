import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import { startPostFile } from '../../actions/file'

// selectors
import { getJwt, getUserId } from '../../reducers/accounts'

const mapStateToProps = state => ({
  jwt: getJwt(state),
  userId: getUserId(state)
})

const mapDispatchToProps = dispatch => ({
  postFile (data, cb) {
    dispatch(startPostFile(data, cb ))
  }
})

class AddFileComponent extends React.Component {
  handleClick = () => {
    const name = this.refs.filename.value
    const content = this.refs.content.value
    const { jwt, userId, postFile, history } = this.props
    postFile({name, content, userId, jwt}, () => {
      history.push({
        pathname: '/dashboard'
      })
    })
  }

  render () {
    return (
      <div>
        <div>
          <label htmlFor='filename'>Filename</label>
          <input id='filename' type='text' ref="filename"/>
        </div>
        <div>
          <label htmlFor='content'>File Content</label>
          <textarea rows='10' cols='50' name='content' ref="content" placeholder='Type your content here' />
        </div>
        <div>
          <button onClick={this.handleClick}>Save File</button>
        </div>
      </div>
    )
  }
}



const AddFile = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddFileComponent))

export default AddFile
