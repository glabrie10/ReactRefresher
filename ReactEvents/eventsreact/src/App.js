import React from 'react'
import Event from './Event'
import MethodBind from './MethodBinding'
import ExperimentalSquare from './AlternativeBinding'
import ArgumentBind from './BindingArguments'
import BetterNumberList from './PassingMethods/BetterNumberList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          React Events
          < Event />
          < MethodBind />
          < ExperimentalSquare />
          < ArgumentBind />
          < BetterNumberList />

      </header>
    </div>
  );
}

export default App;
