import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';

const Routes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
