/* eslint-disable */
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';
import pacienteReducer from './pacienteReducer';
import sessaoReducer from './sessaoReducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  paciente: pacienteReducer,
  sessao: sessaoReducer
});

export default rootReducer;
