import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import PropTypes from 'prop-types';
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

Navigation.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Navigation;
