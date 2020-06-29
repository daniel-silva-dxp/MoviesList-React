import React from 'react';
import watching from '../../assets/watching.png';

import './index.css';

const Header = () => {
	return (
		<header className="header">
			<div className="container align-items">
				<div className="wrap-text">
					<h1>Watching movies tv</h1>
					<h4>movies list</h4>
				</div>
				<img src={watching} alt="Watching TV" title="Watching Movies at TV" />
			</div>
		</header>
	);
};

export default Header;
