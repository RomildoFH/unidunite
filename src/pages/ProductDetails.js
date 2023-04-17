import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AppContext from '../context/AppContext';

function ProductDetails(props) {
  const { setIsLoading, productList, selectedProduct, setSelectedProduct } = useContext(AppContext)
  // const location = useLocation();
  // console.log(location.pathname)

  // const renderProductInfo = () => {
  //   const {  }
  // }
  const {
    _id,
    cost,
    name,
    description,
    quantity,
    size,
    manufacturer,
    thumb,
  } = selectedProduct

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <main>
      <section className="product=show">
        <img src={ thumb } alt={ `${name}.png` } />
        <h2>{ name }</h2>
        <p>{ cost.toFixed(2) }</p>
      </section>
    </main>
  )
}

export default ProductDetails
