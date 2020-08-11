import React, { useState } from "react";
import TextBox from "./components/TextBox";
import Signature from "./components/Signature";
import "./App.css";

function App({ name, title, email, phone }) {
  const [state, setState] = useState({
    name: name || "John Doe",
    title: title || "Engineer",
    email: email || "john.doe@innablr.com.au",
    phone: phone || "+61 435 123 456",
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <TextBox name="name" value={state.name} onChange={onChange} />
      <TextBox name="title" value={state.title} onChange={onChange} />
      <TextBox name="email" value={state.email} onChange={onChange} />
      <TextBox name="phone" value={state.phone} onChange={onChange} />
      <hr />
      <Signature
        name={state.name}
        title={state.title}
        email={state.email}
        phone={state.phone}
      />
    </form>
  );
}

export default App;
