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

  render () {
    const { filesById, filesAllIds } = this.props
    return (
      <div>
        {filesAllIds.map((id, index) => (
            <li onClick={this.handleClick} id={id} key={index}>Filename: {filesById[id].name}</li>
        ))}
      </div>
    )
  }
}

const FileList = withRouter(connect(mapStateToProps, mapDispatchToProps)(FileListComponent))

export default FileList
