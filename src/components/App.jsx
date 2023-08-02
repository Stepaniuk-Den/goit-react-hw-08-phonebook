import React, { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Loader from './Loader/Loader';
import { logoutThunk, refreshUserThunk } from 'redux/loginOperations';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout handleLogout={handleLogout} />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Navigate to="/contacts" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
