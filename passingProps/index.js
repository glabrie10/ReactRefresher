class App extends React.Component {
	render() {
		return (
			<div>
				<Schools
				name="Greg"
				college={['Stanford', 'Iowa', 'Florda']}
				/>
				<Hello
					to="Ringo"
					from="Paul"
					num={4}
					img="https://bugguide.net/images/raw/TK4/KOK/TK4KOKMKTK8KCK7KAKMKF0VQCK7KJ0AQBK5KVKWQ30NQAKNQTKKKTK7KBK9QA0EQ2KSKC02QC0KKPK.jpg"
					/>
					<Hello
					from="Shawn"
					num={4}
					img="https://bugguide.net/images/raw/TK4/KOK/TK4KOKMKTK8KCK7KAKMKF0VQCK7KJ0AQBK5KVKWQ30NQAKNQTKKKTK7KBK9QA0EQ2KSKC02QC0KKPK.jpg"
					/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));