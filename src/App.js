import React, { useState } from 'react';
import { BrowserRouter as Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Search from './Search';
import Searchdetail from './Searchdetail';
import Searchdetailhumidity from './Searchdetailhumidity';
import Searchdetailpicture from './Searchdetailpicture';
import Logout from './Logout';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route exact path="/Search" element={isAuthenticated ? <Search /> : <Navigate to="/" />} />
        <Route exact path="/Search/temperature/:pk" element={isAuthenticated ? <Searchdetail /> : <Navigate to="/" />} />
        <Route exact path="/Search/humidity/:pk" element={isAuthenticated ? <Searchdetailhumidity /> : <Navigate to="/" />} />
        <Route exact path="/Search/picture/:pk" element={isAuthenticated ? <Searchdetailpicture /> : <Navigate to="/" />} />
        <Route exact path="/Logout" element={isAuthenticated ? <Logout /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
