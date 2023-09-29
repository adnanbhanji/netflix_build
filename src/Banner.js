import React, { useEffect, useState } from "react";
import requests from "./Requests";
import "./Banner.css";
import axios from "./axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const truncate = (str, n) => {
    if (str?.length > n) {
      return str.substr(0, n - 1) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    const getMovie = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    getMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>
        <button className="btn btn1">Play</button>
        <button className="btn btn2">More Info</button>
      </div>
      <p className="summary">{truncate(movie?.overview, 125)}</p>
      <div className="lineargradient"></div>
    </header>
  );
};

export default Banner;
