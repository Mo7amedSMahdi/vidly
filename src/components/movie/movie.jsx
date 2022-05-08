import React from 'react';

const movie = ({ movie }) => (
  <tr>
    <td>{movie.title}</td>
    <td>{movie.genre.name}</td>
    <td>{movie.numberInStock}</td>
    <td>{movie.dailyRentalRate}</td>
    <td>
      <button type="button" class="btn btn-primary">
        Delete
      </button>
    </td>
  </tr>
);

export default movie;
