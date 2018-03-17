import React from 'react'
import { connect } from 'react-redux'

// selectors
import { getById, getActiveFile } from '../../reducers/file'

// actions
import { emitFile } from '../../actions/file'

const mapStateToProps = state => ({
  filesById: getById(state),
  activeFile: getActiveFile(state)
})

const mapDispatchToProps = dispatch => ({
  setFile (data) {
    dispatch(emitFile(data))
  }
})

class ViewFileComponent extends React.Component {
  componentWillUnmount () {
    const { setFile } = this.props
    setFile('')
  }

  render () {
    const { filesById, activeFile } = this.props
    return (
      <div>
        {
          filesById[activeFile]
            ? (
              <div>
                <h4>{filesById[activeFile].name}</h4>
                <p>{filesById[activeFile].content}</p>
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
