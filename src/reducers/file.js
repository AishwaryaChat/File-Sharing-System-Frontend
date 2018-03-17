import { SET_FILES, SET_ORGANISATION, APP_LOGOUT, SET_FILE } from '../helpers/actions'

const INITIAL_STATE = {
  byId: {},
  allIds: [],
  organisation: {},
  activeFile: ''
}

// selectors
export const getById = state => state.file.byId
export const getAllIds = state => state.file.allIds
export const getOrganisation = state => state.file.organisation
export const getActiveFile = state => state.file.activeFile

const file = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'New':
      return INITIAL_STATE
    case SET_FILES:
      return Object.assign({}, state, {
        byId: action.byId,
        allIds: action.allIds
      })
    case SET_ORGANISATION:
      return Object.assign({}, state, {
        organisation: action.organisation
      })
    case SET_FILE:
      return Object.assign({}, state, {
        activeFile: action.id
      })
    case APP_LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}

export default file
