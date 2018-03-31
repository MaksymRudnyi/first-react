import React from 'react';
import ReactDom from 'react-dom'

class App extends React.Component {
	constructor () {
		super();
		this.state = {val: 0};
		this.update = this.update.bind(this)
	}

	update() {
		this.setState({val: this.state.val + 1})
	}

	componentWillMount () {
		console.log('componentWillMount')
	}

	componentDidMount() {
		console.log('componentDidMount')
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	render(){
		console.log('render');
		return <button onClick={this.update}>{this.state.val}</button>
	}

}

class Wrapper extends React.Component {
	unmount () {
		ReactDom.unmountComponentAtNode(document.getElementById('a'))
	}

	mount () {
		ReactDom.render(<App />, document.getElementById('a'))
	}

	render () {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		)
	}
}

export default Wrapper;
