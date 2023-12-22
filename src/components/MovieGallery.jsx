import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Modal, Button } from 'react-bootstrap';
import MovieCard from './MovieCard';
import CommentArea from './CommentArea';

const MovieGallery = ({ apiEndpoint, title }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=cdbdad0e&s=${apiEndpoint}`);
        const data = await response.json();

        if (data.Search) {
          setMovies(data.Search);
        } else {
          console.error('No results found.');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [apiEndpoint]);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-light">{title}</h2>
      <Row xs={2} md={3} lg={4} xl={6}>
        {movies.map((movie) => (
          <Col key={movie.imdbID} className="mb-4">
            <Card className="movie-card" onClick={() => handleCardClick(movie)}>
              <Card.Img src={movie.Poster} alt={movie.Title} className="movie-image" />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie && selectedMovie.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie && <CommentArea asin={selectedMovie.imdbID} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieGallery;
