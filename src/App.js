import React from 'react';
import picture from '../src/images/jerry.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} alt={"Jerry"}/>
        <p>
          bird up
        </p>
        <a
          className="App-link"
          href="http://github.com/nickdiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
