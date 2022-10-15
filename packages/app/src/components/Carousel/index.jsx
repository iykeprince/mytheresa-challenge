import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";

import "@mytheresa/scss/lib/Carousel.css";
import { getMovies } from "../../services/api";

const Carousel = ({ id, title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => setMovies((await getMovies(id))?.items);

  const navigateToDetail = (movieId) => {
    navigate(`/${movieId}/view`);
  };

  return (
    <div className="myt-carousel__container">
      <div className="myt-carousel__caption">{title}</div>
      <div className="myt-carousel__content ">
        {loading && <p>Loading...</p>}
        <ol className="myt-carousel__ol">
          {movies.map((item, index) => {
            const { id, title, poster_path } = item;
            return (
              <li
                key={index}
                className="myt-carousel__list-item"
                onClick={() => navigateToDetail(id)}
              >
                <Card title={title} url={poster_path} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Carousel;
