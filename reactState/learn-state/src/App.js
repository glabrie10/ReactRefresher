
import React, {Component} from 'react';
import Game from './Game';
import Random from './Random'
import ClickChangeState from './ClickChangeState'
import CallBackUpdateState from './CallBackUpdateState'
import './App.css';

function App() {
  return (
    <div className="App">
      <Game/>
      <Random maxNum = {7} />
      <ClickChangeState />
      <CallBackUpdateState />
    </div>
  );
}

export default App;
