import axios from 'axios';
import {
  fetchPostsCommentFailure,
  fetchPostsCommentRequest, fetchPostsCommentSuccess,
  fetchPostsFailure,
  fetchPostsRequest, fetchPostsSuccess,
} from './postActions';

const BASE_URL = process.env.REACT_APP_BASE_URL;

/**1
 * get userlist api
 * @returns {function(...[*]=)}
 */
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest())
    axios
      .get(`${BASE_URL}facebook_post/1`)
      .then(response => {
        // response.data is the users
        const posts = response.data.list
        dispatch(fetchPostsSuccess(posts))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchPostsFailure(error.message))
      })
  }
}

export const fetchPostsComment = () => {
  return (dispatch) => {
    dispatch(fetchPostsCommentRequest())
    axios
      .get(`${BASE_URL}facebook_comments/1`)
      .then(response => {
        // response.data is the users
        const posts = response.data.list
        dispatch(fetchPostsCommentSuccess(posts))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchPostsCommentFailure(error.message))
      })
  }
}
