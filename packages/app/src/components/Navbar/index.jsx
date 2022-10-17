import React, { useContext, useState } from "react";

import "@mytheresa/scss/lib/Navbar.css";
import { Link } from "react-router-dom";
import MovieContext from "../../contexts/MovieContext";
import Button from "../Button";

const Navbar = () => {
  const { wishlist } = useContext(MovieContext);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="myt-navbar__container">
      <Link to="/" className="myt-navbar__container_link">
        <h2>Movie Collection</h2>
      </Link>
      <div className="myt-navbar__dropdown_container">
        <Button
          title={`Wishlist(${wishlist?.length})`}
          onClick={() => setShowDropdown(!showDropdown)}
        />
        {showDropdown && (
          <div className="myt-navbar__dropdown">
            {wishlist?.map((item) => (
              <div key={item.id} className="myt-flex ">
                <div>
                  <img
                    className="myt-width-xl myt-height-xl"
                    src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                  />{" "}
                </div>
                <div className="myt_dropdown_text__container">
                  <div className="myt_dropdown_text__title">{item?.title}</div>
                  <div className="myt_dropdown_text__tagline">
                    {item?.tagline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
