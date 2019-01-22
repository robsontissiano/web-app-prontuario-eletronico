import React, { Component } from 'react';
import * as actions from '../../../actions/pacientes';
import { connect } from 'react-redux';
import Header from '../../common/Header';
import { Button, 
  // Icon, 
  Modal } 
from 'semantic-ui-react'
import FormPaciente from "../../containers/FormPaciente";
// import Input from "../formcomponents/Input";








class PacientesList extends Component {
  componentWillMount() {
    this.props.fetchPacientes();

    // this.paciente = JSON.parse(localStorage.getItem('paciente'));
  }

  renderpacientes() {
    const pacientes = this.props.pacientes || [];
    // console.log(pacientes);
    // console.log(typeof(pacientes));

    return pacientes.map((paciente, i) => {
      return (
        <tr key={i}>
          <td>{ paciente.nome }</td>

          <td>01/01/2019 - 19:00</td>
          {/*<td>{ session.paciente.arrive_time}</td>*/}

          <td>Nao Urgente</td>
          {/*<td>{ session.paciente.status }</td>*/}

          <td>Gripe</td>
          {/*<td>{ session.paciente.diagnostic }</td>*/}
        </tr>
      )
    })
  }


  render() {
    return (
      <div>
        <Header />

        <div className="content pacientes">
          <div className="ui grid form">
          {/*<div className="ui grid clearing display-inline left floated">*/}

            <div className="six wide wide column">
              <h3 className="ui left floated header">
                <Modal trigger={<div ><Button className="ui right">Cadastrar Paciente</Button></div>} closeIcon >
                  <Modal.Content>
                    <FormPaciente />
                  </Modal.Content>

                  <Modal.Actions>
                    {/*
                    <Button color='red'>
                      <Icon name='remove' /> Cancelar
                    </Button>
                    <Button color='green'>
                      <Icon name='checkmark' /> Gravar
                    </Button>
                    */}
                  </Modal.Actions>
                </Modal>
              </h3>
            </div>


            <div className="four wide column">
            </div>            

            <div className="two wide column right floated ">
                <label htmlFor="patient-search" className="ui right floated form-control">Pesquisa: </label>  
            </div>

            {/*
            <div className="four wide column">
              <h3 className="ui right floated header form">
                <label htmlFor="patient-search" className="ui right floated form-control">Pesquisa: </label>
                <input
                  className="ui right floated form-control"
                  type="text"
                  name="patient-search"
                  title="Pesquisa de Paciente"
                  // value=""
                  placeholder="Busca"
                />
              </h3>
            </div>
            */}

            <div className="ui four wide column ">
                <input
                  className="ui right floated form-control"
                  type="text"
                  name="patient-search"
                  title="Pesquisa de Paciente"
                  // value=""
                  placeholder="Busca"
                />
            </div>



          </div> {/* ui grid */}

          <div className="display-block">
            <h2>Lista de Pacientes</h2>
            {/*<button type="submit" className="btn ui form primary labeled icon button" onClick={() => dispatch(showModal())}>
              <i className="unlock alternate icon"></i>Cadastrar Paciente 
            </button>
            */}
          </div>

          <div className="ui clearing segment">
            {/*<div className="ui two column grid">*/}
              {/*<div className="column">*/}
                <table className="top attached ui basic striped center aligned table">
                  <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Horario</th>
                    <th>Status</th>
                    <th>Diagnostico</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.renderpacientes() }
                  </tbody>
                </table>
              {/*</div>*/}
            {/*</div>*/}
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { pacientes: state.paciente.list };
}

export default connect(mapStateToProps, actions)(PacientesList);