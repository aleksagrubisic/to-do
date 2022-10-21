import React, {useState} from 'react'

import Input from '../UI/Input';
import Button from '../UI/Button';

import {useAuthContext} from '../../context/auth-context';

import styles from './AddToDo.module.css';

const AddToDo = () => {

  const [newTask, setNewTask] = useState('');

  const {create} = useAuthContext();

  const todoHandler = (e) => {
    setNewTask(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    if(newTask !== '') {
      create({
        id: Math.random(),
        name: newTask
      });
      setNewTask('');
    }
  };

  return (
    <form className={styles['add-to-do']}>
      <Input onChange={todoHandler} value={newTask} className={styles['add-input']} name={'Task:'}></Input>
      <Button onClick={addHandler} className={styles['add-btn']} type='submit'>Add</Button>
    </form>
  )
}

export default AddToDo;