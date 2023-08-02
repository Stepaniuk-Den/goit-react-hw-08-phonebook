import SignIn from 'components/SignIn/SignIn';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/loginOperations';
import { selectUserData } from 'redux/selectors';

const Login = () => {
  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) return;
    navigate('/contacts', { replace: true });
  });

  const handleSubmit = evt => {
    evt.preventDefault();

    const children = evt.currentTarget.elements;
    const email = children.userEmail.value;
    const password = children.userPassword.value;

    dispatch(loginThunk({ email, password }));
    evt.currentTarget.reset();
  };

  return (
    <div>
      <SignIn handleSubmit={handleSubmit} />
    </div>
  );
};
export default Login;
