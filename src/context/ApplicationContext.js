import React from 'react';

import {AuthProvider} from './auth.context';
import {TodoProvier} from './todo.context';

const ApplicationContext = (props) => {
  return (
    <AuthProvider>
      <TodoProvier>
        {props.children}
      </TodoProvier>
    </AuthProvider>
  )
}

export default ApplicationContext;