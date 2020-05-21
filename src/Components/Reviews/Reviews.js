/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reviewsMapper from '../../Helpers/reviewsMapper';
import * as moviesApi from '../../Services/MoviesApi';
import ReviewsList from '../ReviewsList/ReviewsList';
import ErrorNotification from '../ErrorNotification/ErrorNotification';

export default class Cast extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    const { id } = this.props;
    moviesApi
      .getMovieReviews(id)
      .then(data => this.setState({ reviews: reviewsMapper(data.results) }))
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { reviews, error } = this.state;
    const { onClick } = this.props;
    return (
      <>
        {error && <ErrorNotification text={error.message} />}
        <ReviewsList reviews={reviews} onClick={onClick} />
      </>
    );
  }
}
