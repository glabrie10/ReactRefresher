
import React from 'react';
import Game from './Game';
import Random from './Random'
import ClickChangeState from './ClickChangeState'
import CallBackUpdateState from './CallBackUpdateState'
import MutableData from "./MutableData"
import Ball from './Lottery/Ball'
import Lottery from './Lottery/Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Game/>
      <Random maxNum = {7} />
      <ClickChangeState />
      <CallBackUpdateState />
      <MutableData />
      <Lottery />
    </div>
  );
}

export default App;
