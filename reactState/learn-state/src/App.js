
import React, {Component} from 'react';
import Game from './game';
import Random from './random'
import './App.css';

function App() {
  return (
    <div className="App">
      <Game/>
      <Random maxNum = {7} />
    </div>
  );
}

export default App;
