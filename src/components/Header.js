// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className='main-container'>
      <header className="header">
        <div className="header-left">
          <h1>Hepta</h1>
        </div>
        <div className="header-right">
          <button className="menu-button" onClick={toggleDrawer}>
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </header>
      <center>
      <div className='container'>
        <h2 className='main'>
            Travels & Tours
        </h2>
        <h2 className='head'>
            AFree Template By <Link>ColourLib</Link> Down Load and Share!
        </h2>
        <button className='btn'> 
            Visit ColourLib
        </button>
      </div>
      </center>
      {drawerOpen && (
        <div className="drawer">
          <div className="drawer-header">
            <button className="close-button" onClick={toggleDrawer}>
              &times; {/* Cross icon */}
            </button>
          </div>
          <ul>
            <li>
              <Link to="/" onClick={toggleDrawer}>Home</Link>
            </li>
            <li>
              <Link to="/hotels" onClick={toggleDrawer}>Hotels</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleDrawer}>About</Link>
            </li>
            <li>
              <Link to="/gallery" onClick={toggleDrawer}>Gallery</Link>
            </li>
            <li>
              <Link to="/news" onClick={toggleDrawer}>News</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleDrawer}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default Header;
