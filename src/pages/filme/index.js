import React, { Component } from 'react';

import './index.css';

class ViewMovie extends Component {
	constructor(props) {
		super();
		this.state = {
			movie: []
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		console.log(id);
	}
	render() {
		return <div className="movie">FILME</div>;
	}
}

export default ViewMovie;
