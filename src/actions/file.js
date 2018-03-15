import { checkStatus, parseJSON, composeAuth } from '../helpers/utils'

const postFile = ({name, content, userId, jwt}) => {
  const Authorization = composeAuth(jwt)
  const url = process.env.REACT_APP_SERVER + '/api/files' + '?access_token=' + jwt
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, content, userId })
  })
}

export const startPostFile = data => dispatch => {
  return postFile(data)
  .then(checkStatus)
  .then(parseJSON)
  .then(json => {
    console.log('data inside post file', json)
  })
  .catch(err => {
    console.error(err)
  })
}
