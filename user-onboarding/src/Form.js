import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

// const formSchema = yup.object().shape({
//     name:
//     email:
//     password:
//     terms of service:
// })

// setting up form state
function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
  });

  // setting up state for errors
const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
});

// setting state for button as disabled
const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />
        {errors.name.length > 0 ? <p>{errors.name}</p> : null}
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          value={formState.email}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="terms">
        Terms
        <input
          id="terms"
          type="text"
          name="terms"
          value={formState.terms}
          onChange={inputChange}
        />
      </label>
    </form>
  );
}

export default Form;
