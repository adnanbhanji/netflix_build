import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

const Row = ({ title, fetchUrl, isLarge = false }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    getMovies();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_content">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
