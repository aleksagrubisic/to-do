import React, {useContext} from 'react';

import {useAuthContext} from './auth.context';

const TodoContext = React.createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvier = (props) => {

  const {loggedUser, setLoggedUser} = useAuthContext(); 

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
    <TodoContext.Provider value={{
      create,
      update,
      remove
    }}>
      {props.children}
    </TodoContext.Provider>
  )
};