import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZjE3MjBkOGEyMDAwMThhNDhiMzkiLCJpYXQiOjE3MDIyMDU0MjIsImV4cCI6MTcwMzQxNTAyMn0.wI1n2pl7S6ZJIoyOkS5jA5KxlKf2CuvRw700UVblnLo",
          },
        });

        if (response.ok) {
          let fetchedComments = await response.json();
          setComments(fetchedComments);
          setIsLoading(false);
          setIsError(false);
        } else {
          console.error('Error fetching comments');
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchComments();
  }, [asin]);

  return (
    <div className="text-center">
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
