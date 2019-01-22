import axios from 'axios';
import { API_URL } from '../config';
import {
  FETCH_PACIENTES,
} from './types/index';

/**
 * Fetch all pacientes
 */
export function fetchPacientes() {
  // const paciente = JSON.parse(localStorage.getItem('paciente'));
  // const token = localStorage.getItem('session_key');
  // console.log(token);

  return function (dispatch) {
    axios.get(API_URL+'/pacientes', { 
      headers: { "Authorization": "Bearer "+localStorage.getItem('session_key')}})
      .then(response => {
        // console.log(response.data.data);
        dispatch({
          type: FETCH_PACIENTES,
          payload: response.data.data,
        });
      });
  }
}


/**
 * Insert Patient
 */
 /*
export function insertPatient(props) {
  const { data } = props;

  return function (dispatch) {
    axios.post(`${API_URL+'/pacientes'}`, {
      headers: { "Authorization": "Bearer "+localStorage.getItem('session_key')}
      data,
      // username, password,   "group_id": 1,
      // "method": "password" })
    })
      .then(response => {
        localStorage.setItem('last_upadte_user', response.data.data);
        // dispatch({ type: PUT_USER });
        history.push('/PACIENTES');
      })
      .catch(() => dispatch(authError(SIGNIN_FAILURE, "Verifique os dados do Paciente e tente novamente")));
  }
}


export function signinUser(props) {
  const { username, password } = props;

  return function (dispatch) {
    axios.post(`${LOGIN_URL}`, { 
      username, password,   "group_id": 1,
      "method": "password" 
    }).then(response => {
        localStorage.setItem('session_key', response.data.data.session_key);
        dispatch({ type: PUT_USER });
        history.push('/');
      })
      .catch(() => dispatch(authError(SIGNIN_FAILURE, "Verifique o usuario ou senha")));
  }
}
*/