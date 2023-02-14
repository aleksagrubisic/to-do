import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {

  const cName = props.className ? props.className : '';

  const classes = `${styles['btn']} ${cName}`;

  return (
    <button className={classes} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;