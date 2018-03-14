import { SET_LOGIN } from '../helpers/actions'

const INITIAL_STATE = {
  isLoggedIn: false,
  userId: '',
  id: '',
  email: ''
}

export const getIsLoggedIn = state => state.accounts.isLoggedIn

const accounts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'New':
      return INITIAL_STATE
    case SET_LOGIN: {

      return Object.assign({}, state, {
        email: action.data.email,
        id: action.data.id,
        userId: action.data.userId,
        isLoggedIn: true
      })
    }
    default:
      return state
  }
}

export default accounts
