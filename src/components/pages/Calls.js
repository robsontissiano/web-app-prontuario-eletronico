import React, { Component } from "react";
import * as actions from '../../actions/sessoes';
import { connect } from 'react-redux';
import Header from '../common/Header';
import { Button, 
  Modal } 
 from 'semantic-ui-react'
import FormDiagnostico from "../containers/FormDiagnostico";
import FormPrescricao from "../containers/FormPrescricao";
// import styled from 'styled-components';



// const Card = styled.div`
// 	display: block
// 	`;

class Calls extends Component {
  componentWillMount() {
    this.props.fetchSessoes();

    // this.sessao = JSON.parse(localStorage.getItem('sessao'));
  }

  rendersessoes() {
    const sessoes = this.props.sessoes || [];

    return sessoes.map((sessao, i) => {
      return (
				<div className="ui cards " key={i}>
					<div className="card ">
				    <div className="content">
			      	<div className="header">
			        	Robson Goncalves { sessao.paciente_id }
			      	</div>
			      	<div className="meta">
			        	Senha { sessao.id }
			      	</div>
			      	<div className="description">
			        	Gripe
			      	</div>
				    </div>
				    <div className="extra content">
			      	<div className="ui two buttons">
			        	<div className="ui basic green button">Atender</div>
			        	{/*<div className="ui basic red button">Cancelar</div>*/}
			      	</div>
				    </div>
					</div>
				</div>  //{/* ui cards */}
      )
    })
  }



  render() {
    return (
      <div>
      	<Header /> 
				<div className="panel-wrapper">
	      	<div className="content atendimento-panel-side">
	      		<h2>SESSOES</h2>

	      		{ this.rendersessoes() }


						<div className="ui cards ">
							<div className="card ">
							    <div className="content">
							      {/* <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" /> */}
							      	<div className="header">
							        	Robson Goncalves
							      	</div>
							      	<div className="meta">
							        	Senha 002
							      	</div>
							      	<div className="description">
							        	Gripe
							      	</div>
							    </div>
							    <div className="extra content">
							      	<div className="ui two buttons">
							        	<div className="ui basic green button">Atender</div>
							        	{/*<div className="ui basic red button">Cancelar</div>*/}
							      	</div>
							    </div>
							</div>
						</div> {/* ui cards */}

						<div className="ui cards ">
							<div className="card ">
						    <div className="content">
					      	{/* <img className="right floated mini ui image" src="/images/avatar/large/jenny.jpg" /> */}
					      	<div className="header">
					        	Antonio Nunes
					      	</div>
					      	<div className="meta">
					        	Senha 003
					      	</div>
					      	<div className="description">
					       		<b>Descricao</b>
					      	</div>
						    </div>
						    <div className="extra content">
					      	<div className="ui two buttons">
					        	<div className="ui basic green button">Atender</div>
					        	{/*<div className="ui basic red button">Cancelar</div>*/}
					      	</div>
						    </div>
							</div>
						</div> {/* ui cards */}
					</div> {/*  content atendimento-panel-side  */}


		    	<div className="content atendimento-panel">
						{/* <div className="ui sidebar inverted vertical menu"> */}
						{/* <div className="ui simple sidebar inverted vertical menu left uncover visible status-bar">
						    <a className="item"> 1</a>
						    <a className="item"> 2</a>
						    <a className="item"> 3</a>
						</div>
						<div className="pusher">
						   <p>conteudo</p>
						</div>*/}
						<div className="ui cards clear">
			        <div className="ui clearing card-content">
			            <div className="ui left floated header">
					  		<h2 className="ui left floated header">ATENDIMENTO</h2>
					  		<h3 className="ui right floated header">Senha 002</h3>
			            </div>
				  	</div>

		        <div className="ui clearing card-content">
		          <h3 className="ui left floated header">
		          	<Modal trigger={<div ><Button className="ui right">Incluir Diagnostico</Button></div>} closeIcon >
		            	<Modal.Content>
		              		<FormDiagnostico />
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

		        <div className="ui clearing card-content">
		          <h3 className="ui left floated header">
		            	<Modal trigger={<div ><Button className="ui right">Incluir Prescricao</Button></div>} closeIcon >
		              	<Modal.Content>
		                		<FormPrescricao />
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
					</div>{/* content atendimento-panel */}


					<div className="ui cards clear">
						<div className="card">
						    <div className="content">
						      	{/* <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" /> */}
						      	<div className="header">
						        	Detalhes do Paciente
							    </div>
							    <div className="meta">
							        Nome
							    </div>
							    <div className="description">
							        Descricao dos Sintomas
							    </div>
							    <div className="description">
							        Historico
							    </div>					      
							</div>
						</div>
					</div> {/* ui cards */}

						
					<div className="ui cards clear">
						{/* <div className="card transition hidden"> */}
						<div className="card transition">
						    <div className="content">
						    	{/* <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" /> */}
						      	<div className="header">
						        	Diagnosticos
						      	</div>
						      	<div className="meta">
						        	Destaque
						      	</div>
						      	<div className="description">
						        	Descricao
						      	</div>
						    </div>
						    <div className="extra content">
						      	<div className="ui two buttons">
						        	<div className="ui basic green button">Editar</div>
						        	<div className="ui basic red button">Remover</div>
						      	</div>
						    </div>
						</div>
					</div> {/* ui cards */}

					<div className="ui cards ">
						{/* <div className="card transition hidden"> */}
						<div className="card transition">
						    <div className="content">
						      	{/* <img className="right floated mini ui image" src="/images/avatar/large/jenny.jpg" /> */}
						      	<div className="header">
						        	Prescricoes
						      	</div>
						      	<div className="meta">
						        	Destaque
						      	</div>
						      	<div className="description">
						       		<b>Descricao</b>
						      	</div>
						    </div>
						    <div className="extra content">
						      	<div className="ui two buttons">
						        	<div className="ui basic green button">Editar</div>
						        	<div className="ui basic red button">Remover</div>
						      	</div>
						    </div>
						</div>
					</div> {/* ui cards */}

					</div>
				</div> {/* panel-wrapper */}
	    </div>
    );
  }
}
 

function mapStateToProps(state) {
  return { sessoes: state.sessao.list };
}

export default connect(mapStateToProps, actions)(Calls);
// export default Calls;




// <div className="content atendimento-panel-side right floated">
// </div>
