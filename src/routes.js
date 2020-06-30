import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import ViewMovie from './pages/filme';
import Erro from './pages/erro';

const Routes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/movie/:id" compornent={ViewMovie} />
				<Route path="*" component={Erro} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
