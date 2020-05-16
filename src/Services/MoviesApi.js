import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '6b5a450f9a03d737f06df8aa6d420041';

export const getPopularMovies = () =>
  axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}`);

export const getMovieWithId = id =>
  axios
    .get(`${BASE_URL}movie/${id}?api_key=${KEY}`)
    .then(response => response.data);

export const getMovieCast = id =>
  axios
    .get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`)
    .then(response => response.data);

export const getMovieReviews = id =>
  axios
    .get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1)`)
    .then(response => response.data);

export const getMovieByQuery = query =>
  axios
    .get(
      `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
    )
    .then(response => response.data);
