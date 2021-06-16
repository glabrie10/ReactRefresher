class Schools extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          {this.props.college.map( h => <li>{h}</li>)}
        </ul>
			</div>
    );
  }
}