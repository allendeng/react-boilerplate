import { GET_USER_BY_ID_REQUEST, GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAILURE } from '../constants/actionTypes'

const defaultState = {
  isFetching: false,
  error: null,
  user: {
    name: '加载中...',
  }
}

export default function (state = defaultState, { type, ...other }) {
  switch (type) {
    case GET_USER_BY_ID_REQUEST:
      return { ...state, ...other }
    case GET_USER_BY_ID_SUCCESS:
      return { ...state, ...other }
    case GET_USER_BY_ID_FAILURE:
      return { ...state, ...other }
    default:
      return state
  }
}
