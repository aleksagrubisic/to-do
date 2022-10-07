import React from 'react';

import Button from '../UI/Button';

import styles from './ToDo.module.css';

const ToDo = (props) => {

  

  return (
    <li className={styles['todo']}>
      {props.children}
      <div>
        <Button>Update</Button>
        <Button>Delete</Button>
      </div>
    </li>
  )
}

export default ToDo