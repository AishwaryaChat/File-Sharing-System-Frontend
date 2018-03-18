import { checkStatus, parseJSON } from '../helpers/utils'
import { SET_ORGANISATION } from '../helpers/actions'

const emitOrganisation = (data) => ({
  type: SET_ORGANISATION,
  organisation: data
})

const postOrganisation = ({name, jwt}) => {
  const url = process.env.REACT_APP_SERVER + '/api/organisations/?access_token=' + jwt
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })
}

export const startPostOrganisation = (data, cb) => dispatch => {
  return postOrganisation(data)
    .then(checkStatus)
    .then(parseJSON)
    .then(json => {
      console.log('data inside create organisation', json)
      dispatch(emitOrganisation(json))
      cb()
    })
    .catch(err => {
      console.error(err)
    })
}

const fetchOrganisation = ({jwt}) => {
  const url = process.env.REACT_APP_SERVER + '/api/organisations/?access_token=' + jwt
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const startFetchOrganisation = (data) => dispatch => {
  return fetchOrganisation(data)
    .then(checkStatus)
    .then(parseJSON)
    .then(json => {
      console.log('data inside fetch organisation', json)
      dispatch(emitOrganisation(json))
    })
    .catch(err => {
      console.error(err)
    })
}
