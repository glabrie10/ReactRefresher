import React, { Component } from 'react'

class MethodBind extends Component {
    constructor(props) {
      super(props);
      this.dispenseWisdom = this.dispenseWisdom.bind(this);
    }
    static defaultProps = {
      messages: [
        "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
        "Educating the mind without educating the heart is no education at all.",
        "Not everything that is faced can be changed, but nothing can be changed until it is faced."
      ]
    };

    dispenseWisdom() {
      let { messages } = this.props;
      let rIndex = Math.floor(Math.random() * messages.length);
      console.log(messages[rIndex]);
    }

    render() {
      return (
        <div className='WiseSquare' onMouseEnter={this.dispenseWisdom.bind(this)}>
          Inline Binding
          <div className='WiseSquare' onMouseEnter={() => this.dispenseWisdom()}>
            arrow function Binding
          </div>
          <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
            Constructor Bind
          </div>
        </div>

      );
    }
  }


export default MethodBind

