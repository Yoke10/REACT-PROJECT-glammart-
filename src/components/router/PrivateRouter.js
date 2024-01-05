// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from '../Usercontext';
// import TestAxios from '../Dashboard';
import Dashboard from '../Dashboard';
const PrivateRouter = ({ element, ...props }) => {
  const { user } = useUser();

  if (!user) {
   alert('User not authenticated. Redirecting to /login');
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the provided element or Cart component
  return element || <Dashboard />;
};

export default PrivateRouter;