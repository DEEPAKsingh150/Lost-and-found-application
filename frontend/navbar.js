import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="logo-icon">🔍</span>
          Lost & Found
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="nav-link">Home</Link>
          
          {user ? (
            <>
              <Link to="/add-item" className="nav-link">Add Item</Link>
              <Link to="/my-items" className="nav-link">My Items</Link>
              <div className="user-info">
                <span className="user-name">👤 {user.name}</span>
                <button onClick={onLogout} className="btn btn-logout">Logout</button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;