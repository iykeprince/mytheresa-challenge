import React from "react";
import Navbar from "../Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DefaultLayout;
