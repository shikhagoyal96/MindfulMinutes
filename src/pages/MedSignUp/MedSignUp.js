import React, {Fragment} from 'react';
import './MedSignUp.scss';
import MedSignUpForm from '../../Components/MedSignUpPage/MedSignUpForm'

export const MedSignUp = () => {
  return (
    <div className={'medsignup'}>
      <h2 style={{marginTop: '3%'}} className={'mh4'}>Welcome to Meditation Sessions</h2>
      <MedSignUpForm></MedSignUpForm>
    </div>
  );
};

export default MedSignUp;
