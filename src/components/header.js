
import logo from '../Data/imgs/logo.png'
import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { Fade } from 'react-animation-components';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <>
        <Fade in>
          <Navbar className="nav navbar-light nav-justified" expand="sm" >

            <Fade in>
              <NavbarBrand>
                <img className="mobile-logo"
                  width="100"
                  src={logo}
                  alt="Munk Logo" />
              </NavbarBrand>
            </Fade>

            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>

              <Nav className="navbar-nav mx-auto w-100">

                <NavItem className="my-auto navText" >
                  <NavLink className="nav-link" to="/home" >Home </NavLink>
                </NavItem>

                <NavItem className="my-auto navText" >
                  <NavLink className="nav-link" to="/gallery" >Gallery </NavLink>
                </NavItem>

              </Nav>
              <Fade in>
                <Fade in>
                 <a href="/home">
                   <NavbarBrand>
                    <img className="img-fluid desktop-logo"
                      width="650"
                      src={logo}
                      alt="Munk Logo" />
                  </NavbarBrand>
                  </a> 
                </Fade>
              </Fade>

              <Nav className="navbar-nav mx-auto w-100">

                <NavItem className="my-auto navText" >
                  <NavLink className="nav-link" to="/framing" >Framing </NavLink>
                </NavItem>

                <NavItem className="my-auto navText" >
                  <NavLink className="nav-link" to="/supplies" >Supplies </NavLink>
                </NavItem>

              </Nav>

            </Collapse>
          </Navbar>
        </Fade>

      </>
    );
  }
}



export default Header;