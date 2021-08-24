import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './contexts/authContext'
import { authReducer } from './reducers/authReducer'

import AppRouter from './routers/AppRouter'

const init = () =>{
  return JSON.parse( localStorage.getItem('user') ) || { logged: false }
}


const HeroeApp = () => {

  // primero es el reducer que hemos hecho es
  // El valor inicial
  // recordemos que el init nos permite hacer operacion antes de meterlo en nuestor reducer
  const [ auth, dispatch ] = useReducer(authReducer, {} , init)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(auth))
  }, [auth])
  
  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default HeroeApp
