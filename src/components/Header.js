import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="container">
          <span className="logo">Techzone</span>

          <ul className="navbar">
            <li>
              <a href="homepage.html">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="signin.html">Sign In</a>
            </li>
            <li>
              <a href="signup.html">Sign Up</a>
            </li>
            <input type="text" placeholder="Search.." />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
