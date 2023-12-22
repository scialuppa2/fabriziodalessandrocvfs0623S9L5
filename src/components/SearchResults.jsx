import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Col, Row } from 'react-bootstrap';

const SearchResults = ({ searchResults }) => {
  const [results, setResults] = useState(searchResults);

  useEffect(() => {
    setResults(searchResults);
  }, [searchResults]);

  console.log('Risultati ricevuti:', results);

  return (
    <div className="container search-results">
        <h2 className="text-light">Risultati della tua ricerca...</h2>
      {results.length > 0 ? (
        <Row xs={2} md={3} lg={4} xl={6} className="g-4">
          {results.map((movie) => (
            <Col key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>Nessun risultato trovato.</p>
      )}
    </div>
  );
};

export default SearchResults;
