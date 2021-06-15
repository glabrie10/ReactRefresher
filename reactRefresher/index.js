class App extends React.Component {
	render() {
		return (
			<div>
				<Hello to="Ringo" from="Paul"/>
        <Hello to="Cher" from="john" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));