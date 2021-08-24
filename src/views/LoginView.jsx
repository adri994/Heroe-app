import React, { useContext } from 'react'


import { AuthContext } from '../contexts/authContext'
import { types } from '../types'

//history es para las herramientas de react router dom
const LoginView = ({history}) => {

  const { dispatch } = useContext(AuthContext)

  const handleClick = () =>{
    
    // para redireccionar a una pantalla
    // history.push('/')

    //esto lo que hace para que login no este en las historia del navegador es decir que si voy para atras no vea el login
    
    const path = localStorage.getItem('lastPath') || '/'
    const payload={
      name:'Adrian'
    }

    dispatch({
      type: types.login,
      payload
    })

    history.replace(path)

  }

  return (
    <div className="container mt-5">
      <h1>LoginViews</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handleClick}
      >
        login
      </button>
    </div>
  )
}

export default LoginView
