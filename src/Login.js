import React, { useState } from 'react';
import Button from './button';
import { useNavigate } from "react-router-dom";
import axiosInstance from './axios.js';


const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axiosInstance.post(
        'token/',
        {
          username: username,
          password: password,
        })
        .then((res)=>{
          localStorage.setItem('access_token', res.data.access);
          localStorage.setItem('refresh_token', res.data.refresh);
          axiosInstance.defaults.headers['Authorization']= 'JWT ' +localStorage.getItem('access_token');
          onLoginSuccess();
          navigate('/Search');
        })

    
      
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data); // Set the error state to the response data
      } else {
        setError(err.message);
      }
    }
  };

  const handleInputChange = () => {
    setError(null); // Reset the error state
  };

  return (
    <div>
    <div className="error-popup">
    {error && <p>Error: {error.message}</p>}
    </div>
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
            handleInputChange(); // Call the handler to reset the error state
          }}
          value={username}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            handleInputChange(); // Call the handler to reset the error state
          }}
          value={password}
          required
        />
        <Button />
      </form>
    </div>
    </div>
  );
};

export default Login;
