import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Delete from './Delete';
import TimeConverter from './Secondtotime';
import axiosInstance from './axios';
import Navbar from './Navbar';


const Searchdetailhumidity = () => {
  const { pk } = useParams();
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/humidity/${pk}`);
        
        if (response.status === 200) {
          setResponseData(response.data); // Save the response data in state
          setError(null); // Reset the error state
        }
      } catch (err) {
        if (err.response && err.response.data) {
          setError(err.response.data); // Set the error state to the response data
        } else {
          setError(err.message);
        }
        setResponseData(null); // Reset the response data state
      }
    };

    fetchData();
  }, [pk]);

  return (
    <div>
      {error && <p>Error: {error.detail}</p>}
      <Navbar/>
      {responseData &&
        <div className='Detail-small'>
          <p className='humid'>Data Humidity: {responseData.humidity}</p>
          <p>Data ID: {responseData.dataid}</p>
          <p>Data Type: {responseData.file_type}</p>
          <p>Node Number: {responseData.node_origination}</p>
          <p>Date Created: {responseData.date_created}</p>
          <p>Date Inputted: {responseData.date_inputted}</p>
          <p><TimeConverter totalSeconds={responseData.time_difference}/></p>
          <Delete pk={pk} type='humidity'/>
        </div>
      }
    </div>
  );
};
  
export default Searchdetailhumidity;
