import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import srtlogo from "../../assets/stlogo.png";

import "../../App.css";

export class HeaderNav extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" bg="color" variant="dark">
          <Navbar.Brand className="pl-4">
            <img
              alt=""
              src={srtlogo}
              width="50"
              height="50"
              className="d-inline-block align-top "
            />
            <span className="justify-content-end">Sachin Career Analysis</span>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default HeaderNav;
