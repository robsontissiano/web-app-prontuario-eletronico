import React from "react";

const Input = props => {
  //console.log(props.value);
  return (
    <div className="ui form calendar">
      <label htmlFor={props.name} 
      // for={props.name} 
        className="form-label">
        {props.title}
      </label>
        <input
          className="ui form-control"
          id={props.name}
          name={props.name}
          type={props.inputtype}
          // type="date"
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
          {...props}
        />
    </div>
  );
};

export default Input;

// <div className="ui calendar right floated" id="example2">
//   <div className="ui input left icon">
//     <i className="calendar icon"></i>
//     <input type="date" placeholder="Date" />
//   </div>
// </div>
