/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import * as moviesApi from '../Services/MoviesApi';
import moviesMapper from '../Helpers/moviesMapper';
import SearchBar from '../Components/SearchBar/SearchBar';
import MoviesList from '../Components/MovieList/MovieList';

const queryString = require('query-string');

export default class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  componentDidMount() {
    const parsedQuery = queryString.parse(this.props.location.search).query;
    if (parsedQuery) {
      this.getMovies(parsedQuery);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.getMovies(query);
      this.props.history.push({
        ...this.props.location,
        search: `query=${query}`,
      });
    }
  }

  getMovies = query => {
    moviesApi
      .getMovieByQuery(query)
      .then(data => {
        data.results.length === 0
          ? alert('No films were found :( Try one more time!')
          : this.setState({ movies: moviesMapper(data.results) });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = queryString => {
    this.setState({ query: queryString });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}
