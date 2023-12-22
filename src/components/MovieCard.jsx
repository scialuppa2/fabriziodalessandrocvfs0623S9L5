import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MovieCard = ({ movie, onClick }) => (
    <Card onClick={onClick} className="movie-card">
        <Card.Img src={movie.Poster} alt={movie.Title} className="movie-image" />
    </Card>
);

export default MovieCard;
