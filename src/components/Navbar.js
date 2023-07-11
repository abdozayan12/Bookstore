import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <div className="left-wrapper">
          <div className="nav-title">Bookstore CMS</div>
          <div className="link-container">
            <NavLink to="/">BOOKS</NavLink>
            <NavLink to="/categories">CATEGORIES</NavLink>
          </div>
        </div>
        <img alt="profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png" width="45px" />
      </div>
    </nav>
  );
}

export default Navbar;
