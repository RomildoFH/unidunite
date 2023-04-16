import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

function Home() {
  const { isLoading, setIsLoading, email, setEmail } = useContext(AppContext);

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
      <h1>Uni Duni Tê Kids</h1>
      <h4>Nossa diversão é levar estilo e conforto para seu pequeno</h4>
      <label>
        e-mail
        <input name="email" type="text" onChange={ (e) => handleChange(e) } />
      </label>      
      <button>Eu sou um botão</button>
    </div>
  )
}

export default Home