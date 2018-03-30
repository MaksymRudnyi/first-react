import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			txt: 'this is default state',
			cat: 0
		}
	}

	update (e) {
		this.setState({txt: e.target.value})
	}

    render () {
        return (
			<div>
				<input type="text" onChange={this.update.bind(this)}/>
				<h1>{this.state.txt} - {this.state.cat}</h1>
			</div>
		)
    }
}

App.propTypes = {
	txt: PropTypes.string,
	cat: PropTypes.number.isRequired
};

App.defaultProps = {
	txt: "default text"
};

//const App = () => <h2>HI</h2>

export default App;
