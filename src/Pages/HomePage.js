/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import * as moviesApi from '../Services/MoviesApi';
import moviesMapper from '../Helpers/moviesMapper';
import MoviesList from '../Components/MovieList/MovieList';

export default class HomePage extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    moviesApi
      .getPopularMovies()
      .then(({ data }) => {
        this.setState({ popularMovies: moviesMapper(data.results) });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { popularMovies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={popularMovies} />
      </>
    );
  }
}
