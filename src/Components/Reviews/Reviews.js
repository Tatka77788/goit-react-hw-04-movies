import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reviewsMapper from '../../Helpers/reviewsMapper';
import * as moviesApi from '../../Services/MoviesApi';
import ReviewsList from '../ReviewsList/ReviewsList';

export default class Cast extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    const { id } = this.props;
    moviesApi
      .getMovieReviews(id)
      .then(data => this.setState({ reviews: reviewsMapper(data.results) }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { reviews } = this.state;
    const { onClick } = this.props;
    return <ReviewsList reviews={reviews} onClick={onClick} />;
  }
}
