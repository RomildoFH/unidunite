import React, { useContext } from 'react'
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
      <h1>Uni Duni Tê Kids</h1>
    </div>
  )
}

export default Home