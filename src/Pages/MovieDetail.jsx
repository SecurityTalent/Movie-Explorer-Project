import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=bf22dc8a&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>

      <img
        alt={movie.Title}
        src={movie.Poster}
      />

      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>

      <p>
        <strong>Released:</strong> {movie.Released}
      </p>

      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
    </div>
  );
}

export default MovieDetail;
