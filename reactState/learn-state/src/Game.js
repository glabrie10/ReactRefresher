/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';

class Game extends Component {
  constructor(props){
    super(props);
    // passes prop to the constructor when rendered in apps with props to pass back
    this.state = {
      score: 0,
      gameOver: false
    }
  }
  render(){
    return (
      <div>
        <h1>your score is: {this.state.score}</h1>
    </div>
    )
  }
}

export default Game;
