import { checkStatus, parseJSON } from '../helpers/utils'
import { SET_PUBLIC_FILE } from '../helpers/actions'

export const emitFile = file => ({
  type: SET_PUBLIC_FILE,
  file
})

const fetchPublicFile = ({ fileId, userId }) => {
  const url = process.env.REACT_APP_SERVER + `/api/PublicModels/getfile/${fileId}/user/${userId}`
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const startFetchPublicFile = data => dispatch => {
  return fetchPublicFile(data)
    .then(checkStatus)
    .then(parseJSON)
    .then(json => {
      console.log('data inside fetch public file', json)
      dispatch(emitFile(json))
    })
    .catch(err => {
      console.error(err)
    })
}
