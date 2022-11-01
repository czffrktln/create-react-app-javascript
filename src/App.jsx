import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    if (counter) 
      var timer = setTimeout(() => setCounter(0), 3000);
    return () => clearTimeout(timer);
  }, [counter]);

  
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React
        </p>

        <button onClick={() => {setCounter(counter+1)}} >
          {counter === 0 && 'Click me!'}
          {counter === 1 && 'You clicked me!'}
          {counter >= 2 && 'Stop clicking me!'}
        </button>

      </header>
    </div>
  );
}

export default App;

// onClick={(e) => {setCounter(counter+1); handleClick(e);}}