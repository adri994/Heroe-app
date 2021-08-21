import React from 'react'

//history es para las herramientas de react router dom
const LoginView = ({history}) => {

  const handleClick = () =>{
    
    // para redireccionar a una pantalla
    // history.push('/')

    //esto lo que hace para que login no este en las historia del navegador es decir que si voy para atras no vea el login
    history.replace('/')
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
