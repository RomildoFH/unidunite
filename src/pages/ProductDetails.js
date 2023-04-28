import React, { useContext, useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
import AppContext from '../context/AppContext';
import './ProductDetails.css';
import Magnifier from '../components/Magnifier/Magnifier';
import magnify from '../components/Magnifier/Magnifier';
import ImageMagnifier from '../components/Magnifier/Magnifier';

function ProductDetails(props) {
  const { setIsLoading, selectedProduct, setSelectedProduct, filtredList} = useContext(AppContext)
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
    console.log('clickou')
    switch (name) {
      case 'photo-gallery':
        setPhoto(target.src);
        break;
      case 'move-right':
        const newId = id + 1;
        const newProduct = filtredList.filter((product) => product.id === newId);
        setSelectedProduct(newProduct);
        console.log('movendo para direita')
        break;
      default:
        break;
    }
  }

  return (
    <main>
      <section className="product-show">
        <div className="product-photos">
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
          <ImageMagnifier src={ photo } width="60%" />
        </div>
        <div className="product-menu">
          <h3 className="product-title">{ name }</h3>
          <p className="product-description">{description}</p>
          <p>{ `Preço: R$ ${cost.toFixed(2)}` }</p>
          <label>   
            Tamanhos disponíveis:
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
    </main>
  )
}

export default ProductDetails
