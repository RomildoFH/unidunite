import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AppContext from '../context/AppContext';
import AppProvider from '../context/AppProvider';

function ProductDetails(props) {
  const { isLoading, setIsLoading } = useContext(AppContext)
  const location = useLocation();

  console.log(location.pathname)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails
