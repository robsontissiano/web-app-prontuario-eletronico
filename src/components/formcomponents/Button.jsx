import React from "react";

const Button = props => {
  // console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type === "ui primary" ? "ui primary button" : "ui button"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
