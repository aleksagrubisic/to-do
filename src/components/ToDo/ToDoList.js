import React, { useState } from 'react';

import AddToDo from './AddToDo';
import ToDo from './ToDo';
import ToDoUpdate from './ToDoUpdate';
import Button from '../UI/Button';

import {useAuthContext} from '../../context/auth-context';

import styles from './ToDoList.module.css';

const ToDoList = (props) => {

  const [modal, setModal] = useState(false);

  const {loggedUser} = useAuthContext();

  let content = <p className={styles['label']}>No tasks.</p>;

  if(loggedUser.todo.length) {
    content = <ul className={styles['todos']}>
      {loggedUser.todo.map(item => {
        return <ToDo key={item.id} id={item.id} onClick={setModal}>{item.name}</ToDo>
      })}
    </ul>
  }

  return (
    <div className={styles['todo-list']}>
      <span className={styles['todo-user']}>Welcome, {loggedUser.email}</span>
      <Button className={styles['todo-logout']} onClick={() => props.onLogout(false)}>Logout</Button>
      <AddToDo></AddToDo>
      {content}
      {modal && <ToDoUpdate taskID={modal} onClick={setModal}></ToDoUpdate>}
    </div>
  )
}

export default ToDoList