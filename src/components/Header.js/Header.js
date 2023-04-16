import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';
import Logo from '../../images/Logo_transparente.png'
import './Header.css';

function Header() {

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
    <header>
      <div className="logo-container">
        <img className="logo-header" src={Logo} alt="logo.png" />
      </div>
      <forms className="login-container">
        <label>
          e-mail
          <input name="email" type="text" onChange={ (e) => handleChange(e) } />
        </label>
        <label>
          senha
          <input name="password" type="text" onChange={ (e) => handleChange(e) } />
        </label>
        <button>Entrar</button>
      </forms>
    </header>
  )
}

export default Header