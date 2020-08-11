import React from "react";

function TextBox(props) {
  return (
    <input
      className="form-control"
      name={props.name}
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default TextBox;
