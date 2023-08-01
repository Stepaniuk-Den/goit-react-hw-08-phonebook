import SignUp from 'components/SignUp/SignUp';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/loginOperations';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.userData);

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
      {/* <h1>Register Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input placeholder="Name" name="userName" type="text" required />
        </label>
        <label>
          <p>Email:</p>
          <input
            placeholder="mail@mail.com"
            name="userEmail"
            type="email"
            required
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            placeholder="password"
            name="userPassword"
            type="password"
            minLength={7}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form> */}
    </div>
  );
};

export default Register;
