import React from "react";

function MovieItem({ movie }) {

    return (
        <div>
          <h2>{movie.title}</h2>
          <h3>{movie.time}</h3>
          <ul>
            {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
          </ul>
        </div>
    )
}

export default MovieItem;