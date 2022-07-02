import * as React from "react";
import logo from "../images/ieelogo.png";

import "./components.css";

function Navbar() {
  let url = "#";
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid d-flex'>
        <img
          style={{ width: "50px" }}
          className='mx-5 my-3'
          src={logo}
          alt='logo'
        />
        <button
          className='navbar-toggler '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 wrapper'>
            <li className='nav-item'>
              <a className='nav-link font hover-text fs-5 px-4' href={url}>
                Events
              </a>
            </li>
            <li className='nav-item '>
              <a className='nav-link font hover-text fs-5 px-4' href={url}>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link font hover-text fs-5 px-4' href={url}>
                Gallary
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link font hover-text fs-5 px-4' href={url}>
                Awards
              </a>
            </li>
            <button className='btn font'>Contact</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
