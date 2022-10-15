import React, { useContext } from "react";

import "@mytheresa/scss/lib/Navbar.css";
import { Link } from "react-router-dom";
import MovieContext from "../../contexts/MovieContext";

const Navbar = () => {
  const { wishlist } = useContext(MovieContext);
  return (
    <div className="myt-navbar__container">
      <Link to="/" className="myt-navbar__container_link">
        <h2>Movie Collection</h2>
      </Link>

      <div>Wishlist({wishlist?.length})</div>
    </div>
  );
};

export default Navbar;
