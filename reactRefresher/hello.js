class Hello extends React.Component {
	render() {
    console.log(this.props)
		return (
			<div>
				<h1>Hello there!</h1>
        <h2>Hello there!</h2>
        <h3> Hi {this.props.to} from {this.props.from}</h3>
			</div>
		);
	}
}