import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moviesApi from '../../Services/MoviesApi';
import castMapper from '../../Helpers/castMapper';
import CastList from '../CastList/CastList';

export default class Cast extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = {
    cast: [],
  };

  componentDidMount() {
    const { id } = this.props;

    moviesApi
      .getMovieCast(id)
      .then(({ cast }) => this.setState({ cast: castMapper(cast) }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { cast } = this.state;
    const { onClick } = this.props;
    return <CastList cast={cast} onClick={onClick} />;
  }
}
