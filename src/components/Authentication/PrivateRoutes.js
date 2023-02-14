import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import {useAuthContext} from '../../context/auth.context';

const PrivateRoutes = () => {

  const {loggedUser} = useAuthContext();

  return (
    <>
      {loggedUser ? <Outlet /> : <Navigate to='/'/>}
    </>
  )
}

export default PrivateRoutes;