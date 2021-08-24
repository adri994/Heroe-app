import React from 'react'
import PropTypes from 'prop-types'

import { Redirect, Route } from 'react-router-dom'

export const PrivateRouter = ({
  isAuthenticated,
  component:Component,
  ...rest
}) => {

  // nos da ultima direccion de nuestro las Private Router
  localStorage.setItem('lastPath', rest.location.pathname)
  return (
    <Route  
      {...rest}
      component={ (props)=>(
        (isAuthenticated) 
          ? <Component {...props} />
          :  <Redirect to="/login"/>
      )}
    
    >
      
    </Route>
  )
}

PrivateRouter.prototype ={
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}


