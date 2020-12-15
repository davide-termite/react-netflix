import React, { useState, useEffect } from "react";
import axios from "./../axios";
import requests from "./../requests";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);

      setMovie(request.data.results[12]);

      return request;
    }
    fetchData();
  });

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="info-container">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="button-container">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>

        <p className="description">{movie?.overview}</p>
      </div>
      <div className="banner-fade"></div>
    </header>
  );
}

export default Banner;
