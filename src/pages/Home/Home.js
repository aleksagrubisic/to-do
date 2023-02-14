import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Form from '../../components/UI/Form/Form';

import {useAuthContext} from '../../context/auth.context';

const Home = () => {

  const {login} = useAuthContext();

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

  const loginHandler = (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
      setLabel('Empty fields.');
      resetValues();
    } else if(!email.includes('@') || !email.includes('.com')) {
      setLabel('Invalid email.');
      resetValues();
    } else {
      // isLogged ti je ili true ili undefined, mozda bolje da je true ili false
      const isLogged = login({
        email: email,
        password: password
      });
      if(isLogged) {
        navigate('/todo');
      } else {
        setLabel('No user.');
        resetValues();
      }
    }
    // Ne pokrivas slucaj kada je popunjeno sa pogresnim podacima
  };

  return (
    <>
      <Form>
        <h1 className='heading'>Login</h1>
        <Input onChange={emailHandler} name={'Email'} type={'email'} value={email}></Input>
        <Input onChange={passwordHandler} name={'Password'} type={'password'} value={password}></Input>
        <Button onClick={loginHandler} type='submit'>LogIn</Button>
        <Link className='link' to='/signup'>Signup</Link>
        {label && <p className='invalid'>{label}</p>}
      </Form>
    </>
  )
}

export default Home;