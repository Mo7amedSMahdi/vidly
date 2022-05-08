import React from 'react';

const movie = ({ movie, handleDelete }) => (
  <tr>
    <td>{movie.title}</td>
    <td>{movie.genre.name}</td>
    <td>{movie.numberInStock}</td>
    <td>{movie.dailyRentalRate}</td>
    <td>
      <button
        onClick={() => {
          handleDelete(movie.id);
        }}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
    </td>
  </tr>
);

export default movie;
