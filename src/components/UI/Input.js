import React from 'react';

import styles from './Input.module.css'

const Input = (props) => {

  const classes = `${styles['input']} ${props.className}`;  // Ovde ti vraca undefined za props.className zato sto koristis rezervisan naziv, mozes da ga nazoves npr. cName

  return (
    <div>
      <label className={styles['label']} htmlFor={props.name}>{props.name}</label>
      <input onChange={props.onChange} value={props.value} className={classes} type={props.type} name={props.name}></input>
    </div>
  )
}

export default Input;