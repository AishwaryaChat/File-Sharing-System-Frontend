import { SET_LOGIN, APP_LOGOUT } from '../helpers/actions'

const INITIAL_STATE = {
  isLoggedIn: false,
  id: '',
  email: ''
}

export const getIsLoggedIn = state => state.accounts.isLoggedIn
export const getJwt = state => state.accounts.id

const accounts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'New':
      return INITIAL_STATE
    case SET_LOGIN: {
      return Object.assign({}, state, {
        email: action.data.email,
        id: action.data.id,
        isLoggedIn: true
      })
    }
    case APP_LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}

export default accounts
