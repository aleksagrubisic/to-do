import React, { useMemo, useState } from 'react';

import AddToDo from './AddToDo';
import ToDo from './ToDo';
import ToDoUpdate from './ToDoUpdate';
import Button from '../UI/Button';

import {useAuthContext} from '../../context/auth-context';

import styles from './ToDoList.module.css';

const ToDoList = (props) => {

  const [modal, setModal] = useState(false);

  const {loggedUser} = useAuthContext();

  // Mozes da istazis kako se koriste useMemo i useCallback, jer nam ovde reassign-uje centent prilikom svakog rerendera

  // let content = <p className={styles['label']}>No tasks.</p>;

  // if(loggedUser.todo.length) {
  //   content = <ul className={styles['todos']}>
  //     {loggedUser.todo.map(item => {
  //       return <ToDo key={item.id} id={item.id} onClick={setModal}>{item.name}</ToDo>
  //     })}
  //   </ul>
  // }

  const content = useMemo(
    () =>
      loggedUser.todo.length ? (
        <ul className={styles["todos"]}>
          {loggedUser.todo.map((item) => (
            <ToDo key={item.id} id={item.id} onClick={setModal}>
              {item.name}
            </ToDo>
          ))}
        </ul>
      ) : (
        <p className={styles["label"]}>No tasks.</p>
      ),
    [loggedUser.todo]
  );

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