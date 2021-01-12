
import logo from '../Data/imgs/logo.png'
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
              src={logo}
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
            

          <NavbarBrand to="/home">
            <img className="img-fluid desktop-logo"
              width="500"
              src={logo}
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