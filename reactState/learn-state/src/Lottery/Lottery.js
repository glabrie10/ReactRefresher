import React, {Component} from 'react';
import Ball from './Ball';

class Lottery extends Component {
  static defaultProps = {
    numBalls: 6,
    maxNum: 40,
    title: 'Lottery'
  }
  constructor(props) {
    super(props)
    this.state = {balls: Array.from({length: this.props.numBalls})}
    this.generateBall = this.generateBall.bind(this)
  }


  generateBall(){
  this.setState(curState => ({
    balls: curState.balls.map(
      i => Math.floor(Math.random() * this.props.maxNum) + 1
    )
  }));
  }



  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div>
        {this.state.balls.map(i => (
          <Ball num = {i}/>
        ))}
        </div>
        <button onClick={this.generateBall}>Lottery</button>
      </div>
    )
  }
}

export default Lottery