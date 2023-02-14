import React, {useState} from 'react';

import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import {useTodoContext} from '../../../context/todo.context';

import styles from './TaskUpdate.module.css';

// Izbegavaj da stavljas vise komponenti u jedan file
// Mozes da napravis modal kao higher order componentu u kojoj je samo logika za odtaranje i zatvaranje modala kojom mozes da wrapujes bilo koju komponentu kao sto je ToDoUpdate koja u sebi ima logiku za updatovanje ToDo item-a
const TaskUpdate = (props) => {

  const [taskName, setTaskName] = useState('');

  const {update} = useTodoContext();

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
      props.onCloseModal(false);
    }
  };

  return (
    <Form>
      <h2 className={styles['heading']}>Update</h2>
      <Input onChange={taskHandler} name={'Task'} type={'email'}></Input>
      <Button className={styles['update-btn']} onClick={updateHandler} type='submit'>Update</Button>
      <Button className={styles['update-btn']} onClick={() => props.onClick(false)} type='button'>Cancel</Button>
    </Form>
  )
}

export default TaskUpdate;