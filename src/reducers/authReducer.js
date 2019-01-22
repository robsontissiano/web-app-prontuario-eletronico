import {
  SIGNIN_FAILURE,
  AUTH_USER,
  UNAUTH_USER,
} from '../actions/types/index';

export default function(state = {}, action) {
  switch(action.type) {
    case SIGNIN_FAILURE:
      return { ...state, error: { signin: action.payload } };
    case AUTH_USER:
      return { ...state, authenticated: true, error: {} };
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: {} };
    default:
  }

  return state;
}