import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../../history';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        history.push('/');
      }
    } // componentWillMount method

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        history.push('/');
      }
    } // componentWillUpdate method

    render() {
      return <ComposedComponent {...this.props} />
    } // render
  } // NotAuthentication Class

  NotAuthentication.propTypes = { authenticated: PropTypes.bool };

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  } // mapStateProps function

  return connect(mapStateToProps)(NotAuthentication);
} // fim componente
