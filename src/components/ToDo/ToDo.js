// Ovde je malo zbunjujuce sto ti se folder zove ToDo a ToDo.js je samo jedan list item. ToDo.js bih stavio da je glavna komponeta koja ti je sad ToDoList.js a ostale bih ubacio u sub foldere
import React from 'react';

import Button from '../UI/Button';

import {useAuthContext} from '../../context/auth-context';

import styles from './ToDo.module.css';

const ToDo = (props) => {

  const {remove} = useAuthContext();

  const removeHandler = () => {
    remove(props.id);
  };

  return (
    <li className={styles['todo']}>
      {props.children}
      <div>
        <Button onClick={() => props.onClick(props.id)}>Update</Button>
        <Button onClick={removeHandler}>Delete</Button>
      </div>
    </li>
  )
}

export default ToDo