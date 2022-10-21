import React from 'react'

import styles from './Form.module.css';

const Form = (props) => {

  const classes = `${styles['form']} ${props.className}`;

  return (
    <form className={classes}>
      {props.children}
    </form>
  )
}

export default Form