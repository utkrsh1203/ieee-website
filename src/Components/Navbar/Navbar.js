import { MenuItems } from "./MenuItems";
import React, { Component } from "react";
import "./Navbar.css";
import logo from "./ieelogo.png";
import { Button } from "../Button";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className={this.state.clicked ? "NavbarItems down" : "NavbarItems"}>
        <img
          style={{ width: "50px" }}
          className='navbar-logo'
          src={logo}
          alt='logo'
        />
        <div className='menu-icon' onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Contact</Button>
      </nav>
    );
  }
}

export default Navbar;
