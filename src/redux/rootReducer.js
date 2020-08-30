import { combineReducers } from 'redux'
import postReducer from './post/postReducer'

// Register all reducer
const rootReducer = combineReducers({
  // post reducer state
  posts: postReducer
})

export default rootReducer
