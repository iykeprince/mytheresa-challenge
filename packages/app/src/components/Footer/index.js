import React from 'react'

import "@mytheresa/scss/lib/Footer.css"
import "@mytheresa/scss/lib/Utilities.css"
import "@mytheresa/scss/lib/Margin.css"
const Footer = ({ data }) => {
  return (
    <div
      className="myt-footer__container myt-margin-top-md" >
      <div className='myt-footer__block myt-margin-top-md'>
        <div className="myt-footer__block__title  myt-margin-top-xs">Production countries</div>{" "}
        <div className="myt-footer__block__content">
          {data?.production_countries?.map((country, id) => (
            <div key={id} >
              {country.iso_3166_1}
            </div>
          ))}
        </div>
      </div>

      <div className="myt-footer__block  myt-margin-top-md">
        <div className="myt-footer__block__title  myt-margin-top-xs">Production companies:</div>{" "}
        <div className="myt-footer__block__content">
          {data?.production_companies?.map((company, id) => (
            <div key={company.id} className="production__images" >
              {company.logo_path && (
                <img
                  className="myt-width-xxl myt-height-xxl "
                  src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Footer