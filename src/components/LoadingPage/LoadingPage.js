import React, { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext';
import Logo from '../../images/Logo_transparente.png';
import "./LoadingPage.css";
import dataBase from '../../data/initialDataBase'

function LoadingPage() {

  const { setProductList, setIsLoading, setFiltredList } = useContext(AppContext);

    useEffect(() => {
    const data = () => {
      const fetch = dataBase;
      return fetch;
    }
    setProductList(data());

    setFiltredList(data())

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  return (
    <div>
      <div>
        <img className="logo-loading" src={Logo} alt="Carregando" />
      </div>
    </div>
  )
}

export default LoadingPage