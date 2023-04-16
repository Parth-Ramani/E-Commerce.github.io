import { combineReducers } from 'redux'
import heplerReducer from './heplerReducer'
import sampleReducer from './sampleReducer'

export default combineReducers({
  sampleData: sampleReducer,
  helper: heplerReducer
})
