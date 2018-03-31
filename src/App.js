import React from 'react';
import './app.css'

class App extends React.Component {

	constructor () {
		super();
		this.state = {
			input: '/* add here your jsx',
			output: '',
			err: ''
		}
	}

	update (e) {
		let code = e.target.value;
		try {
			this.setState({
				output: window.Babel.transform(code, {presets: ['es2015', 'react']}).code, err: ''
			})
		} catch (e) {
			this.setState({err: e.message})
		}
	}

	render(){
		return (
			<div>
				<header>{this.state.err}</header>
				<div className="container">
					<textarea onChange={this.update.bind(this)}
						defaultValue={this.state.input}>
					</textarea>
					<pre>{this.state.output}</pre>
				</div>
			</div>
		)
	}
}


export default App;
