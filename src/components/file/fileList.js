import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

// selectors
import { getById, getAllIds } from '../../reducers/file'

// actions
import { emitFile } from '../../actions/file'

const mapStateToProps = state => ({
  filesById: getById(state),
  filesAllIds: getAllIds(state)
})

const mapDispatchToProps = dispatch => ({
  setFile (data) {
    dispatch(emitFile(data))
  }
})

class FileListComponent extends React.Component {
  static propTypes = {
    filesById: PropTypes.object.isRequired,
    filesAllIds: PropTypes.array.isRequired,
    setFile: PropTypes.func.isRequired
  }

  handleClick = (e) => {
    const { setFile, history } = this.props
    history.push({
      pathname: '/showfile'
    })
    setFile(e.target.id)
  }

  getDisable = () => {
    const { organisation } = this.props
    if (Object.keys(organisation).length === 0) return true
    return false
  }

  render () {
    const { filesById, filesAllIds, organisation } = this.props
    return (
      <div className='card-body'>
        {filesAllIds.map((id, index) => (
          <div className='row card-header' key={index}>
            <div className='col-sm-7 card-text' onClick={this.handleClick} id={id}>{filesById[id].name}</div>
            <div className='col-sm-2'>
              <button className='btn btn-info'>Get Link</button>
            </div>
            <div className='col-sm-2'>
              <button
                className='btn btn-info'
                disabled={this.getDisable()}
                >
                  Add to Organisation
                </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const FileList = withRouter(connect(mapStateToProps, mapDispatchToProps)(FileListComponent))

export default FileList
