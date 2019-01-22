import React, { Component } from "react";
import FormContainer from "../containers/FormContainer";

class Patients extends Component {
  render() {
    return (
    	<div className="content">
	        <div className="col-md-6">
	        <h3> Paciente </h3>
	        <FormContainer />
	      </div>
	    </div>
    );
  }
}
 
export default Patients;