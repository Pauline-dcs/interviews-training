import React, { Component } from 'react';

export default class Temperature extends Component {
	state = {
		temperature: '',
		message: '',
	};

	tellMe(num) {
		if (num < 10) {
			this.setState({ message: "It's cold ❄️" });
		} else if (num >= 10 && num < 30) {
			this.setState({ message: "It's nice 🌼" });
		} else if (num > 30) {
			this.setState({ message: "It's warm ☀️" });
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
					onChange={this.handleChange}
				></input>
				<p>{this.state.message}</p>
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
