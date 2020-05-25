import React, { Component } from 'react';

export default class CustomizeImage extends Component {
	state = {
		size: 0,
		url: '',
	};

	handleChange = (event) => {
		const key = event.target.name;

		const value =
			event.target.type === 'file' ? event.target.files[0] : event.target.value;

		this.setState({ [key]: value });

		console.log(this.state);
	};

	render() {
		return (
			<div>
				<input onChange={this.handleChange} type="text" name="url"></input>
				<input
					onChange={this.handleChange}
					type="range"
					id="range"
					name="size"
					min="0"
					max="200"
				></input>
				<p>
					{this.state.size} x {this.state.size} px
				</p>
				<img
					width={this.state.size}
					height={this.state.size}
					src={this.state.url}
					alt="image"
				/>
			</div>
		);
	}
}
