import React from 'react';
import './index.css';

const Button = ({ method, children }) => {
	return (
		<button type={method} className="btn btn-medium btn-dark">
			{children}
		</button>
	);
};

export default Button;
