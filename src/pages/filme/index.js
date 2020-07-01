import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Filme extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: []
		};
		this.getMovie = this.getMovie.bind(this);
		this.setMovie = this.setMovie.bind(this);
	}

	async componentDidMount() {
		console.log('AQUI');
		this.setMovie(await this.getMovie());
	}

	async getMovie() {
		const { id } = this.props.match.params;
		return await fetch(`https://sujeitoprogramador.com/r-api/?api=filmes/${id}`)
			.then((movie) => movie.json())
			.then((movie) => movie);
	}

	setMovie(movie) {
		this.setState({ movie });
	}

	render() {
		return (
			<div className="container align-items">
				<div className="filme-info">
					<img src={this.state.movie.foto} alt={this.state.movie.nome} />
					<h1> {this.state.movie.nome} </h1>
					{this.state.movie.length !== 0 && <h3>Sinopse</h3>}
					<p>{this.state.movie.sinopse}</p>
					{this.state.movie.length !== 0 && <Link to="/">home</Link>}
				</div>
			</div>
		);
	}
}

export default Filme;
