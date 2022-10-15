import React from 'react'

import "@mytheresa/scss/lib/MovieBanner.css"

const MovieBanner = ({ data }) => {
  return (
    <div
      className="myt-movie-banner__container"
      style={{

        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${data?.poster_path}` ||
          "https://via.placeholder.com/450"
          })`,
      }}
    />
  )
}

export default MovieBanner    