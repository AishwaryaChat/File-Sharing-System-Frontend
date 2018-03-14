import { checkStatus, parseJSON } from '../helpers/utils'
import { SET_LOGIN } from '../helpers/actions'

const emitLogin = data => ({
  type: SET_LOGIN,
  data: data
})

const postLogin = ({email, password}) => {
  const url = process.env.REACT_APP_SERVER + '/api/Users/login'
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
}

export const startPostLogin = data => dispatch => {
  return postLogin(data)
  .then(checkStatus)
  .then(parseJSON)
  .then(json => {
    console.log('data inside login', json)
    dispatch(
      emitLogin({
        email: data.email,
        id: json.id,
        userId: json.userId
      })
    )
  })
  .catch(err => {
    console.error(err)
  })
}
