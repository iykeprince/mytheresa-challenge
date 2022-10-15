import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { getGenres } from "./services/api";
import MovieContext from './contexts/MovieContext'

const App = () => {
  const [genres, setGenres] = useState([])
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    loadData()

  }, [])

  useEffect(() => {
    console.log('wishlist', wishlist)


  }, [wishlist.length])


  const loadData = async () => {
    const data = await getGenres()
    setGenres(data.genres)
  }


  return (<MovieContext.Provider value={{ setWishlist, wishlist }}>
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage genres={genres} />} />
        <Route path="/:id/view" element={<DetailPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  </MovieContext.Provider>);
};

export default App;