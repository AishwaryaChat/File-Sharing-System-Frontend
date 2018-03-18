import { combineReducers } from 'redux'
import accounts from './accounts'
import file from './file'
import organisation from './organisation'

const rootReducer = combineReducers({
  accounts,
  file,
  organisation
})

export default rootReducer
