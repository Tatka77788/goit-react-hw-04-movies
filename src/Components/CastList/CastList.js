/* eslint-disable camelcase */
/* eslint-disable import/named */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CastList.module.css';

const CastList = ({ cast, onClick }) => {
  return (
    <>
      {cast.length ? (
        <ul className={styles.CastList} onClick={onClick}>
          {cast.map(({ profile_path, name, character, id }) => (
            <li key={id} className={styles.CastInfo}>
              {profile_path ? (
                <img
                  className={styles.CastPhoto}
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt="member of cast"
                />
              ) : (
                <img
                  className={styles.CastPhoto}
                  src="https://cdn.browshot.com/static/images/not-found.png"
                  alt="error img"
                />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, there is no information about cast.</p>
      )}
    </>
  );
};
CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CastList;
