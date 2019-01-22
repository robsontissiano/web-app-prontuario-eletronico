import React from "react";

const Input = props => {
  //console.log(props.value);
  return (
    <div className="ui form ">
      <label 
        htmlFor={props.name} 
        // for={props.name} 
        className="form-label">
        {props.title}
      </label>
      <input
        className="ui form-control"
        id={props.name}
        name={props.name}
        type={props.inputtype}
        value={props.value}
        onChange={props.handlechange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
