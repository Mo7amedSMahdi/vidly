import React from 'react';
import Movie from '../movie/movie';

const home = ({ movies, handleDelete }) => (
  <div className="movie-list">
    <h3>
      Showing &nbsp;
      {movies.length}
      &nbsp;movies in the database
    </h3>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies.length > 0
          ? movies.map((movie) => (
              <Movie key={movie.id} movie={movie} handleDelete={handleDelete} />
            ))
          : null}
      </tbody>
    </table>
  </div>
);

export default home;
