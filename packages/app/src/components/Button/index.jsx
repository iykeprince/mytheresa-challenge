import React from "react";

import "@mytheresa/scss/lib/Button.css";

const Button = ({ title, disabled, onClick, className = "primary-button" }) => {
  return (
    <div
      data-testid="MytButton"
      onClick={disabled ? null : onClick}
      className={`myt-button__container myt-button__container__${className} ${
        disabled ? "myt-button__container__disabled" : ""
      }`}
    >
      {title}
    </div>
  );
};

export default Button;
