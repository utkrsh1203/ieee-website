import * as React from "react";
import logo from "../images/ieelogo.png";

function Navbar() {
  let url = "#";
  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-custom'>
      <div className='container-fluid'>
        <a href={url} className='navbar-brand'>
          <img style={{ width: "50px" }} src={logo} alt='logo' />
        </a>
        <button
          type='button'
          className='navbar-toggler'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <div className='navbar-nav'>
            <a href={url} className='nav-item nav-link active'>
              ABOUT
            </a>
            <a href={url} className='nav-item nav-link active'>
              EVENTS
            </a>
            <a href={url} className='nav-item nav-link active'>
              GALLERY
            </a>
            <a href={url} className='nav-item nav-link active'>
              AWARDS
            </a>
          </div>
          <div className='navbar-nav ms-auto'>
            <a href={url} className='nav-item nav-link'>
              <button type='button' className='btn btn-outline-light'>
                <strong>CONTACT</strong>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
