import React, { useState, useEffect } from 'react';
import axiosInstance from './axios';
import Navbar from './Navbar';

const Sensor = () => {
  const [sensorData, setSensorData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await axiosInstance.get('sensor/', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        });
        console.log(response.status);

        if (response.status === 200) {
          setSensorData(response.data); // Save the response data in state
          setError(null); // Reset the error state
          // Print the response data
        }
      } catch (err) {
        if (err.response && err.response.data) {
          setError(err.response.data); // Set the error state to the response data
          console.log(err.response.data); // Print the error data
        } else {
          setError(err.message);
        }
        setSensorData(null); // Reset the sensor data state
      }
    };

    fetchSensorData();
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div>
      <Navbar />
      {error && <p>Error: {error.detail}</p>}
      {sensorData &&
        sensorData.map((sensor) => (
          <div key={sensor.pk}>
            <h2>Sensor Name: {sensor.sensor_name}</h2>
            <h2>Sensor Node: {sensor.node_id}</h2>
          </div>
        ))}
    </div>
  );
};

export default Sensor;
