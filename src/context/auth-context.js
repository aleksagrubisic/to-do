import React, {useContext, useState} from 'react';
import userList from '../content';

const AuthContext = React.createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export function AuthProvider(props) {

  const [users, setUsers] = useState(userList);
  const [loggedUser, setLoggedUser] = useState();

  const login = (user) => {
    const res = users.filter(item => item.email === user.email && item.password === user.password);
    if(res[0]) {
      setLoggedUser(res[0]);
      return true;
    }
  };

  const signup = (user) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random(),
          email: user.email,
          password: user.password,
          todo: []
        }
      ]
    });
  };

  const create = (task) => {
    setLoggedUser((prevState) => {
      return {
        ...prevState,
        todo: [
          ...prevState.todo,
          task
        ]
      }
    });
  };

  const update = (task) => {
    const tempTasks = [...loggedUser.todo];
    tempTasks.splice(tempTasks.findIndex((item) => item.id === task.id), 1, task);
    setLoggedUser((prevState) => {
      return {
        ...prevState,
        todo: tempTasks
      }
    });
  };

  const remove = (id) => {
    setLoggedUser((prevState) => {
      return {
        ...prevState,
        todo: prevState.todo.filter(task => task.id !== id)
      }
    });
  };

  return (
    <AuthContext.Provider value={{
      login,
      signup,
      loggedUser,
      create,
      update,
      remove
    }}>
      {props.children}
    </AuthContext.Provider>
  )
};