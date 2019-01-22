import React from "react";

const TextArea = props => (
  <div className="ui form">
    <label className="form-label">{props.title}</label>
    <textarea
      className="ui form-control"
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
);

export default TextArea;
