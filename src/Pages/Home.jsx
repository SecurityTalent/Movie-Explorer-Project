import React, { useState, useEffect, useRef } from "react";
import MovieList from "../Component/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) return fetchMovies(query);
  };

  const fetchMovies = async (query) => {
    setLoading(true);
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=bf22dc8a&s=${query}`
    );
    const data = await res.json();
    console.log(data.Search);
    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("avengers");
  }, []);

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className="searchInput"
          placeholder="Search for a movie..."
        />
        <button type="submit">Search 🔎</button>
      </form>

      {loading ? <h2>Loading...</h2>: <MovieList movies={movies} /> }
      
    </div>
  );
}

export default Home;
