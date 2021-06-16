class Hello extends React.Component {
	render() {
    console.log(this.props)
		return (
			<div>
				<h1>Hello there! {this.props.to} from {this.props.from} called you {this.props.num} times to show you this picture <img src = {this.props.img}></img>
				</h1>
			</div>
		);
	}
}