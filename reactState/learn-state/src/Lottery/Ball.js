import React, {Component} from 'react'
import './Ball.css'

class Ball extends Component {

  render () {
    const num = this.props.num
    return (
      <div className='Ball'>
        {num}
      </div>
    )
  }
}


export default Ball;