import React, { useContext } from 'react'
import BannerPromo from '../components/BannerPromo/BannerPromo';
import ProductList from '../components/ProductList/ProductList';
import AppContext from '../context/AppContext'

function Home() {
  const {
    // isLoading,
    // setIsLoading,
    // email,
    setEmail,
  } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="page-container">
      <BannerPromo />
      <ProductList />
    </div>
  )
}

export default Home