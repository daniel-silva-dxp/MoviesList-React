import React, { Component } from 'react';
import MovieList from '../../components/movie-list';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			movies: []
		};
		this.getMovies = this.getMovies.bind(this);
		this.setMovies = this.setMovies.bind(this);
	}

	async componentDidMount() {
		this.setMovies(await this.getMovies());
		console.log(await this.getMovies());
	}

	async getMovies() {
		return await fetch('https://sujeitoprogramador.com/r-api/?api=filmes')
			.then((movie) => movie.json())
			.then((movie) => movie);
	}

	setMovies(movies) {
		this.setState({ movies });
	}

	render() {
		return <MovieList movies={this.state.movies} />;
	}
}

export default Home;
