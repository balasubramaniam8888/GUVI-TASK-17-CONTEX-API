/** @format */

import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border border-black" >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" href="#">
                <a className=" nav-link" href="#">
                  H_[o_m]-E
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Feartures
                </a>
              </li>
              <li className="nav-item" href="#">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
            </ul>
          </div>
          <a className="navbar-brand" href="#">
            C⚡-tronics
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
