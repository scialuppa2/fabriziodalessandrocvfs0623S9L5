import React, { useState, useEffect } from 'react';
import { Col, Row, Card } from 'react-bootstrap';

const MovieGallery = ({ apiEndpoint, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=cdbdad0e&s=${apiEndpoint}`);
        const data = await response.json();

        if (data.Search) {
          setMovies(data.Search);
        } else {
          console.error('Nessun risultato trovato.');
        }
      } catch (error) {
        console.error('Errore durante il recupero dei film:', error);
      }
    };

    fetchMovies();
  }, [apiEndpoint]);

  return (
    <div className="container mt-4">
      <h2 className="text-light">{title}</h2>
      <Row xs={2} md={3} lg={4} xl={6}>
        {movies.map((movie) => (
          <Col key={movie.imdbID} className="mb-4">
            <Card className="movie-card">
              <Card.Img src={movie.Poster} alt={movie.Title} className="movie-image" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieGallery;
