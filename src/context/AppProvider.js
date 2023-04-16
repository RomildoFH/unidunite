import React, { useMemo, useState } from 'react'
import AppContext from './AppContext';

function AppProvider( { children } ) {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [productList, setProductList] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filtredList, setFiltredList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    email,
    setEmail,
    productList,
    setProductList,
    searchTerm,
    setSearchTerm,
    filtredList,
    setFiltredList,
    selectedProduct,
    setSelectedProduct
  }), [
    isLoading,
    email,
    productList,
    searchTerm,
    filtredList,
    selectedProduct,
  ])


  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider