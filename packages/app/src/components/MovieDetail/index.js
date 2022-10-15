import React from 'react'

import "@mytheresa/scss/lib/MovieDetail.css"

const MovieDetail = ({ children }) => {
  return (
    <div
      className="myt-movie-detail__container"

    >
      {children}
    </div>
  )
}

export default MovieDetail