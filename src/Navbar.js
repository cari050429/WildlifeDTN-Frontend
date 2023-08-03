import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/Search">Home</Link>
      <Link to="/Logout">Logout</Link>
      </div>
    </nav>
  );
}