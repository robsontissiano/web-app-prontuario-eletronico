import React, { Component } from "react";

/* Import Components */
// import CheckBox from "../formcomponents/CheckBox";
//
import Input from "../formcomponents/Input";
import TextArea from "../formcomponents/TextArea";
import Button from "../formcomponents/Button";
//
// import Select from "../formcomponents/Select";
// import { Form, Radio } from "semantic-ui-react";
// import { API_URL } from "../../config";

class FormTriagem extends Component {


  render() {
    return (
      <form className="ui form stacked secondary  segment" onSubmit="">

      <div class="ui clearing segment">
        <h3 class="ui left floated header">
	        <Input
	          inputType="text"
	          title="Pressao"
	          name="pressure"
	          value=""
	          placeholder={"Pressao"}
	        />

	    </h3>
        <h3 class="ui right floated header">

	        <Input
	          inputType="number"
	          title="Temperatura"
	          name="temperature"
	          value=""
	          placeholder={"Temperatura"}
	        />

	    	{/*
	        <Input
	          inputType="text"
	          title="Pressao"
	          name="pressure"
	          value=""
	          placeholder={"Pressao"}
	        />*/}
	    </h3>
	  </div>


      <TextArea
        title="Descrição dos sintomas."
        rows={10}
        value=""
        name="descricao"
        placeholder={"Descreva detalhes dos sintomas"}
      />
      {/* Descrição*/}


      <Button
        action=""
        type="primary"
        title="Enviar"
        style={buttonStyle}
      />{" "}
      {/*Submit */}


      <Button
        action=""
        type="secondary"
        title="Limpar"
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

export default FormTriagem;
