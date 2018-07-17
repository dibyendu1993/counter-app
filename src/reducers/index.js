import { combineReducers } from 'redux'
import {countervalueReducer} from './countervalueReducer'
import {counterReducer} from './counterReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    countername:countervalueReducer,
    countervalue:counterReducer,
    form: formReducer
  })