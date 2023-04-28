import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Logo from '../../images/Logo_transparente.png'
import './Header.css';

function Header() {

  const {
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
        <Link to={ `/unidunite` }>
          <img className="logo-header" src="https://thumbs2.imgbox.com/67/9f/w6BIjcPg_t.jpeg" alt="logo.png" />        
        </Link>
      </div>
      <form className="login-container">
        <label>
          e-mail
          <input name="email" type="text" onChange={ (e) => handleChange(e) } />
        </label>
        <label>
          senha
          <input name="password" type="text" onChange={ (e) => handleChange(e) } />
        </label>
        <button>Entrar</button>
      </form>
    </header>
  )
}

export default Header