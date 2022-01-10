import React, { Component } from 'react';

class Random extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		};
		this.makeTimer();
	}
	makeTimer() {
		setInterval(() => {
			let rand = Math.floor(Math.random() * this.props.maxNum);
			let randColor = Math.floor(Math.random() * 16777215).toString(16);
			this.setState({ num: rand, color: '#' + randColor });
		}, 3000);
	}
	render() {
		return <h1 style={{ color: this.state.color }}>{this.state.num}</h1>;
	}
}

export default Random;
