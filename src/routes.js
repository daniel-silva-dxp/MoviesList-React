import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Header from './components/header';
import Erro from './pages/erro';
import Filme from './pages/filme';
import Downloads from './pages/download';
import { authenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			authenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
			)}
	/>
);

const Routes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/movie/:id" component={Filme} />
				<PrivateRoute exact path="/downloads" component={Downloads} />
				<Route path="*" component={Erro} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
