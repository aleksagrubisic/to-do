import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Form from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';

import {useAuthContext} from '../../context/auth-context';

import styles from './ToDoUpdate.module.css';

const Modal = (props) => {

  const [taskName, setTaskName] = useState('');

  const {update} = useAuthContext();

  const taskHandler = (e) => {
    setTaskName(e.target.value);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if(taskName !== '') {
      update({
        id: props.taskID,
        name: taskName
      });
      props.onClick(false);
    }
  };

  return (
    <div className={styles['modal']}>
      <div onClick={() => props.onClick(false)} className={styles['backdrop']}></div>
      <Form className={styles['popup']}>
        <h2 className={styles['heading']}>Update</h2>
        <Input onChange={taskHandler} name={'Task'} type={'email'}></Input>
        <Button className={styles['update-btn']} onClick={updateHandler} type='submit'>Update</Button>
        <Button className={styles['update-btn']} onClick={() => props.onClick(false)} type='button'>Cancel</Button>
      </Form>
    </div>
  )
}

const ToDoUpdate = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Modal onClick={props.onClick} taskID={props.taskID}></Modal>, document.getElementById('modal'))}
    </>
  )
}

export default ToDoUpdate;