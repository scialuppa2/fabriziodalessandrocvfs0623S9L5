// SingleComment.jsx
import { Button, ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
    const deleteComment = async (id) => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' + id,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZjE3MjBkOGEyMDAwMThhNDhiMzkiLCJpYXQiOjE3MDIyMDU0MjIsImV4cCI6MTcwMzQxNTAyMn0.wI1n2pl7S6ZJIoyOkS5jA5KxlKf2CuvRw700UVblnLo",
                    },
                }
            )
            if (response.ok) {
                alert('Commento eliminato con successo');
            } else {
                alert('Errore - Commento non eliminato');
            }
        } catch (error) {
            alert('Errore - Commento non eliminato');
        }
    };

    return (
        <ListGroup.Item className='bg-secondary text-light d-flex justify-content-between'>

            <i class="bi bi-chat-square-dots"></i>
            <span>{comment.comment}</span>
            
            <span><i class="bi bi-star m-2"></i>{comment.rate}</span>

            <Button
                variant="danger"
                className="m-2"
                onClick={() => deleteComment(comment._id)}
            >
                <i class="bi bi-trash3"></i>
            </Button>
        </ListGroup.Item>
    );
};

export default SingleComment;
