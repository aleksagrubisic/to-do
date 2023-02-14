import React, { useMemo, useState } from 'react';

import AddTask from '../../components/Tasks/AddTask/AddTask';
import Task from '../../components/Tasks/Task/Task';
import TaskUpdate from '../../components/Tasks/TaskUpdate/TaskUpdate';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

import {useAuthContext} from '../../context/auth.context';

import styles from './ToDo.module.css';

const ToDo = () => {

  const [modal, setModal] = useState(false);

  const {loggedUser, logout} = useAuthContext();

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
            <Task key={item.id} id={item.id} onUpdateClick={setModal}>
              {item.name}
            </Task>
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
      <Button className={styles['todo-logout']} onClick={() => {logout()}}>Logout</Button>
      <AddTask></AddTask>
      {content}
      {modal && <Modal onCloseModal={setModal}>
        <TaskUpdate taskID={modal} onCloseModal={setModal} />
      </Modal>}
    </div>
  )
}

export default ToDo