// changing state when state is an array

import React, { Component } from "react";

class MutableData extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch"
    ]
  };
  constructor(props) {
    super(props);
    this.state = { icons: ["bone", "cloud"] };
    this.addIcon = this.addIcon.bind(this);
  }

  addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    this.setState({ icons: [...this.state.icons, newIcon] });
  }
  render() {
    // const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    // const icons =  this.state.icons.map(i => this.props.options[i]);
    return (
      <div>
        <h1>Icons: {this.state.icons}</h1>
        <button onClick={this.addIcon}>Add</button>
      </div>
    );
  }
}

export default MutableData;