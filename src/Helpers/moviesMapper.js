const moviesMapper = movies => {
  return movies.map(({ title, name, id }) => ({
    title,
    name,
    id,
  }));
};

export default moviesMapper;
