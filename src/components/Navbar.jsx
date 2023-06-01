import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="container-fluid nav-container">
    <div className="row justify-content-center">
    <div className="col-md-10">
    
     
    <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
          STATIC WEBSITE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/services">
            Services{" "}
            </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/about">
                About{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </div>
    </div> 
    </>
  );
};

export default Navbar;
