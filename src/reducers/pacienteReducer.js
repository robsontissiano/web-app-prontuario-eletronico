import {
  FETCH_PACIENTES,
} from '../actions/types/index';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_PACIENTES:
      return { list: action.payload.pacientes, ...state };
     default:
      // return state;
  }

  return state;
}