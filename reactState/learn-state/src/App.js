
import React, {Component} from 'react';
import Game from './Game';
import Random from './Random'
import ClickChangeState from './ClickChangeState'
import './App.css';

function App() {
  return (
    <div className="App">
      <Game/>
      <Random maxNum = {7} />
      <ClickChangeState />
    </div>
  );
}

export default App;
