import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import getUserByIdReducer from './getUserByIdReducer'

const reducers = combineReducers({
  routing: routerReducer,
  getUserByIdState: getUserByIdReducer,
})

export default reducers
