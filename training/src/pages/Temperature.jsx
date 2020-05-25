import React, { Component } from 'react';

export default class Temperature extends Component {
	state = {
		temperature: '',
	};

	tellMe(num) {
		if (num === '') {
			return <p></p>;
		} else if (num < 10) {
			return (
				<p style={{ color: 'blue' }}>
					{' '}
					It's cold <span>❄️</span>
				</p>
			);
			// this.setState({ message: "It's cold" });
		} else if (num >= 10 && num < 30) {
			return (
				<p style={{ color: 'orange' }}>
					{' '}
					It's nice <span>🌼</span>
				</p>
			);
			// this.setState({ message: "It's nice 🌼" });
		} else if (num >= 30) {
			return (
				<p style={{ color: 'red' }}>
					It's warm <span>☀️</span>
				</p>
			);
			// this.setState({ message: "It's warm ☀️" });
		}
	}

	handleChange = (e) => {
		let value = e.target.value;

		this.setState({ [e.target.name]: value });
		this.tellMe(value);

		// console.log(this.state);
	};

	render() {
		return (
			<div>
				<input
					type="number"
					name="temperature"
					value={this.state.temperature}
					onChange={this.handleChange}
				></input>
				{this.tellMe(this.state.temperature)}
			</div>
		);
	}
}

// This component should render:

// An input so that the user can type a temperature, in Celsius
// A text that changes based on the temperature:
// When the temperature is lower than 10 => "It's cold ❄️" (in blue)
// When the temperature is between 10 and 30 => "It's nice 🌼" (in black)
// When the temperature is above 30 => "It's warm ☀️" (in red)
// For this task, you need only 1 state temperature.
