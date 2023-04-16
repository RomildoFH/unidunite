import React from 'react'
import Logo from '../../images/Logo_transparente.png';
import "./LoadingPage.css";

function LoadingPage() { 

  return (
    <div>
      <div>
        <img className="logo-loading" src={Logo} alt="Carregando" />
      </div>
    </div>
  )
}

export default LoadingPage