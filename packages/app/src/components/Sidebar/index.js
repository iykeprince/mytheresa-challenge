import React, { useContext } from 'react'
import Button from '../Button'

import "@mytheresa/scss/lib/Sidebar.css"
import "@mytheresa/scss/lib/Margin.css"
import MovieContext from '../../contexts/MovieContext'
import Loading from '../Loading'

const Sidebar = ({ data }) => {
  const { setWishlist, wishlist } = useContext(MovieContext)

  const addToWishlist = () => {
    const result = wishlist.find(w => w.id === data.id)
    if (result) return;

    setWishlist([...wishlist, data])
  }

  if (!data) return <Loading />

  return (
    <aside
      className="myt-sidebar__container"

    >
      <Button
        title={wishlist.find(w => w.id === data.id) !== undefined ? "Added" : "Add to Watchlist"}
        disabled={wishlist.find(w => w.id === data.id) !== undefined}
        onClick={addToWishlist}
        data-testid="wishlistButton"
      />

      <div className="myt-sidebar__content">
        <div className="myt-sidebar__content__header myt-margin-top-md">Title</div>
        <p className="myt-sidebar__content__title">{data?.title}</p>
        <p className='myt-sidebar__content__tagline'>{data?.tagline}</p>
        <hr className='myt-margin-top-md myt-margin-bottom-md' />
        <div className='myt-sidebar__content__header'>Overview</div>
        <p className="myt-sidebar__content__description">{data?.overview}</p>
        <div className='myt-margin-top-sm myt-sidebar__content__caption'>
          <p className="myt-sidebar__content__caption_title">Genres</p>
          <div className='myt-sidebar__content__caption_value'>
            {data?.genres?.map(genre => <span key={genre.id} className="myt-sidebar__badge__primary myt-margin-right-xxxs">{genre.name}</span>)}
          </div>
        </div>
        <div className='myt-margin-top-sm myt-sidebar__content__caption'>
          <p className='myt-sidebar__content__caption_title'>Homepage</p>
          <a className='myt-sidebar__content__caption_value' href={data?.homepage} target="_blank">{data?.title}</a>
        </div>
        <div className='myt-margin-top-sm myt-sidebar__content__caption'>
          <p className='myt-sidebar__content__caption_title'>Votes</p>
          <p className='myt-sidebar__content__caption_value'>{data?.vote_count}</p>
        </div>
        <div className='myt-margin-top-sm myt-sidebar__content__caption'>
          <p className='myt-sidebar__content__caption_title'>Budget</p>
          <p className='myt-sidebar__content__caption_value'>{data?.budget}</p>
        </div>
        <div className='myt-margin-top-sm myt-sidebar__content__posters'>
          <img className='myt-width-xxl myt-height-xxl myt-margin-right-xs' src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} />
          <img className='myt-width-xxl myt-height-xxl' src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} />
        </div>

        <div className='myt-margin-top-sm myt-sidebar__content__caption'>
          <p className='myt-sidebar__content__caption_title'>Popularity</p>
          <p className='myt-sidebar__content__caption_value'>{data?.popularity}</p>
        </div>
        <div className='myt-margin-top-sm myt-sidebar__content__caption'>
          <p className='myt-sidebar__content__caption_title'>Languages</p>
          <p className='myt-sidebar__content__caption_value'>{data?.spoken_languages?.map(lang => lang.name).join(', ')}</p>
        </div>

      </div>
    </aside>
  )
}

export default Sidebar