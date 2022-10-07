import React, {useState} from 'react'

import Login from './Login';
import SignUp from './SignUp';

const Authentication = () => {

  const [authentication, setAuthentication] = useState(true);

  const authHandler = () => {
    setAuthentication((prevState) => !prevState);
  };

  return (
    authentication ? <Login setAuth={authHandler}/> : <SignUp setAuth={authHandler}/>
  )
}

export default Authentication;