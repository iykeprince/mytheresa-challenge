import React from "react";

const Text = ({ text = "", fontWeight }) => {
  let className = "myt-text__container ";

  if (fontWeight) {
    className += "my";
  }

  return <div className={className}>{text}</div>;
};

export default Text;
