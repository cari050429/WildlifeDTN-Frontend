import React from 'react';
import axiosInstance from './axios.js';
import { useNavigate } from 'react-router-dom';

export default function Delete({ pk, type }) {
  const navigate= useNavigate();
  const handleClick = async () => {
    try {
      await axiosInstance.delete(`/delete/${pk}`, {
        params: {
          type: type,
        },
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),

        },
      });
      console.log('Data deleted successfully');
      navigate('/Search');
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <button className="Button" onClick={handleClick}>
      Delete
    </button>
  );
}
