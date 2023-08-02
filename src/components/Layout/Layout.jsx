import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader } from './Layout.styled';

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
