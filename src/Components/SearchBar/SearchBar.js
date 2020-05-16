import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    queryString: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      queryString: value,
    });
  };

  handleSubmit = e => {
    const { queryString } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    if (queryString) {
      onSubmit(queryString);
      this.setState({
        queryString: '',
      });
    }
  };

  render() {
    const { queryString } = this.state;
    return (
      <>
        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <input
            className={styles.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={queryString}
            onChange={this.handleChange}
          />
          <button className={styles.ButtonForm} type="submit">
            <span>Search</span>
          </button>
        </form>
      </>
    );
  }
}
