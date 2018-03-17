import { checkStatus, parseJSON } from '../helpers/utils'
import { SET_FILES, SET_ORGANISATION, SET_FILE } from '../helpers/actions'

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

const emitOrganisation = (data) => ({
  type: SET_ORGANISATION,
  organisation: data
})

export const emitFile = id => ({
  type: SET_FILE,
  id
})

const postFile = ({name, content, jwt}) => {
  const url = process.env.REACT_APP_SERVER + '/api/files?access_token=' + jwt
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, content })
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

const fetchFiles = ({ jwt }) => {
  const url = process.env.REACT_APP_SERVER + '/api/files/?access_token=' + jwt
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

const fetchFile = ({id, jwt}) => {
  const url = process.env.REACT_APP_SERVER + '/api/files/file?access_token=' + jwt
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const startFetchFile = data => dispatch => {
  return fetchFile(data)
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
