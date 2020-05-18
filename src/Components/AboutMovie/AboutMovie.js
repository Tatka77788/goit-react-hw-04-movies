/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutMovie.module.css';

const AboutMovie = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres,
}) => (
  <div className={styles.MovieInfoWrapper}>
    <img
      className={styles.MoviePoster}
      src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
      alt="film-poster"
    />
    <div className={styles.MovieInfo}>
      <h2>
        {title} ({release_date.slice(0, 4)})
      </h2>
      <p>User Score: {vote_average * 10}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      {genres.map(({ id, name }) => (
        <span key={id}>{name} </span>
      ))}
    </div>
  </div>
);

AboutMovie.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AboutMovie;
