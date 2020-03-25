import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

// const formSchema = yup.object().shape({
//     name:
//     email:
//     password:
//     terms of service:
// })

function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
  });

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
