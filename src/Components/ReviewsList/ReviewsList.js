import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewsList.module.css';

const ReviewsList = ({ reviews, onClick }) => {
  return (
    <>
      {reviews.length ? (
        <ul className={styles.ReviewsList} onClick={onClick}>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p className={styles.AuthorText}>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ReviewsList;
