/* eslint-disable consistent-return */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as moviesApi from '../Services/MoviesApi';
import getIdFromProps from '../Helpers/getId';
import ButtonGoBack from '../Components/ButtonGoBack/ButtonGoBack';
import AboutMovie from '../Components/AboutMovie/AboutMovie';
import AdditionalInfo from '../Components/AdditionalInfo/AdditionalInfo';
import Cast from '../Components/Cast/Cast';
import Reviews from '../Components/Reviews/Reviews';

const queryString = require('query-string');

export default class MoviesDetailsPage extends Component {
  state = {
    movie: null,
    query: '',
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    moviesApi
      .getMovieWithId(id)
      .then(movie => this.setState({ movie }))
      .catch(error => {
        console.log(error);
      });

    if (this.props.location.state) {
      this.setState({
        query: queryString.parse(this.props.location.state.from.search).query,
      });
    }
  }

  handleGoback = () => {
    const { history } = this.props;
    const { query } = this.state;

    if (query) {
      return history.push(`/movies?query=${query}`);
    }
    return history.push('/');
  };

  handleCloseCastOrReviews = e => {
    const { history, location } = this.props;
    const id = getIdFromProps(this.props);
    if (
      location.pathname.split('/').includes('cast') ||
      location.pathname.split('/').includes('reviews')
    ) {
      if (
        location.pathname.split('/').includes('cast') &&
        e.currentTarget.textContent === 'Reviews'
      ) {
        return history.push(`/movies/${id}/reviews`);
      }
      if (
        location.pathname.split('/').includes('reviews') &&
        e.currentTarget.textContent === 'Cast'
      ) {
        return history.push(`/movies/${id}/cast`);
      }
      history.push(`/movies/${id}`);
    }
  };

  handleCloseCastOrReviewsByClickOnList = () => {
    const { history } = this.props;
    const id = getIdFromProps(this.props);
    history.push(`/movies/${id}`);
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      <>
        {movie && (
          <>
            <ButtonGoBack onGoback={this.handleGoback} />
            <AboutMovie {...movie} />
            <AdditionalInfo
              id={movie.id}
              onClick={this.handleCloseCastOrReviews}
            />
            <Switch>
              <Route
                path={`${match.path}/cast`}
                render={props => (
                  <Cast
                    id={movie.id}
                    onClick={this.handleCloseCastOrReviewsByClickOnList}
                  />
                )}
              />
              <Route
                path={`${match.path}/reviews`}
                render={props => (
                  <Reviews
                    id={movie.id}
                    onClick={this.handleCloseCastOrReviewsByClickOnList}
                  />
                )}
              />
            </Switch>
          </>
        )}
      </>
    );
  }
}
