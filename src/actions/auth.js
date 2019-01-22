import axios from 'axios';
// import { history } from 'react-router-dom';
import { LOGIN_URL } from '../config';
import {
  AUTH_USER,
  SIGNIN_FAILURE,
  UNAUTH_USER,
} from './types/index';
import history from '../history';

/**
 * Error helper
 */
export function authError(CONST, error) {
  return {
    type: CONST,
    payload: error,
  };
}


/**
 * Sign in
 */
export function signinUser(props) {
  const { username, password } = props;

  return function (dispatch) {
    // axios.post(`${LOGIN_URL}/signin`, { username, password })
    axios.post(`${LOGIN_URL}`, { username, password,   "group_id": 1,
    "method": "password" })
      .then(response => {
        // console.log(response.data);
        // localStorage.setItem('session_key', JSON.stringify(response.data.data.session_key));
        localStorage.setItem('session_key', response.data.data.session_key);
        // localStorage.setItem('session_key', response.data.session_key, { path: '/' });
        // console.log(username);
        localStorage.setItem('username', username);

        dispatch({ type: AUTH_USER });

        history.push('/');
      })
      .catch(() => dispatch(authError(SIGNIN_FAILURE, "Verifique o usuario ou senha")));
  }
}


/**
 * Sign out
 */
export function signoutUser() {
  localStorage.clear();

  return {
    type: UNAUTH_USER,
  }
}
