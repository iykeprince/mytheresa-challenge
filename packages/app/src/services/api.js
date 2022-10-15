export const getGenres = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=a44837da8122413d6efb7b3a755f44e3`)
  const data = await res.json()
  return data;
}

export const getMovies = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/list/${id}?api_key=a44837da8122413d6efb7b3a755f44e3`
  );
  const data = await response.json();
  return data;
};


export const getMovieDetail = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a44837da8122413d6efb7b3a755f44e3&language=en-US`);
  const data = await response.json();
  return data;
}
