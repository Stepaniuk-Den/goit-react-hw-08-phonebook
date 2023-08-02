import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';

import {
  StyledNavLink,
  StyledNavigation,
  StyledUser,
} from './Navigation.styled';
import { selectUserData } from 'redux/selectors';

const Navigation = ({ handleLogout }) => {
  const userData = useSelector(selectUserData);
  return (
    <div>
      <StyledNavigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        {userData ? (
          <StyledUser>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <UserMenu handleLogout={handleLogout} />
          </StyledUser>
        ) : (
          <>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </>
        )}
      </StyledNavigation>
    </div>
  );
};

export default Navigation;
