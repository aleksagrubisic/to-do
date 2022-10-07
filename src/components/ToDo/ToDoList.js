import React from 'react';

import AddToDo from './AddToDo';
import ToDo from './ToDo';
import Button from '../UI/Button';

import {useToDoContext} from '../../context/todo-context';

import styles from './ToDoList.module.css';

const ToDoList = (props) => {

  const {toDos} = useToDoContext();

  const logoutHandler = () => {
    props.onLogout(false);
  }

  let content = <p className={styles['label']}>No tasks.</p>;

  console.log(toDos);

  if(toDos.length) {
    content = <ul className={styles['todos']}>
      {toDos.map(item => {
        return <ToDo key={item.id}>{item.name}</ToDo>
      })}
    </ul>
  }

  return (
    <div className={styles['todo-list']}>
      {/*<span className={styles['todo-user']}>Welcome, {props.user.email}</span>*/}
      <Button className={styles['todo-logout']} onClick={logoutHandler}>Logout</Button>
      <AddToDo></AddToDo>
      {content}
    </div>
  )
}

export default ToDoList