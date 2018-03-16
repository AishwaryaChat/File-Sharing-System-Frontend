import { combineReducers } from 'redux'
import accounts from './accounts'
import file from './file'

const rootReducer = combineReducers({
  accounts,
  file
})

export default rootReducer
