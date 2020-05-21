/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import * as moviesApi from '../Services/MoviesApi';
import moviesMapper from '../Helpers/moviesMapper';
import MoviesList from '../Components/MovieList/MovieList';
import ErrorNotification from '../Components/ErrorNotification/ErrorNotification';

export default class HomePage extends Component {
  state = {
    popularMovies: [],
    error: null,
  };

  componentDidMount() {
    moviesApi
      .getPopularMovies()
      .then(({ data }) => {
        this.setState({ popularMovies: moviesMapper(data.results) });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { popularMovies, error } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {error && <ErrorNotification text={error.message} />}
        <MoviesList movies={popularMovies} />
      </>
    );
  }
}
