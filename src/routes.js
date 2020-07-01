import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Erro from './pages/erro';
import Filme from './pages/filme';

const Routes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/movie/:id" component={Filme} />
				<Route path="*" component={Erro} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
