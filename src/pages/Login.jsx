import SignIn from 'components/SignIn/SignIn';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/loginOperations';

const Login = () => {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.user.userData);
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
      {/* <h1>Login into your account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email: </p>
          <input
            placeholder="mail@mail.com"
            name="userEmail"
            type="email"
            required
          />
        </label>
        <label>
          <p>Password: </p>
          <input
            placeholder="password"
            name="userPassword"
            type="password"
            minLength={7}
            required
          />
        </label>
        <button type="submit">Sign In</button>
      </form> */}
    </div>
  );
};
export default Login;
