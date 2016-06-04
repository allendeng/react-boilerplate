import { API_GET_USER_BY_ID } from '../constants/apis'
import {
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
} from '../constants/actionTypes'

const DEBUG = true

function getUserByIdRequest() {
  return {
    type: GET_USER_BY_ID_REQUEST,
    isFetching: true,
  }
}

function getUserByIdSuccess(user) {
  return {
    type: GET_USER_BY_ID_SUCCESS,
    isFetching: false,
    user,
  }
}

function getUserByIdFailure(error) {
  return {
    type: GET_USER_BY_ID_FAILURE,
    isFetching: false,
    error,
  }
}

export function getUserById(id) {
  return async (dispatch) => {
    dispatch(getUserByIdRequest())

    if (DEBUG) {
      setTimeout(() => dispatch(getUserByIdSuccess({ name: '高圆圆' })))
      return
    }

    try {
      const response = await fetch(API_GET_USER_BY_ID, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        body: `id=${id}`,
      })
      const responseJSON = await response.json()
      dispatch(getUserByIdSuccess(responseJSON))
    } catch (e) {
      dispatch(getUserByIdFailure(e))
    }
  }
}
