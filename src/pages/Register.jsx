import SignUp from 'components/SignUp/SignUp';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/loginOperations';
import { selectUserData } from 'redux/selectors';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (!userData) return;

    navigate('/contacts', { replace: true });
  }, [userData, navigate]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const children = evt.currentTarget.elements;
    const name = children.userName.value;
    const email = children.userEmail.value;
    const password = children.userPassword.value;

    dispatch(registerThunk({ name, email, password }));
    evt.currentTarget.reset();
  };

  return (
    <div>
      <SignUp handleSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
