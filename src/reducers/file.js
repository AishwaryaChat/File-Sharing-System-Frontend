import { SET_FILES } from '../helpers/actions'

const INITIAL_STATE = {
  byId: {},
  allIds: []
}

// selectors
export const getById = state => state.file.byId
export const getAllIds = state => state.file.allIds

const file = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'New':
      return INITIAL_STATE
    case SET_FILES:
      return Object.assign({}, state, {
        byId: action.byId,
        allIds: action.allIds
      })
    default:
      return state
  }
}

export default file
