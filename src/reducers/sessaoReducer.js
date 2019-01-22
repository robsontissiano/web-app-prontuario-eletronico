import {
  FETCH_SESSOES,
} from '../actions/types/index';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_SESSOES:
      return { list: action.payload.sessoes, ...state };
     default:
      // return state;
  }

  return state;
}