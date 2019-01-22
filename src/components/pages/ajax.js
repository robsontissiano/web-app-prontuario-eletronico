import React
// , {  Component } 
  from "react";
import { API_URL } from '../../config';

// import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from '../common/Header';






class Ajax extends React.Component {
  state = {
    pacientes: []
  }

  componentDidMount() {
    // axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      axios.get(API_URL+'/pacientes', { 
      headers: { "Authorization": "Bearer "+localStorage.getItem('session_key')}})
      .then(res => {
        console.log(res.data.data);
        const pacientes = res.data.data.map(obj => obj.data);
        this.setState({ pacientes });
      });
  }

  render() {
    return (
      <div>
        <Header />  
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.pacientes.map(post =>
            <li key={post.id}>{post.nome}</li>
          )}
        </ul>
      </div>
    );
  }
}

// ReactDOM.render(
//   <FetchDemo subreddit="reactjs"/>,
//   document.getElementById('root')
// );


export default Ajax;


 
  // fetchPacientes() {
  //   return function (dispatch) {
  //     axios.get(API_URL+'/pacientes', { 
  //       headers: { "Authorization": "Bearer "+localStorage.getItem('session_key')}})
  //       .then(response => {
  //         // console.log(response.data.data);
  //         dispatch({
  //           type: FETCH_PACIENTES,
  //           payload: response.data.data,
  //         });
  //       });
  //   }
  // }


 
  // fetchPacientes() {
  //   return function (dispatch) {
  //     axios.get(API_URL+'/pacientes', { 
  //       headers: { "Authorization": "Bearer "+localStorage.getItem('session_key')}})
  //       .then(response => {
  //         // console.log(response.data.data);
  //         dispatch({
  //           type: FETCH_PACIENTES,
  //           payload: response.data.data,
  //         });
  //       });
  //   }
  // }


