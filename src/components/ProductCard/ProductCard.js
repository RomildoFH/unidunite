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
        <p>{ name }</p>
        <p>{ `R$ ${cost.toFixed(2)}` }</p>
        <p>{ `Ref.: ${_id}` }</p>
      </Link>
    </div>
  )
}

export default ProductCard