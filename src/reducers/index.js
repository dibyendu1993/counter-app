import { combineReducers } from 'redux'
import countervalReducer from './countervalReducer'
import counterReducer from './counterReducer'

export default combineReducers({
    countervalReducer:countervalReducer,
    counterReducer:counterReducer
  })