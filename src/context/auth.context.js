// Imena file-ova treba da su konzistentna. UpperCamelCase koristimo za komponente.
// Context filove mozes da nazoves sa camelCase ili auth.context.js i application.context.js
import React, {useContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import userList from '../content';

const AuthContext = React.createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {

  const [users, setUsers] = useState(userList);
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();

  // Mozes da ubacis login status u localStorage, da bi ostali ulogovani nakon reloada

  useEffect(() => {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser) {
      const user = users.filter(item => item.email === localUser);
      setLoggedUser(user[0]);
      navigate('/todo');
    }
  }, []);

  const login = (user) => {
    const res = users.filter(item => item.email === user.email && item.password === user.password);
    if(res[0]) {
      setLoggedUser(res[0]);
      localStorage.setItem('loggedUser', `${user.email}`);
      return true;
    }
    if(!res[0]) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('loggedUser');
    navigate('/');
  };

  const signup = (user) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        {
          id: user.id,
          email: user.email,
          password: user.password,
          todo: []
        }
      ]
    });
  };

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      signup,
      loggedUser,
      setLoggedUser
    }}>
      {props.children}
    </AuthContext.Provider>
  )
};