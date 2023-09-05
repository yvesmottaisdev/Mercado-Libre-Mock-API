import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetClick() {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>{count}</button>
        <button onClick={resetClick}>Reset</button>
      </header>
    </div>
  );
}

export default App;
