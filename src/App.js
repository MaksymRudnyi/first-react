import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom'

class App extends React.Component {
	constructor () {
		super();
		this.state = {a: ''}
	}

	update() {
		this.setState({
			a: this.a.value,
			b: this.refs.b.value,
			c: this.c.refs.input.value
		})
	}

    render () {
        return (
        	<div>
				<input
					ref={node => this.a = node}
					type="text"
					onChange={this.update.bind(this)}
				/>
				{this.state.a}

				<hr/>

				<input
					ref="b"
					type="text"
					onChange={this.update.bind(this)}
				/>
				{this.state.b}

				<hr/>

				<Input ref={component =>this.c = component}
					   update={this.update.bind(this)}/>

				{this.state.c}
			</div>
		)
    }
}

class Input extends React.Component {
	render () {
		return <div><input ref="input" type="text" onChange={this.props.update}/></div>
	}
}

export default App;
