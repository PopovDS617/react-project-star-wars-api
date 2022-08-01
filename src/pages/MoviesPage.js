import React, { useState, useEffect, useCallback } from "react";

const MoviesPage = () => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        key: movieData.episode_id,
        id: movieData.episode_id,
        title: movieData.title,
        director: movieData.director,
        releaseDate: movieData.release_date,
      };
    });

    setLoadedMovies(transformedMovies);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  let content;

  if (isLoading) {
    content = <p>Loading . . .</p>;
  }

  // if (!isLoading && loadedMovies.length > 0) {
  //   content = loadedMovies.map((movie) => {
  //     return (
  //       <tr>
  //         <th> {movie.title}</th>
  //         <th> {movie.director}</th>
  //       </tr>
  //     );
  //   });
  // }

  if (!isLoading && loadedMovies.length < 1) {
    content = <p>found no movies</p>;
  }

  return (
    <div>
      StarWars API
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Realease date</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            loadedMovies.length > 0 &&
            loadedMovies.map((movie) => {
              return (
                <tr key={movie.key}>
                  <th> {movie.title}</th>
                  <th> {movie.director}</th>
                  <th> {movie.releaseDate}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesPage;

{
  /* <div> Directed by {movie.director}</div>
<div> Released on {movie.releaseDate}</div>
 */
}
