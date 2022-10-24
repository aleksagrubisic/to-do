import React, {useState} from 'react';

import Button from '../UI/Button';
import Input from '../UI/Input';
import Form from '../UI/Form';
import ToDoList from '../ToDo/ToDoList';

import {useAuthContext} from '../../context/auth-context';

const Login = (props) => {

  const {login} = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [label, setLabel] = useState(true);

  const [isLogged, setIsLogged] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
      setLabel(false);
    } else {
      // isLogged ti je ili true ili undefined, mozda bolje da je true ili false
      const isLogged = login({
        email: email,
        password: password
      });
      if(isLogged) {
        setIsLogged(isLogged);
      }
    }
    // Ne pokrivas slucaj kada je popunjeno sa pogresnim podacima
  };

  return (
    <>
        {isLogged ? <ToDoList onLogout={setIsLogged}></ToDoList> : 
          <Form>
            <h1>Login</h1>
            <Input onChange={emailHandler} name={'Email'} type={'email'}></Input>
            <Input onChange={passwordHandler} name={'Password'} type={'password'}></Input>
            <Button onClick={loginHandler} type='submit'>LogIn</Button>
            <Button onClick={props.setAuth} type='button'>SignUp</Button>
            {label ? null : <p>INVALID</p>}
          </Form>
        }
    </>
  )
}

export default Login;