import React, { useContext, useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
import AppContext from '../context/AppContext';
import './ProductDetails.css';

function ProductDetails(props) {
  const { setIsLoading, selectedProduct, filtredList} = useContext(AppContext)
  // const location = useLocation();
  // console.log(location.pathname)

  // const renderProductInfo = () => {
  //   const {  }
  // }

  const [photo, setPhoto] = useState('');

  const {
    id,
    cost,
    name,
    description,
    quantity,
    size,
    manufacturer,
    thumb,
    gallery,
    genders,
    tags,
  } = selectedProduct

  useEffect(() => {
    setPhoto(thumb);
    setIsLoading(false);
  }, [])

  const makeNumberArray = (number) => {
    const array = [];

    for(let i = 1; i <= number; i += 1) {
      array.push(i);
    };
    return array;
  }

  const handleClick = ({ target }) => {
    const {name, value} = target

    if(name === 'photo-gallery') {
      setPhoto(target.src)
    }
  }

  return (
    <main>
      <section className="product-show">
        <div className="product-gallery">
          {
            gallery.map((photo, index) => (
              <img
                className="photo-gallery"
                name="photo-gallery"
                key={`photo-${index}`}
                src={ photo }
                alt={`${id}-${index}`}
                onClick={ (e) => handleClick(e) }
              />
            ))
          }
        </div>
        <img className="photo-active" src={ photo } alt={ `${name}.png` } />
        <div className="product-menu">
          <h3 className="product-title">{ name }</h3>
          <p className="product-description">{description}</p>
          <p>{ `R$ ${cost.toFixed(2)}` }</p>
          <label>   
            TAM:
            <select>
              {
                size.map((s) => (<option>{s}</option>))
              }
            </select>
          </label>
          <label>
            Quantidade:
            <select>
              {
                makeNumberArray(quantity).map((n) => (<option>{n}</option>))
              }
            </select>
          </label>
        </div>
      </section>
      {
        id < filtredList.length ? (
          <div className="flow-control-right">
            <img
              className="flow-control-arrow"
              src="https://cdn.pixabay.com/photo/2016/04/07/18/57/arrow-1314470_960_720.png"
              alt="arrow-right"
            />
          </div>
        ) : null
      }
      {
        id > 1 ? (
          <div className="flow-control-left">
            <img
              className="flow-control-arrow"
              src="https://cdn.pixabay.com/photo/2016/04/07/18/57/arrow-1314470_960_720.png"
              alt="arrow-left"
            />
          </div>
        ) : null
      }
    </main>
  )
}

export default ProductDetails
