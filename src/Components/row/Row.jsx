import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "url from tmdb";

  useEffect(() => {
    const fetchData = async () => {
      // const request = await axios.get(fetchUrl)
      // setMovies(request.data.results)
      // return request
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie?.id}
                src={`${base_url}${
                  isLargeRow ? movies.poster_path : movies.backdrop_path
                }`}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
