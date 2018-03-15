import React from 'react'

class CreateOrganisationComponent extends React.Component {
  render () {
    return (
      <div>
        <div>
          <label htmlFor='filename'>Filename</label>
          <input id='filename' type='text' />
        </div>
        <div>
          <label htmlFor='content'>File Content</label>
          <textarea rows='10' cols='50' name='content' placeholder='Type your content here' />
        </div>
        <div>
          <button>Save File</button>
        </div>
      </div>
    )
  }
}

export default CreateOrganisationComponent
