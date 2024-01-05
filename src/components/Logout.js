// Logout.js
import React from 'react';
import { useUser } from './Usercontext';
import { useNavigate } from 'react-router-dom';
function Logout() {
  const { logoutUser } = useUser();
  const nav=useNavigate()
  const handleLogout = () => {
    alert(`Logged Out`);
    logoutUser();
    nav('/')
  };

  return (
    <a onClick={handleLogout}>Logout</a>
  );
}

export default Logout;