

import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <>

<nav class="navbar navbar-expand-sm navbar-light nav-justified">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="navbar-toggler-icon"></span>
      </button>


      <a class="navbar-brand" href="">
        <img class="img-fluid mobile-logo"
        src="https://www.freelogodesign.org/file/app/client/thumb/4fed2a34-40ef-4c50-86c5-9e403c9d1af1_200x200.png?1604544227089"
        alt="Munk Logo" />
      </a> 


      <div class="collapse navbar-collapse">
        <div class="navbar-nav mx-auto w-100">
    
          <div class="nav-item active my-auto">
            <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
          </div>
    
          <div class="nav-item my-auto">
            <a class="nav-link" href="">Gallery</a>
          </div>
        </div>
      </div>

      <a class="navbar-brand" href="">
        <img class="img-fluid desktop-logo"
        src="https://www.freelogodesign.org/file/app/client/thumb/4fed2a34-40ef-4c50-86c5-9e403c9d1af1_200x200.png?1604544227089"
        alt="Munk Logo" />
      </a> 
      
      <div class="collapse navbar-collapse">
        <div class="navbar-nav mx-auto w-100">

          <div class="nav-item my-auto">
            <a class="nav-link" href="">Framing</a>
          </div>
    
          <div class="nav-item my-auto">
            <a class="nav-link" href="">Supplies</a>
          </div>
        </div>
      </div>
    </nav>


            </>
        );
    }
}



export default Header;