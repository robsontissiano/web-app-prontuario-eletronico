import React from "react";
import Header from '../common/Header';
import { Button, Icon, Modal } from 'semantic-ui-react'
import { API_URL } from "../../config";
// import { Message } from 'semantic-ui-react'



// class Home extends Component {
class Home extends React.Component {  

  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    // this.handleClose = this.handleClose.bind(this);

    // close = () => this.setState({ open: false })
    this.state = { open: false };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.message = this.showMessage.bind(this);

    this.state = {
      newSession: {
        "created_at": "2019-01-13T17:04:35Z",
        "local_id": 1,
        "paciente_id": 2,
        "status": "U",
        "hora_abertura": "2019-01-13T17:04:35Z",
      },

    };

    // this.state = { msgVisible: "transiction hidden" }

  }

 componentDidMount() {
    this.closeModal();
    // this.showModal('blurring');
  }


  showModal(dimmer) {
    this.setState({ dimmer, open: true })
  }
  closeModal() {
    this.setState({ open: false })
  }

  // showMessage() {
  //   this.setState({ hidden: false })
  // }


  handleFormSubmit(e) {
    var paciente_id = 1; //receber id do paciente

    e.preventDefault();
    let sessionData = this.state.newSession;

    // console.log(sessionData);
    fetch(`${API_URL+'/sessao?pacente_id='+paciente_id}`, {
      method: "POST",
      body: JSON.stringify(sessionData),
      headers: {
          "Authorization": 
          "Bearer "+localStorage.getItem("session_key"),
      }
    }).then(response => {
      response.json().then(data => {
      })
      this.closeModal();  // close modal
      // mensagem de sucesso
      // update paciente status na lista atual
      this.toggleVisibility();
    });
  }


  handleClearForm(e) {
    e.preventDefault();
    // this.state ={
    //   newSession: {
    //     "created_at": "",
    //     "local_id": "",
    //     "paciente_id": "",
    //     "status": ""
    //   }
    // };

    this.setState({ 
      newSession: {
        "created_at": "",
        "local_id": "",
        "paciente_id": "",
        "status": ""
      }
    })
  }



  // toggleVisibility = () => this.setState({ msgVisible: !this.state.msgVisible })

  render() {
    const { open, dimmer } = this.state;
    // const { msgVisible } = this.state.msgVisible;

    return (
      <div>
      <Header />  
      <div className="content">

        {/* <Message color='green' className="transition hidden">Paciente enviado para triagem!</Message> */}
        {/*
        <div class="ui message">
          <div color='green' class="success ui message { msgVisible }">
            Paciente enviado para triagem! 
            <i class="close icon"></i>
          </div>
        </div> */}
        
        <h2>Atendimentos no turno</h2>
        {/* <p>Atendimentos do turno <a href="/">Inserir Atendimento</a>. */}
        {/* </p> */}
        <div className="ui clearing segment">
          <div className="column">
            <table className="top attached ui basic table striped">
              <thead>
                <tr>
                <th>Senha</th>
                <th>Nome</th>
                <th>Sala</th>
                <th>Status</th>
                </tr>
              </thead>
              <tbody>
              
                <tr>
                  <td>001</td>
                  <td>Joao</td>
                  <td>201</td>
                  <td className="localization aguardando">
                    
                      <Modal 
                      // open={this.state.open} 
                      open={open}
                      dimmer={dimmer} 
                      onClose={this.closeModal}
                      trigger={

                        <div >
                          <Button  className="ui right" onClick={this.showModal}>
                            <span>Aguardando <i className="hourglass start icon" /></span>
                          </Button>
                          </div>
                        } closeIcon  >

                        <Modal.Content>
                          <p>Confirma enviar paciente para Triagem</p>
                        </Modal.Content>

                        <Modal.Actions>
                        <form className="ui form " onSubmit={this.handleFormSubmit}>

                          {/* <Button type="button" color='red' onClick={this.handleClearForm}> 
                          onClick={this.handleClose} 
                          */}

                          {/*
                          <Button type="button" color='red' onClick={this.handleClose}>
                            <Icon name='remove' /> Não
                          </Button>

                          <Button type="button" color='red' open={this.state.close}>
                            <Icon name='remove' /> Não
                          </Button>
                          */}

                          <Button type="button" color='black' onClick={this.closeModal}>
                            <Icon name='remove' /> Não
                          </Button>

                          <Button color='green'  onClick={this.handleFormSubmit}>
                            <Icon name='checkmark' /> Sim
                          </Button>
                        </form>
                        </Modal.Actions>
                        
                      </Modal>
                   
                  </td>
                </tr>
                
                {/*
                <tr>
                  <td>002</td>
                  <td>Pedro</td>
                  <td>202</td>
                  <td className="localization aguardando">
                    <a href="/"><span>Aguardando <i className="hourglass start icon" /></span></a>
                  </td>
                </tr>
                */}
                <tr>
                  <td>003</td>
                  <td>Felipe</td>
                  <td>203</td>
                  <td className="localization triagem">Triagem</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Joao</td>
                  <td>204</td>
                  <td className="localization triagem">Triagem</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Pedro</td>
                  <td>205</td>
                  <td className="localization atendimento">Em Atendimento</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Felipe</td>
                  <td>206</td>
                  <td className="localization atendimento">Em Atendimento</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Joao</td>
                  <td>207</td>
                  <td className="localization liberado">Liberado</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Pedro</td>
                  <td>208</td>
                  <td className="localization liberado">Liberado</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Felipe</td>
                  <td>209</td>
                  <td className="localization liberado">Liberado</td>
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
 
export default Home;
