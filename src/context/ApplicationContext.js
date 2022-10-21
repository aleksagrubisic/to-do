import React from 'react';

import {AuthProvider} from './auth-context';

const ApplicationContext = (props) => {
  return (
    <AuthProvider>
      {props.children}
    </AuthProvider>
  )
}

export default ApplicationContext;