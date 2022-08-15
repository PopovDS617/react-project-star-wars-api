import React, { useState, useEffect, useCallback } from 'react';
import Card from '../components/Card';
import episodeOnePoster from '../assets/episode_one_poster.jpg';
import episodeTwoPoster from '../assets/episode_two_poster.jpg';
import episodeThreePoster from '../assets/episode_three_poster.jpg';
import episodeFourPoster from '../assets/episode_four_poster.jpg';
import episodeFivePoster from '../assets/episode_five_poster.jpg';
import episodeSixPoster from '../assets/episode_six_poster.jpg';

import styles from './MoviesPage.module.css';

const postersArr = [
  episodeFourPoster,
  episodeFivePoster,
  episodeSixPoster,
  episodeOnePoster,
  episodeTwoPoster,
  episodeThreePoster,
];

const changeDateFormat = (date) => {
  const dateArr = date.split('');

  const newDate = `May ${dateArr[8]}${dateArr[9]}th, ${dateArr[0]}${dateArr[1]}${dateArr[2]}${dateArr[3]}`;
  return newDate;
};

const episodeToRoman = (number) => {
  let romanNumber;
  switch (number) {
    case 1:
      romanNumber = 'I';
      break;
    case 2:
      romanNumber = 'II';
      break;
    case 3:
      romanNumber = 'III';
      break;
    case 4:
      romanNumber = 'IV';
      break;
    case 5:
      romanNumber = 'V';
      break;
    case 6:
      romanNumber = 'VI';
      break;
  }
  return romanNumber;
};

const MoviesPage = () => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        key: movieData.episode_id,
        episodeRomanNumeral: episodeToRoman(movieData.episode_id),
        title: movieData.title,
        director: movieData.director,
        releaseDate: changeDateFormat(movieData.release_date),
        description: movieData.opening_crawl,
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

  if (!isLoading && loadedMovies.length < 1) {
    content = <p>found no movies</p>;
  }
  const loadedMoviesAndPosters = loadedMovies.map((movie, i) => {
    return {
      ...movie,
      image: postersArr[i],
    };
  });
  if (!isLoading && loadedMovies.length > 0) {
    content = loadedMoviesAndPosters.map((movie) => {
      return (
        <Card key={movie.key}>
          <img className={styles.img} src={movie.image} />
          <h1>
            Episode {movie.episodeRomanNumeral}: {movie.title}
          </h1>
        </Card>
      );
    });
  }

  return (
    <React.Fragment>
      <section className={styles.main}>{content}</section>
    </React.Fragment>
  );
};

export default MoviesPage;
