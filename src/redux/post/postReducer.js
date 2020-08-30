import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_COMMENT_REQUEST,
  FETCH_POSTS_COMMENT_SUCCESS, FETCH_POSTS_COMMENT_FAILURE
} from './postTypes'

// Initial state values for postReducer
const initialState = {
  loading: false,
  posts: [],
  postscommnet:[],
  error: ''
}

/**
 * User reducer return state based on action
 * @param state
 * @param action
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ''
      }
    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload
      }
    case FETCH_POSTS_COMMENT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_POSTS_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        postscommnet: action.payload,
        error: ''
      }
    case FETCH_POSTS_COMMENT_FAILURE:
      return {
        loading: false,
        postscommnet: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer
