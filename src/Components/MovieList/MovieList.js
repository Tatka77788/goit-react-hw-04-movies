/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.MoviesList}>
      {movies.map(({ title, name, id }) => (
        <li className={styles.MoviesListItems} key={id}>
          <Link
            className={styles.MoviesListItemsLink}
            to={{ pathname: `/movies/${id}`, state: { from: location } }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
