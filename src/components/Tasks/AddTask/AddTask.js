import React, {useState} from 'react';
import uuid from 'react-uuid';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import {useTodoContext} from '../../../context/todo.context';

import styles from './AddTask.module.css';

const AddTask = () => {

  const [newTask, setNewTask] = useState('');

  const {create} = useTodoContext();

  const todoHandler = (e) => {
    setNewTask(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    if(newTask !== '') {
      create({
        id: uuid(),
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

export default AddTask;