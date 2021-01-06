

import React, { Component } from 'react';
// import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>

        <nav class="navbar navbar-expand-sm navbar-light nav-justified">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <a className="navbar-brand" href="">
            <img className="img-fluid mobile-logo"
              src="public/imgs/Munk-logo.png" 
              alt="Munk Logo" />
          </a>


          <div className="collapse navbar-collapse">
            <div className="navbar-nav mx-auto w-100">

              <div className="nav-item active my-auto">
                <a className="nav-link" href="">Home <span class="sr-only">(current)</span></a>
              </div>

              <div className="nav-item my-auto">
                <a className="nav-link" href="">Gallery</a>
              </div>
            </div>
          </div>

          <a className="navbar-brand" href="">
            <img className="img-fluid desktop-logo"
              src="https://www.freelogodesign.org/file/app/client/thumb/4fed2a34-40ef-4c50-86c5-9e403c9d1af1_200x200.png?1604544227089"
                 alt="Munk Logo" />
          </a>

          <div className="collapse navbar-collapse">
            <div className="navbar-nav mx-auto w-100">

              <div className="nav-item my-auto">
                <a className="nav-link" href="">Framing</a>
              </div>

              <div className="nav-item my-auto">
                <a className="nav-link" href="">Supplies</a>
              </div>
            </div>
          </div>
        </nav>


      </>
    );
  }
}



export default Header;