import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

// setting up my validations 
const formSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    email: yup.string().email().required('Must include an email'),
    password: yup.string().min(6,'Must be atleast six characters').required('Must add password'),
    terms: yup.boolean().oneOf([true], "Please agree to terms of use")
})

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

//creating constants
const [response, setResponse] = useState();

// validating use effect (checking if info is valid)
useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
    });
}, [formState]);

// validating change
const validateChange = e => {
    yup.reach(formSchema, e.target.name).validate(e.target.value).then(valid => {
        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    })
    .catch(error => {
        setErrors({
            ...errors,
            [e.target.name]: errors.errors
        });
    });
};

// creating my function to submit form data
const formSubmit = e => {
    //preventDefault prevents page from refreshing on it's own
    e.preventDefault();
    //.post is saying send this data (our form state) to this url
    axios.post('https://reqres.in/api/users', formState)
    //res is sending our user data back to us
    .then(res => {
        setResponse(res.data);
        console.log('success', response);
    })
}

//after we receive data back we want to clear our text fields:
setFormState({
    name: '',
    email: '',
    password: '',
    terms: false
})

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
        {/* checking how many errors are in field */}
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
        {errors.email.length > 0 ? <p>{errors.email}</p> : null}
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
        {errors.password.length > 0 ? <p>{errors.password}</p> : null}
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
        {errors.terms.length > 0 ? <p>{errors.terms}</p> : null}
      </label>
    </form>
  );
}

export default Form;
