import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/auth';
// import { Link } from 'react-router';
import { connect } from 'react-redux';

const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
  <div className={`input-group ${touched && error ? 'has-error' : ''}`}>
    <input type={type} placeholder={placeholder} {...input} />
    { touched && error && <div className="form-error">{error}</div> }
  </div>
);

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(props) {
    this.props.signinUser(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="page-login">
        <div className="ui centered grid container">
          <div className="nine wide column">

            {/* Server error message */}
            { this.props.errorMessage && this.props.errorMessage.signin &&
              <div className="ui icon warning message">
                <i className="lock icon"></i>
                <div className="content">
                  <div className="header">
                    <div className="ui error message error-container signin-error"> { this.props.errorMessage.signin }</div>
                  </div>
                </div>
              </div> 
            } 

            <div className="ui fluid card">
              <div className="content center aligned">
                <h2 className="ui image header">
                <img src="https://semantic-ui.com/examples/assets/images/logo.png" alt="logo" className="image" />
                <div>
                  Login
                </div>
              </h2>
              </div>
            </div>

            <div className="ui fluid card">
              <div className="content">
              <form onSubmit={handleSubmit(this.handleFormSubmit)} className="ui large form">
                <div className="field">
                  <label>Usuario</label>
                  <Field className="ui form" name="username" component={renderField} type="text" placeholder="Usuario" />
                </div>
                <div className="field">
                  <label>Senha</label>
                  <Field className="ui form" name="password" component={renderField} type="password" placeholder="Senha" />
                </div>

                <button type="submit" className="btn ui form primary labeled icon button">
                  <i className="unlock alternate icon"></i>Login
                  </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


function validate(formProps) {
  const errors = {};

  if(!formProps.username) {
    errors.username = 'Informe o usuario'
  }

  if(!formProps.password) {
    errors.password = 'Informe a senha'
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

Signin = reduxForm({ form: 'signin', validate })(Signin);

export default connect(mapStateToProps, actions)(Signin);
