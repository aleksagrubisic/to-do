import React from 'react';

import {AuthProvider} from './auth-context';
import {ToDoProvider} from './todo-context';

const ApplicationContext = (props) => {
  return (
    <AuthProvider>
      <ToDoProvider>
        {props.children}
      </ToDoProvider>
    </AuthProvider>
  )
}

export default ApplicationContext;