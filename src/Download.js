import React from 'react';

const Download = ({ data }) => {
  const handleDownload = () => {
    const formattedData = JSON.stringify(data, null, 2); // Indent with 2 spaces

    const blob = new Blob([formattedData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to initiate the download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Data</button>
    </div>
  );
};

export default Download;
