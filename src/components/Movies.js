import React from "react";
import { movies } from "../data";
import MovieItem from "./MovieItem"

function Movies() {
  // console.log(movies)

  const displayMovies = movies.map(movie => {
      return <MovieItem key={movie.title} movie={movie} />
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
    
  )
}

export default Movies;
