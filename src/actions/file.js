import { checkStatus, parseJSON } from '../helpers/utils'
import { SET_FILES } from '../helpers/actions'

const emitSetFiles = data => {
  const byId = {}
  let allIds = []
  if (data) {
    data.forEach(file => {
      byId[file.id] = file
      allIds = allIds.concat(file.id)
    })
  }
  return {
    type: SET_FILES,
    byId,
    allIds
  }
}

const postFile = ({name, content, userId, jwt}) => {
  const url = process.env.REACT_APP_SERVER + '/api/files?access_token=' + jwt
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, content, userId })
  })
}

export const startPostFile = (data, cb) => dispatch => {
  return postFile(data)
  .then(checkStatus)
  .then(parseJSON)
  .then(json => {
    console.log('data inside post file', json)
    cb()
  })
  .catch(err => {
    console.error(err)
  })
}

const fetchFiles = ({ userId, jwt }) => {
  const url = process.env.REACT_APP_SERVER + '/api/files/userId/' + userId + '/?access_token=' + jwt
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const startFetchFiles = data => dispatch => {
  return fetchFiles(data)
  .then(checkStatus)
  .then(parseJSON)
  .then(json => {
    console.log('data inside fetch files', json)
    dispatch(emitSetFiles(json))
  })
  .catch(err => {
    console.error(err)
  })
}
