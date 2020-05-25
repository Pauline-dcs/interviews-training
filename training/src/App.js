import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import Temperature from './pages/Temperature';
import CustomizeImage from './pages/CustomizeImage';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/temperature" component={Temperature} />
				<Route exact path="/customize-image" component={CustomizeImage} />
			</Switch>
		</div>
	);
}

export default App;
