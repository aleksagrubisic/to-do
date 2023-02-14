import React from 'react'

import styles from './Form.module.css';

const Form = (props) => {

  const cName = props.className ? props.className : '';

  const classes = `${styles['form']} ${cName}`;

  return (
    <form className={classes}>
      {props.children}
    </form>
  )
}

export default Form