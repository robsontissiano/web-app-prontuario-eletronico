import React, { Component } from "react";

/* Import Components */
// import CheckBox from "../formcomponents/CheckBox";
import Input from "../formcomponents/Input";
// import TextArea from "../formcomponents/TextArea";
import Select from "../formcomponents/Select";
import Button from "../formcomponents/Button";
// import { Form, Radio } from "semantic-ui-react";
import { API_URL } from "../../config";

class FormDiagnostico extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPatient: {
        nome: "",
        data_nascimento: "",
        gender: "",
        status: [],
        about: ""
      },

      genderOptions: ["Masculino", "Feminino", "Outros"],
      statusOptions: ["Não urgente", "Emergente", "Urgente", "Óbito"]
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleDataNascimento = this.handleDataNascimento.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newPatient: {
          ...prevState.newPatient,
          name: value
        }
      }),
      // () => console.log(this.state.newPatient)
    );
  }



  handleDataNascimento(e) {
    // let value = e.target.value;


     // function FormataUTCData(data) {
     //  var dia  = data.split("/")[2];
     //  var mes  = data.split("/")[1];
     //  var ano  = data.split("/")[0];

     //  return ano + ',' + ("0"+mes).slice(-2) + ',' + ("0"+dia).slice(-2) + 'T00:00:00Z';
      // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    // }
    // var isoDate = new Date(value).toISOString();
    // console.log(isoDate);
    // console.log("Data Original " + value);
    // var isoDate = new Date(value).toISOString();
    // var isoDate = new Date(value).toISOString();
    // var isoDate = value.toISOString();
    // var isoDate = new Date(Date.UTC(value)); 
    // var isoDate = new FormataUTCData(value);
    // console.log("Data Nova " + isoDate);

    this.setState(
      prevState => ({
        newPatient: {
          ...prevState.newPatient,
          data_nascimento: "1995-04-13T00:00:00Z" //isoDate
          //data_nascimento: value //isoDate // value.toISOString() //value //
        }
      }),
      // () => console.log(this.state.newPatient)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newPatient: {
          ...prevState.newPatient,
          [name]: value
        }
      }),
      // () => console.log(this.state.newPatient)
    );
  }

  handleTextArea(e) {
    // console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newPatient: {
          ...prevState.newPatient,
          about: value
        }
      }),
      // () => console.log(this.state.newPatient)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newPatient.status.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newPatient.status.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newPatient.status, newSelection];
    }

    this.setState(prevState => ({
      newPatient: { ...prevState.newPatient, status: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newPatient;
    // console.log(userData);

    fetch(`${API_URL+'/paciente'}`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
          "Authorization": 
          "Bearer "+localStorage.getItem("session_key"),
      }
    }).then(response => {
      response.json().then(data => {
        // console.log("Successful" + data);
        // close modal
        // this.setState({modalIsOpen: false})
      })
      // .catch(() => dispatch(registerError(PATIENT ERROR, "Verifique os dados informados")));

    });
  }


  // handleFormSubmit(e) {
  //   e.preventDefault();
  //   let userData = this.state.newPatient;

  //   fetch(`${API_URL+'/paciente'}`, {
  //     method: "POST",
  //     body: JSON.stringify(userData),
  //     headers: {
  //         "Authorization": 
  //         "Bearer "+localStorage.getItem('session_key')
  //     }
  //   }).then(response => {
  //     response.json().then(data => {
  //       console.log("Successful" + data);
  //     });
  //   });
  // }


  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newPatient: {
        nome: "",    // nome
        data_nascimento: "",     // data_nascimento
        //gender: "",  //
        //status: [],  //
        //cpf: "",     //
        num_sus: "", // num_sus
        nome_mae: "" // nome_mae
      }
    });
  }

  render() {
    return (
      <form className="ui form stacked secondary  segment" onSubmit={this.handleFormSubmit}>

        <Input
          inputType={"text"}
          title={"Nome Completo"}
          name={"nome"}
          value={this.state.newPatient.name}
          placeholder={"Nome do Paciente"}
          handleChange={this.handleInput}
        />{" "}
        {/* Nome do Paciente */}

        <Input
          inputType={"text"}
          title={"Nome da mae"}
          name={"nome_mae"}
          value={this.state.newPatient.nome_mae}
          placeholder={"Nome da mae do Paciente"}
          handleChange={this.handleInput}
        />{" "}
        {/* Nome da maedo Paciente */}


        {/* 
          <div class="ui clearing segment">
            <h3 class="ui right floated header">
              Go Forward
            </h3>
            <h3 class="ui left floated header">
              Go Back
            </h3>
          </div>
          */
          }

          <div class="ui clearing segment">
            <h3 class="ui right floated header">
              
              <Input
                className="ui right floated"
                inputType={"date"}
                name={"data_nascimento"}
                title={"Data de Nascimento do Paciente"}
                value={this.state.newPatient.data_nascimento}
                // placeholder={"Data de Nascimento do Paciente"}
                handleChange={this.handleDataNascimento}
              />{" "}
              {/* Idade */}
            </h3>

            <h3 class="ui left floated header">
            <Input
              // className="ui right floated"
              inputType={"number"}
              title={"CPF"}
              name={"cpfnumber"}
              value={this.state.newPatient.cpfnumber}
              placeholder={"CPF"}
              handleChange={this.handleInput}
            />{" "}
            {/* CPF do Paciente */}
            </h3>

            <h3 class="ui right floated header">


              <Input
                inputType={"number"}
                title={"Numero do SUS"}
                name={"susnumber"}
                value={this.state.newPatient.susnumber}
                placeholder={"Numero do SUS"}
                handleChange={this.handleInput}
              />{" "}
              {/* Numero do SUS do Paciente */}
            </h3>     


            <h3 class="ui left floated header">
              <Select
                title={"Genero"}
                name={"gender"}
                options={this.state.genderOptions}
                value={this.state.newPatient.gender}
                placeholder={"Genero do paciente"}
                handleChange={this.handleInput}
              />{" "}

              {/* Selecao do genero 
              /*
              <CheckBox
                title={"Urgencia"}
                name={"status"}
                options={this.state.statusOptions}
                selectedOptions={this.state.newPatient.status}
                handleChange={this.handleCheckBox}
              />{" "}
              */}

              </h3>
            </div>

              <Button
                action={this.handleFormSubmit}
                type={"primary"}
                title={"Enviar"}
                style={buttonStyle}
              />{" "}
              {/*Submit */}


              <Button
                action={this.handleClearForm}
                type={"secondary"}
                title={"Limpar"}
                style={buttonStyle}
                // className={"ui primary button"}
              />{" "}
              {/* Limpa o form */}
          </form>  
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormDiagnostico;
