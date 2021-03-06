import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/calculator" className="nav-link">Calculator</Link>
        </li>
        <li>
          <Link to="/quote" className="nav-link">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
