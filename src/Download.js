import React from 'react';
import axiosInstance from './axios'; // Import your axios instance

const Download = ({ dataid, datatype, nodenumber, begin_seconds, end_seconds }) => {
  const handleDownload = async () => {
    try {
      const response = await axiosInstance.get('/api/download/', {
        params: {
          dataid: dataid,
          datatype: datatype,
          nodenumber: nodenumber,
          begin_seconds: begin_seconds,
          end_seconds: end_seconds,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
        responseType: 'blob', // Set the response type to 'blob' to handle binary data
      });

      // Check if the response status is 200
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Create a temporary link to initiate the download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Data</button>
    </div>
  );
};

export default Download;
