// CommentModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CommentModal = ({ show, onHide, movie, onCommentAction }) => {
  const [comment, setComment] = useState('');

  const handleCommentAction = async (action) => {
    try {
      const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZjE3MjBkOGEyMDAwMThhNDhiMzkiLCJpYXQiOjE3MDIyMDU0MjIsImV4cCI6MTcwMzQxNTAyMn0.wI1n2pl7S6ZJIoyOkS5jA5KxlKf2CuvRw700UVblnLo";
      
      const apiUrl = `https://striveschool-api.herokuapp.com/api/movies/${movie.imdbID}/comments/`;

      if (action === 'insert') {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
          body: JSON.stringify({ comment }),
        });

        if (response.ok) {
          onCommentAction('insert', comment);
        } else {
          console.error('Errore durante l\'inserimento del commento:', response.statusText);
        }
      } else if (action === 'delete') {
        const response = await fetch(apiUrl, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        });

        if (response.ok) {
          onCommentAction('delete', comment);
        } else {
          console.error('Errore durante la cancellazione del commento:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Errore durante la gestione del commento:', error);
    }

    onHide();
  };

  useEffect(() => {
    setComment('');
  }, [movie]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{movie && movie.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="commentForm">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleCommentAction('delete')}>
          Cancella Commento
        </Button>
        <Button variant="primary" onClick={() => handleCommentAction('insert')}>
          Inserisci Commento
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommentModal;
