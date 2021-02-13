import React, { Fragment, useContext, useEffect } from 'react';
import { UserContext } from '../../providers/UserProvider';
import './MedSignedUp.scss';

export const MedSignedUp = () => {
  const userContext = useContext(UserContext);
  const { name } = userContext;
  return (
    <div className={'medsignup'}>
      <h2 className={'h2'}>Thank you for Signing Up {name}!</h2>
    </div>
  );
};

export default MedSignedUp;
