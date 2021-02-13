import React, {Fragment} from 'react';
import './Login.scss';
import LoginForm from '../../Components/LoginPage/LoginForm'

export const Login = () => {
  return (
    <div className={'login'}>
      <h2 className={'h2'}>Welcome to Meditation Sessions</h2>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
