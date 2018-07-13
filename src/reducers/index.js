import { combineReducers } from 'redux'
import {countervalueReducer} from './countervalueReducer'
import {counterReducer} from './counterReducer'

export default combineReducers({
    countername:countervalueReducer,
    countervalue:counterReducer
  })