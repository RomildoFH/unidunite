import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation-top">
      <button className="nav-option">
        <img
          className="img-option"
          src="https://cdn.pixabay.com/photo/2018/02/03/23/48/handcart-3128749_960_720.png"
          alt="car_toy.png"
        />
        <p>Menino</p>        
      </button>
      <button className="nav-option">
      <img
          className="img-option"
          src="https://cdn.pixabay.com/photo/2018/01/28/15/28/fairy-3113943_960_720.png"
          alt="fairy.png"
        />
        <p>Menina</p>
      </button>
      <button className="nav-option">
        <img
          className="img-option"
          src="https://cdn.pixabay.com/photo/2015/02/02/23/58/sign-621746_960_720.png"
          alt="medal.png"
        />
        <p>Marcas</p>
      </button>
      <button className="nav-option">
        <img
          className="img-option"
          src="https://cdn.pixabay.com/photo/2020/07/15/04/20/pacifier-5406303_960_720.png"
          alt="medal.png"
        />
        <p>Enxoval</p>
      </button>
    </nav>
  )
}

export default Navigation