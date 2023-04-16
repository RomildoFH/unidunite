import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

function Routers() {
  return (
    <Routes>
      <Route exact path="/unidunite" element={ <Home /> } />
      <Route path="/unidunite/products/:id" element={ <ProductDetails /> } />
    </Routes>
  )
}

export default Routers