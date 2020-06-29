import React from 'react';
import logo from '../../assets/logo.png';

import './index.css';
import Button from '../../components/button';

const Erro = () => {
	return (
		<div className="container">
			<div className="wrap-erro">
				<div className="text-erro">
					<h1>000PS...</h1>
					<p>
						It looks like this page doesn't exist,<br />
						but don't let it stop you
					</p>
					<Button method="button"> Go to home</Button>
				</div>
				<img src={logo} alt="Logo Error" />
			</div>
		</div>
	);
};

export default Erro;
