import React, { useState } from 'react';
import Searchlist from './Searchlist';
import Searchlisthumidity from './Searchlisthumidity';
import Searchlistpicture from './Searchlistpicture';
import axiosInstance from './axios';
import { Link } from 'react-router-dom';

const Search = () => {
    const [dataid, setDataid] = useState('');
    const [datatype, setDatatype] = useState('');
    const [nodenumber, setNodenumber] = useState('');
    const [begin_seconds, setBegin_seconds] = useState('');
    const [end_seconds, setEnd_seconds]=useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(localStorage.getItem('access_token'))
  
      try {
    
        const response = await axiosInstance.get(
          '/',
          {
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
          }
        );
  
        if (response.status === 200) {
          console.log(response.data)
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
  
    const handleInputChange = () => {
      setError(null); // Reset the error state
    };
  
    return (
      <div>
        
        <div className='search-box'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='dataid'
              placeholder='dataid'
              onChange={(e) => { setDataid(e.target.value); handleInputChange(); }}
              value={dataid}
            />
            <select id="datatype" onChange={(e) => { setDatatype(e.target.value); handleInputChange(); }} value={datatype} required>
            <option value="">Select a datatype</option>
            <option value="temperature">Temperature</option>
            <option value="humidity">Humidity</option>
            <option value="picture">Picture</option>
            </select>
            <input
              type='text'
              id='nodenumber'
              placeholder='nodenumber'
              onChange={(e) => { setNodenumber(e.target.value); handleInputChange(); }}
              value={nodenumber}
            />
            <input
              type='text'
              placeholder='beginning date range'
              id='begdaterange'
              onChange={(e) => { setBegin_seconds(e.target.value); handleInputChange(); }}
              value={begin_seconds}
            />
            <input
              type='text'
              placeholder='ending date range'
              id='enddaterange'
              onChange={(e) => { setEnd_seconds(e.target.value); handleInputChange(); }}
              value={end_seconds}
            />
          

            <button type='submit' class="search">Search</button>
          </form>
        </div>
  
        {error && <p>Error: {error.detail}</p>}
  
        {responseData && datatype==='temperature' && <Searchlist results={responseData}/>}
        {responseData && datatype==='humidity' && <Searchlisthumidity results={responseData}/>}
        {responseData && datatype==='picture' && <Searchlistpicture results={responseData}/>}
        <Link to="/Logout">Logout</Link>

      </div>
  
    );
  };
  
  export default Search;
  