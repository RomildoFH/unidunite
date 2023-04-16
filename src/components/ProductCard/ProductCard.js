import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard(props) {
  const {
    _id,
    cost,
    name,
  } = props.product

  return (
    <div
      className="product-card"
      // id={`product-id`}
    >
      <img
        src="https://cdn.pixabay.com/photo/2014/04/03/10/55/t-shirt-311732_960_720.png"
        alt={ `product-id` }
        className="product-card-image"
      />
      <p>{ name }</p>
      <p>{ `R$ ${cost.toFixed(2)}` }</p>
      <p>{ `Ref.: ${_id}` }</p>
      <Link className="product-link" to={ `/unidunite/products/${_id}` }>Detalhes</Link>
    </div>
  )
}

export default ProductCard