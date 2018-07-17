import React from 'react';
import { Field, reduxForm } from 'redux-form'
import logo from './logo.svg';
import './App.css';

// export default App;
const ContactForm = (props) => {
  const { formName, handleSubmit, changevalue, name, changename, counter, decrement, increment } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>this is new name : {formName}</div>
      <div> enter name<input onChange={changename} /></div>
      <div> enter counter value<input onChange={changevalue} /></div>
      this is {name}
      <br />
      the value of counter is {counter}.
    <button onClick={increment}> increase </button>
      <button onClick={decrement}> decrease </button>
      <button type="submit">Submit</button>
    </form>
  )
}
// const validate = values => {
//   console.log(values)
// }

export default reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

