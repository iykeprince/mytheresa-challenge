import React from "react";

import "@mytheresa/scss/lib/Card.css";

const Card = ({ title, url }) => {
  return (
    <div data-testid="MytCard" className="myt-card__container">
      <img
        src={`https://image.tmdb.org/t/p/original${url}`}
        alt={title}
        className="myt-card__image"
      />
      <div className="myt-card__caption">{title}</div>
    </div>
  );
};

export default Card;
