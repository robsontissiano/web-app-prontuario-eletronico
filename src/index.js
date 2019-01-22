import React from "react";
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import "semantic-ui-css/semantic.min.css";
import './static/css/index.css';
// import * as serviceWorker from './serviceWorker';
//
import { AUTH_USER } from './actions/types/index';
import reducers from './reducers';
import history from './history';
  import Home from "./components/pages/Home";
  // import Patients from "./components/pages/Patients";
  import Calls from "./components/pages/Calls";
  // import LoginPage from "./components/pages/LoginPage";
  import Agenda from "./components/pages/Agenda";
  import PreConsult from "./components/pages/PreConsult";
import PacienteList from './components/pages/pacientes/PacienteList';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import requireAuth from './components/hoc/RequireAuth';
import requireNotAuth from './components/hoc/RequireNotAuth';
// import ajax from "./components/pages/ajax";
// import { AuthorizedComponent } from 'react-router-role-authorization';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = JSON.parse(localStorage.getItem('user'));

// console.log("####### USUARIO #######");
// console.log(user);

// this.userRoles = ['recepcionista'] 
// localStorage.getItem('username');
// this.notAuthorizedPath = '/login';

if (user && user.token) {
  store.dispatch({ type: AUTH_USER });
}

// var medico = ["Home", "Calls"];
// var enfermeiro = ["Home","PreConsult"]
// var recepcionista = ["Home", "PacienteList", "Agenda", "Signin", "SignOut"]

// function arrayContains(Route, UserRoutesArray)
// {
//     return (UserRoutesArray.indexOf(Route) > -1);
// }


// console.log("####### USUARIO LOGADO #######");
// console.log(user)

// arrayContains(String(Home), user)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>

        <Route exact path="/" component={requireAuth(Home)} />
        <Route path="/pacientes" component={requireAuth(PacienteList)} /> 
        {/*  <Route authorize={['recepcionista']} path="/pacientes" component={requireAuth(PacienteList)} />*/}
        <Route path="/triagem" component={requireAuth(PreConsult)}/>
        <Route path="/atendimentos" component={requireAuth(Calls)}/>
        <Route path="/agenda" component={requireAuth(Agenda)}/>
        <Route path="/login" component={requireNotAuth(Signin)} />
        <Route path="/signin" component={requireNotAuth(Signin)} />
        <Route path="/signout" component={requireAuth(Signout)} />
        {/* <Route path="/ajax" component={(ajax)} /> */}
      </div>

    </Router>
  </Provider>,
  document.getElementById('root'),
);;