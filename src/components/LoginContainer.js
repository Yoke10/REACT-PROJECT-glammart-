import React, { useState } from 'react';
import './LoginContainer.css';
import { useNavigate } from 'react-router-dom';

export const LoginContainer = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    // console.log('Logging in with:', username, password);
    Navigate("/ExistingUser");
  };

  return (
    <div className='app'>
    <div className="container">
      <h1>GLAM MART</h1>
      <h3>...Brush up your shine...</h3>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      {/* <p>Not a user? <span onClick={onSwitchToRegister}>Register here</span></p> */}
    </div>
    </div>
  );
};