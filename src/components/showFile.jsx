import React from 'react'
import { connect } from 'react-redux'

// selectors
import { getFile } from '../reducers/publicReducer'

// actions
import { startFetchPublicFile } from '../actions/publicAction'

const mapStateToProps = state => ({
  activeFile: getFile(state)
})

const mapDispatchToProps = dispatch => ({
  // setFile (data) {
  //   dispatch(emitFile(data))
  // },
  fetchFile (data) {
    dispatch(startFetchPublicFile(data))
  }
})

class ViewFileComponent extends React.Component {
  // componentWillUnmount () {
  //   const { setFile } = this.props
  //   setFile('')
  // }
  componentDidMount () {
    const { fetchFile } = this.props
    const { userId, fileId } = this.props.match.params
    fetchFile({ fileId, userId })
  }

  render () {
    const { activeFile } = this.props
    return (
      <div>
        {
          Object.keys(activeFile).length !== 0
            ? (
              <div className='vertical-center-createfile'>
                <div className="row">
                  <div className='col-sm-8 offset-sm-2'>
                    <div className="login-border">
                      <h5>Read/Write</h5>
                      <div className="form-group form-group-createfile">
                        <label htmlFor='filename'>Filename</label>
                        <input className="form-control" id='filename' type='text' ref="filename" placeholder='Type filename' value={activeFile.name}/>
                      </div>
                      <div className="form-group form-group-createfile">
                        <label htmlFor='content'>File Content</label>
                        <textarea className="form-control" rows='10' cols='50' name='content' ref="content" placeholder='Type file content here'>{activeFile.content}</textarea>
                      </div>
                      <div className="form-group form-group-createfile">
                        <button className="btn btn-primary hc-button">Edit File</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            : null
        }
      </div>
    )
  }
}

const ViewFile = connect(mapStateToProps, mapDispatchToProps)(ViewFileComponent)

export default ViewFile
