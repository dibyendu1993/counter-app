import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props){
    const {changevalue, name, changename, counter, decrement, increment} = props;
    return (
    <div>
     <div> enter name<input onChange={changename}/></div>
     <div> enter counter value<input onChange={changevalue}/></div>
     this is {name}
     <br/>
      the value of counter is {counter}.
      <button onClick={increment}> increase </button>
      <button onClick={decrement}> decrease </button>
    </div>
      )
  }
 

export default App;