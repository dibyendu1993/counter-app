import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props){
    const {chngname, counter, decrement, increment} = props;
    return (
    <div>
     <div> enter name<input onChange={chngname}/></div>
     <div> enter counter value<input/></div>
     <button onClick={chngname}>submit</button>
     <br/>
     <div>{name}</div>
      the value of counter is {counter}.
      <button onClick={increment}> increase </button>
      <button onClick={decrement}> decrease </button>
    </div>
      )
  }
 

export default App;