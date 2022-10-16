import React from "react";

import "@mytheresa/scss/lib/Button.css";

const Button = ({ title, disabled, onClick }) => {
  return (
    <div
      data-testid="MytButton"
      onClick={disabled ? null : onClick}
      className={`myt-button__container ${
        disabled ? "myt-button__container__disabled" : ""
      }`}
    >
      {title}
    </div>
  );
};

export default Button;
