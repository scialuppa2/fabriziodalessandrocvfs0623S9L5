// MovieCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie, onClick }) => (
  <Card className="movie-card" onClick={onClick}>
    <Card.Img src={movie.Poster} alt={movie.Title} className="movie-image" />
  </Card>
);

export default MovieCard;
