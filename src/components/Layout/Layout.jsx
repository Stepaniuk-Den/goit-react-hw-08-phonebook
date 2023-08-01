import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { StyledHeader, StyledNavLink } from './Layout.styled';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';

const Layout = ({ handleLogout }) => {
  return (
    <>
      <StyledHeader>
        <Navigation handleLogout={handleLogout} />
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
