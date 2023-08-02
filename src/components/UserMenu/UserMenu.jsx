import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyledUserMenu } from './UserMenu.styled';
import { selectUserData } from 'redux/selectors';

const UserMenu = ({ handleLogout }) => {
  const userData = useSelector(selectUserData);

  return (
    <StyledUserMenu>
      <p>Hello, {userData.email}!</p>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
    </StyledUserMenu>
  );
};

UserMenu.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default UserMenu;
