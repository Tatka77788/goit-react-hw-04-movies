import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moviesApi from '../../Services/MoviesApi';
import castMapper from '../../Helpers/castMapper';
import CastList from '../CastList/CastList';
import ErrorNotification from '../ErrorNotification/ErrorNotification';

export default class Cast extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    const { id } = this.props;

    moviesApi
      .getMovieCast(id)
      .then(({ cast }) => this.setState({ cast: castMapper(cast) }))
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { cast, error } = this.state;
    const { onClick } = this.props;
    return (
      <>
        {error && <ErrorNotification text={error.message} />}
        <CastList cast={cast} onClick={onClick} />;
      </>
    );
  }
}
