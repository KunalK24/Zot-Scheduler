import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <NavbarBrand className="navbar_brand" href="/">
            Zot Scheduler
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
