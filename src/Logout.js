<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axiosInstance from './axios';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
	const navigate=useNavigate();
	useEffect(() => {
		const response = axiosInstance.post('logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token')
            }
		);
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		navigate('/');
	});
	return <div className="logout">Logout</div>;
=======
import React, { useEffect } from 'react';
import axiosInstance from './axios';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
	const navigate=useNavigate();
	useEffect(() => {
		axiosInstance.post('logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token')
            }
		);
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		navigate('/');
	});
	return <div className="logout">Logout</div>;
>>>>>>> fae61a33499a8f659439907b8c58e088ba31bec1
}