import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../../history';

export default function (ComposedComponent) {
  class Authentication extends Component {






    componentWillMount() {

      function userCheck(Route){
        const user = localStorage.getItem('username');
        console.log("####### USUARIO #######");
        console.log(user);

        function arrayContains(Route, Username){

          // var medico = ["Home", "Calls", "Agenda"];
          // var enfermeiro = ["Home","PreConsult", "Agenda"]
          // var recepcionista = ["Home", "PacienteList", "Agenda", "Signin", "SignOut"]
          var UserRoutesArray = [];

          // console.log("rota recebida: " + Route);
            switch(Username){
              case 'medico':
                  UserRoutesArray = ["Home", "Calls", "Agenda"];
                  break
              case 'enfermeiro':
                  UserRoutesArray = ["Home","PreConsult", "Agenda"]
                  break
              case 'recepcionista':
                  UserRoutesArray = ["Home", "PacienteList", "Agenda", "Signin", "SignOut"]
                  break
              default:
                UserRoutesArray = ["Home", "PacienteList", "Agenda", "Signin", "SignOut"]
            }

            // return (UserRoutesArray.indexOf(Route) > -1);
            // return true
            if (UserRoutesArray.indexOf(Route) > -1){ 
              console.log("Rota permitida");
              return true
            }else{
              console.log("Rota permitida");
              return false
            }
        }

        if (arrayContains(String(Route), user)){
          // console.log("####### USUARIO AUTORIZADO #######");
          // console.log(user);  
          return true
        }
        else{
          // console.log("####### USUARIO NAO AUTORIZADO #######");
          // console.log(user);  // 
          // localStorage.clear();
          // history.push('/signout');
          return false
          
        }
      }      

      // console.log(this.props);
      // var userAuthorization = userCheck(ComposedComponent);
      // console.log("Componente " + ComposedComponent);
      // console.log("User Authorization: " + userAuthorization)
      // if (!this.props.authenticated && userAuthorization === false) {

      if (!this.props.authenticated) {
        history.push('/signout');
        // history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {

      if (!nextProps.authenticated) {
        history.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.propTypes = { authenticated: PropTypes.bool };

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
