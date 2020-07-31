import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoxComponent from './component/BoxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BoxComponent />
      </header>
    </div>
  );
}

export default App;
