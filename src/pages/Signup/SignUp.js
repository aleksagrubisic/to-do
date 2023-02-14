import React, {useState} from 'react';
import uuid from 'react-uuid';
import {Link, useNavigate} from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Form from '../../components/UI/Form/Form';

import {useAuthContext} from '../../context/auth.context';

const SignUp = () => {

  const {signup} = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [label, setLabel] = useState(null);

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setLabel(null);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setLabel(null);
  };

  const resetValues = () => {
    setEmail('');
    setPassword('');
  };

  const signupHandler = (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
      setLabel('Empty fields.');
      resetValues();
    } else if(!email.includes('@') || !email.includes('.com')) {
      setLabel('Invalid email.');
      resetValues();
    } else {
      signup({
        id: uuid(),
        email: email,
        password: password
      });
      navigate('/');
    }
  };

  return (
    <Form>
      <h1 className='heading'>Signup</h1>
      <Input onChange={emailHandler} name={'Email'} type={'email'} value={email}></Input>
      <Input onChange={passwordHandler} name={'Password'} type={'password'} value={password}></Input>
      <Button onClick={signupHandler} type='submit'>Signup</Button>
      <Link className='link' to='/'>Cancel</Link>
      {label && <p className='invalid'>{label}</p>}
    </Form>
  )
}

export default SignUp