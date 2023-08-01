import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const UserMenu = ({ handleLogout }) => {
  const userData = useSelector(state => state.user.userData);

  return (
    <Stack spacing={2} direction="row">
      <p>Hello, {userData.email}!</p>
      <Button variant="contained" onClick={handleLogout}>
        Log Out
      </Button>
    </Stack>
  );
};

export default UserMenu;
