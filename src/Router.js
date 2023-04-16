import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function Routers() {
  return (
    <Routes>
      <Route exact path="/unidunite" element={ <Home /> } />
    </Routes>
  )
}

export default Routers