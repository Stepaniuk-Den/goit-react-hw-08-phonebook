import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = ({ handleLogout }) => {
  const userData = useSelector(state => state.user.userData);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {userData ? (
          <>
            <Link to="/contacts">Contacts</Link>
            <div>
              <UserMenu handleLogout={handleLogout} />
            </div>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
