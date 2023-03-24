import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import logo from "../images/logo.svg";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Jacaranda Bush Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/" onClick={this.handleToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={this.handleToggle}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/rooms" onClick={this.handleToggle}>
                Our Rooms
              </Link>
            </li>
            <li>
              <div className="drop-down">
                <a href="#">
                  <div className="drop-down-icon">
                    Pages <AiOutlineDown />
                  </div>
                </a>
                <ul className="drop-list">
                  <li className="drop-items">
                    {" "}
                    <Link to="/gallery" onClick={this.handleToggle}>
                      Our Gallery
                    </Link>{" "}
                  </li>
                  <li className="drop-items">
                    {" "}
                    <Link to="/terms&conditions" onClick={this.handleToggle}>
                      Terms & Conditions
                    </Link>{" "}
                  </li>
                  <li className="drop-items">
                    {" "}
                    <Link to="/privacy" onClick={this.handleToggle}>
                      Privacy Policy
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/contact" onClick={this.handleToggle}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
