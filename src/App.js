import React, { useState } from 'react';
import Home from './components/home/home';
import { getMovies, deleteMovie } from './services/fakeMovieService';

function App() {
  const [movies, setMovies] = useState(getMovies());
  const handleDeleteMovie = (id) => {
    setMovies(deleteMovie(id));
  };

  return (
    <div className="container">
      <Home movies={movies} handleDelete={handleDeleteMovie} />
    </div>
  );
}

export default App;
