import React, { Component } from "react";
import Header from '../common/Header';


import { Button, 
  // Icon, 
  Modal } 
from 'semantic-ui-react'

import FormTriagem from "../containers/FormTriagem";
// import Input from "../formcomponents/Input";


class PreConsult extends Component {
  render() {
    return (
      <div>
      <Header />  
      <div className="content">
        
        {/* <p>Atendimentos do turno <a href="/">Inserir Atendimento</a>. */}
        {/* </p> */}

        <div className="content pacientes">
          <div className="ui clearing segment">

            <h3 className="ui left floated header">
              <Modal trigger={<div ><Button className="ui right">Triagem</Button></div>} closeIcon >
                <Modal.Content>
                  <FormTriagem />
                </Modal.Content>

                <Modal.Actions>

                </Modal.Actions>
              </Modal>
            </h3>

          </div>
        </div>


        <h2>Atendimentos no turno</h2>

        <div className="ui clearing segment">
          <div className="column">
            <table className="top attached ui basic table">
              <thead>
                <tr>
                <th>Senha</th>
                <th>Nome</th>
                <th>Sala</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Joao</td>
                  <td>201</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Pedro</td>
                  <td>202</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Felipe</td>
                  <td>203</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Joao</td>
                  <td>204</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Pedro</td>
                  <td>205</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Felipe</td>
                  <td>206</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Joao</td>
                  <td>207</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Pedro</td>
                  <td>208</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Felipe</td>
                  <td>209</td>
                </tr>                                
              </tbody>
            </table>

          </div>
        </div>  {/* <!-- column --> */}
      </div>

    </div>
    );
  }
}
 
export default PreConsult;