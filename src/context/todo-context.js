import React, {useState, useContext, useEffect} from 'react';

import {useAuthContext} from './auth-context';;

const TodoContext = React.createContext();

export const useToDoContext = () => {
  return useContext(TodoContext);
};

export function ToDoProvider(props) {
  
  const {loggedUser} = useAuthContext();

  const [toDos, setToDos] = useState();

  useEffect(() => {
    setToDos(loggedUser);
  }, [loggedUser]);


  const create = (todo) => {
    setToDos(prevState => {
      return [
        ...prevState,
        todo
      ]
    });
  };

  const remove = () => {
    
  };

  const update = () => {
    
  };

  return (
    <TodoContext.Provider value={{
      create,
      remove,
      update,
      toDos
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}