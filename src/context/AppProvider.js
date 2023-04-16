import React, { useMemo, useState } from 'react'
import AppContext from './AppContext';

function AppProvider( { children } ) {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    email,
    setEmail,
  }), [
    isLoading,
    email,
  ])


  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider