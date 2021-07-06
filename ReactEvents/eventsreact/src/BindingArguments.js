import React, { Component } from 'react'
import './BindingArguments.css'
class ArgumentBind extends Component {
  static defaultProps = {
    colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"]
  };
  constructor(props) {
    super(props);
    this.state = { color: "cyan" };
  }

  changeColor(newColor) {
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div className='ButtonList' style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map(c => {
          const colorObj = { backgroundColor: c };
          return (
            <button style={colorObj} onClick={() => this.changeColor(c)}>
              Click on me!
            </button>
          );
        })}
      </div>
    );
  }
}

export default ArgumentBind