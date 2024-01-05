// App.js
import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from './Usercontext';
const LoginContainer = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { loginUser } = useUser(); // U
  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    loginUser(username)
    // Add your authentication logic here
    navigate('/ExistingUser');
  };
  

  return (
    <div className="container">
      <h1>GLAM MART</h1>
      <h3>...Brush up your shine...</h3>
      <h2>Login</h2>
      <label>
        Username:
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>
        Not a user? <span onClick={onSwitchToRegister}>Register here</span>
      </p>
    </div>
  );
};

const RegisterContainer = ({ onSwitchToLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  
    // Perform registration logic here
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(newPassword)) {
      alert('Password must have at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.');
      return;
    }
  
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
  
  
    // Continue with the registration logic
    navigate('/RegisteredUser');
  };
  

  return (
    <div className="container">
      <h1>GLAM MART</h1>
      <h3>...Brush up your shine...</h3>
      <h2 class="kpy">Register</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={handleRegister}>Register</button>
      <p>
        Already a user? <span onClick={onSwitchToLogin}>Login here</span>
      </p>
    </div>
  );
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app">
      {isLogin ? (
        <LoginContainer onSwitchToRegister={switchForm} />
      ) : (
        <RegisterContainer onSwitchToLogin={switchForm} />
      )}
    </div>
  );
};

export default Login;
