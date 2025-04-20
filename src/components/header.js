import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

function Header() {
  return (
    <header>
      <nav>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </nav>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/media/trans-logo.png" alt="Rocketry Club Logo" className="logo" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="/about" className="drop-btn">About</Link>
            <ul className="dropdown-menu">
              <li><Link to="/history">History</Link></li>
              <li><Link to="/members">Members</Link></li>
              <li><Link to="/subteams">Subteams</Link></li>
            </ul>
          </li>
          <li><Link to="/donate">Support Us</Link></li>
          <li className="dropdown">
            <Link to="/projects" className="drop-btn">Projects</Link>
            <ul className="dropdown-menu">
              <li><Link to="/genesis">2022</Link></li>
              <li><Link to="/trinity">2023</Link></li>   
              <li><Link to="/waymaker">2024</Link></li>         
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/media" className="drop-btn">Media</Link>
            <ul className="dropdown-menu">
              <li><Link to="/live">Live</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
