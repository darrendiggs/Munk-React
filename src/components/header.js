

import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <>

        <Navbar className="nav navbar-light nav-justified" expand="sm" >

        <NavbarBrand>
            <img className="mobile-logo"
              width="100"
              src="https://www.freelogodesign.org/file/app/client/thumb/4fed2a34-40ef-4c50-86c5-9e403c9d1af1_200x200.png?1604544227089"
              alt="Munk Logo" />
          </NavbarBrand>

          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>

            <Nav className="navbar-nav mx-auto w-100">

              <NavItem className="my-auto" >
                <NavLink className="nav-link" to="/home" >Home </NavLink>
              </NavItem>

              <NavItem className="my-auto" >
                <NavLink className="nav-link" to="/gallery" >Gallery </NavLink>
              </NavItem>
              
            </Nav>
            

          <NavbarBrand>
            <img className="img-fluid desktop-logo"
              width="500"
              src="https://www.freelogodesign.org/file/app/client/thumb/4fed2a34-40ef-4c50-86c5-9e403c9d1af1_200x200.png?1604544227089"
              alt="Munk Logo" />
          </NavbarBrand>


          <Nav className="navbar-nav mx-auto w-100">

            <NavItem className="my-auto" >
              <NavLink className="nav-link" to="/framing" >Framing </NavLink>
            </NavItem>

            <NavItem className="my-auto" >
              <NavLink className="nav-link" to="/supplies" >Supplies </NavLink>
            </NavItem>

          </Nav>

          </Collapse>
        </Navbar>


      </>
    );
  }
}



export default Header;