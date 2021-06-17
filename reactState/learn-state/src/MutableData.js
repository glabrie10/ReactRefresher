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
    const icons = ["bone, cloud"]
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    this.setState({ icons: [...this.state.icons, newIcon] });
    console.log(newIcon)
    console.log('icons', icons)
  }
  render() {
    // const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    const icons = ["bobe, cloud"]

    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default MutableData;