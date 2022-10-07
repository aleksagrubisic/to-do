import React, {useState} from 'react'

import Button from '../UI/Button';
import Input from '../UI/Input';
import Form from '../UI/Form';

import {useAuthContext} from '../../context/auth-context';

const SignUp = (props) => {

  const {signup} = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [label, setLabel] = useState(true);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const signupHandler = (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
      setLabel(false);
    } else {
      signup({
        email: email,
        password: password
      });
      props.setAuth();
    }
  };

  return (
    <Form>
      <h1>Signup</h1>
      <Input onChange={emailHandler} name={'Email'} type={'email'}></Input>
      <Input onChange={passwordHandler} name={'Password'} type={'password'}></Input>
      <Button onClick={signupHandler} type='submit'>Signup</Button>
      <Button onClick={props.setAuth} type='button'>Cancel</Button>
      {label ? null : <p>INVALID</p>}
    </Form>
  )
}

export default SignUp