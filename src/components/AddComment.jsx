import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddComment = ({ asin }) => {
    const [comment, setComment] = useState({
        comment: '',
        rate: 1,
        elementId: asin,
    });

    const sendComment = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZjE3MjBkOGEyMDAwMThhNDhiMzkiLCJpYXQiOjE3MDIyMDU0MjIsImV4cCI6MTcwMzQxNTAyMn0.wI1n2pl7S6ZJIoyOkS5jA5KxlKf2CuvRw700UVblnLo",
                },
            });

            if (response.ok) {
                alert('Comment sent! Thank you!');
                setComment({
                    comment: '',
                    rate: 1,
                    elementId: asin,
                });
            } else {
                console.error('Error sending comment');
                alert('Error - Comment not sent successfully!');
            }
        } catch (error) {
            console.error('Error sending comment:', error);
            alert('Error - Comment not sent successfully!');
        }
    };

    return (
        <div className="m-3">
            <Form onSubmit={sendComment}>
                <Form.Group>
                <Form.Label>Cosa ne pensi?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Commenta qui..."
                        value={comment.comment}
                        onChange={(e) => setComment({ ...comment, comment: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Vota</Form.Label>
                    <div className="my-3 text-center">
                        {[1, 2, 3, 4, 5].map(num => (
                            <Form.Check
                                inline
                                label={num}
                                value={num}
                                key={"n-" + num}
                                type="radio"
                                name="rating"
                                defaultChecked={comment.rate === num.toString()}
                                onClick={() => setComment({ ...comment, rate: num.toString() })}
                            />
                        ))}
                    </div>

                </Form.Group>
                <Button variant="secondary" type="submit">
                    Invia
                </Button>
            </Form>
        </div>
    );
};

export default AddComment;
