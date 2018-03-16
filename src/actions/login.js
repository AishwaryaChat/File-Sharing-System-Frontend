import { checkStatus, parseJSON } from '../helpers/utils'
import { SET_LOGIN, APP_LOGOUT } from '../helpers/actions'

const emitLogin = data => ({
  type: SET_LOGIN,
  data: data
})

export const emitLogout = () => ({
  type: APP_LOGOUT
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
        id: json.id
      })
    )
  })
  .catch(err => {
    console.error(err)
  })
}

const logout = ({ jwt }) => {
  const url = process.env.REACT_APP_SERVER + '/api/Users/logout/?access_token=' + jwt
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
}

export const startLogout = data => dispatch => {
  return logout(data)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => {
      console.log(err)
      return {}
    })
    .then(json => {
      console.log('data inside logout', json)
      dispatch(emitLogout())
    })
    .catch(err => {
      console.error(err)
    })
}
