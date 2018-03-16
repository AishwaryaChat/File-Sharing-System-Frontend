import React from 'react'
import { connect } from 'react-redux'

// selectors
import { getById, getAllIds } from '../../reducers/file'

class FileListComponent extends React.Component {
  render () {
    const { filesById, filesAllIds } = this.props
    return (
      <div>
        {filesAllIds.map((id, index) => (
          <div key={index}>
            <h5><a>Filename: {filesById[id].name}</a></h5>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filesById: getById(state),
  filesAllIds: getAllIds(state)
})

const mapDispatchToProps = dispatch => ({})

const FileList = connect(mapStateToProps, mapDispatchToProps)(FileListComponent)

export default FileList
