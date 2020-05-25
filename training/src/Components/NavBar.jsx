import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/temperature">Temperature</Link>
			<Link to="/customize-image">Customize image</Link>
		</div>
	);
};

export default NavBar;
