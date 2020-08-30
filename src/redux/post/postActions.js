import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_COMMENT_FAILURE,
  FETCH_POSTS_COMMENT_SUCCESS,
  FETCH_POSTS_COMMENT_REQUEST
} from './postTypes'

/**
 * fetch post action
 * @returns {{type: string}}
 */
export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}

/**
 * fetch post success action
 * @param users
 * @returns {{payload: *, type: string}}
 */
export const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

/**
 * fetch post data fail action
 * @param error
 * @returns {{payload: *, type: string}}
 */
export const fetchPostsFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}

/**
 * fetch post action
 * @returns {{type: string}}
 */
export const fetchPostsCommentRequest = () => {
  return {
    type: FETCH_POSTS_COMMENT_REQUEST
  }
}

/**
 * fetch post success action
 * @param users
 * @returns {{payload: *, type: string}}
 */
export const fetchPostsCommentSuccess = posts => {
  return {
    type: FETCH_POSTS_COMMENT_SUCCESS,
    payload: posts
  }
}

/**
 * fetch post data fail action
 * @param error
 * @returns {{payload: *, type: string}}
 */
export const fetchPostsCommentFailure = error => {
  return {
    type: FETCH_POSTS_COMMENT_FAILURE,
    payload: error
  }
}
