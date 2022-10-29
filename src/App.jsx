import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const initialText = "Click me!"
  const [counter, setCounter] = useState(1);
  const [btnText, setBtnText] = useState(initialText);
  function handleClick() {
    
    console.log(counter);
    if (counter == 1) {
      console.log(counter)
    setBtnText("You clicked me!");
    }
    if (counter == 2) {
      setBtnText("Stop clicking me")
    }

    setTimeout(() => {
      setBtnText(initialText);
    }, 3000);
  } 


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React
        </p>
        <button onClick={() => {setCounter(counter+1); handleClick();}}>{btnText}</button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
