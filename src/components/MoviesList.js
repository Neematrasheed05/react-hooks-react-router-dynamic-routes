import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
    // Extract keys from movies object
  const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
        {/* Use Link component for navigation */}
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));

  return <ul>{renderMovies}</ul>;
}

export default MoviesList;