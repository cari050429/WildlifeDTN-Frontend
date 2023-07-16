import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Delete from './Delete';
import TimeConverter from './Secondtotime';

const Searchdetailpicture = () => {
  const { pk } = useParams();
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/picture/${pk}`);
        
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
      {responseData &&
        <div>
          <img src={responseData.picture} alt='Data ' />
          <p>Data ID: {responseData.dataid}</p>
          <p>Data Type: {responseData.file_type}</p>
          <p>Node Number: {responseData.node_origination}</p>
          <p><TimeConverter totalSeconds={responseData.time_difference}/></p>
          <Delete pk={pk} type='picture'/>
        </div>
      }
    </div>
  );
};
  
export default Searchdetailpicture;
