import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './ProductCard.css';

function ProductCard(props) {
  const { setIsLoading, setSelectedProduct } = useContext(AppContext);
  const {
    _id,
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
  } = props.product

  const handleClick = () => {
    setSelectedProduct({
      id: _id,
      name,
      cost,
      description,
      quantity,
      size,
      manufacturer,
      thumb,
      gallery,
      genders,
      tags,
    })
    setIsLoading(true)
  }

  return (
    <div
      className="product-card"
      // id={`product-id`}
      onClick={handleClick}
    >
      <Link className="product-link" to={ `/unidunite/products/${_id}` }>
        <img
          src={thumb}
          alt={ `product-id` }
          className="product-card-image"
        />
        <div className="card-info">
          <p className="card-title">{ name }</p>
          <p className="card-price">{ `R$ ${cost.toFixed(2)}` }</p>
          <p className="card-reference">Em até 2x no cartão</p>  
          <p className="card-reference">{ `Ref.: ${_id}` }</p>          
        </div>
      </Link>
    </div>
  )
}

export default ProductCard