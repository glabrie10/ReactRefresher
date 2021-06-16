class App extends React.Component {
	render() {
		return (
			<div>
				<Hello
					to="Ringo"
					from="Paul"
					num={4}
					img="https://bugguide.net/images/raw/TK4/KOK/TK4KOKMKTK8KCK7KAKMKF0VQCK7KJ0AQBK5KVKWQ30NQAKNQTKKKTK7KBK9QA0EQ2KSKC02QC0KKPK.jpg"
					/>

        <Hello to="Cher" from="john" />

			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));