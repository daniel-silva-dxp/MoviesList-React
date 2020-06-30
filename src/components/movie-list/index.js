import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const MovieList = ({ movies }) => {
	return (
		<div className="container">
			<div className="wrap-movies">
				<h1 className="title">Movies list</h1>
				<div className="items">
					{movies.map((movie) => (
						<article key={movie.id}>
							<img src={movie.foto} alt="" />
							<div className="text">
								<h1>{movie.nome}</h1>
								<Link to={`/movie/${movie.id}`}>view more</Link>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
