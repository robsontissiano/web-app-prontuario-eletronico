import axios from 'axios';
import { API_URL } from '../config';
import {
  FETCH_SESSOES,
} from './types/index';

/**
 * Fetch all sessions
 */

export function fetchSessoes() {

  return function (dispatch) {
    axios.get(API_URL+'/sessoes', { 
      headers: { "Authorization": "Bearer "+localStorage.getItem('session_key')}})
      .then(response => {
        // console.log(response.data.data);
        dispatch({
          type: FETCH_SESSOES,
          payload: response.data.data,
          // payload: response.data.sessoes,
        });
      });
  }
}

