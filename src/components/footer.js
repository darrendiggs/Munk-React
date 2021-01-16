

import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container" >
            <div className="row">
              <div className="col my-auto">
                <a className="btn btn-social-icon btn-dark" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                <a className="btn btn-social-icon btn-dark" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                <a className="btn btn-social-icon btn-dark" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                <a className="btn btn-social-icon btn-dark" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
              </div>
             <div className="col"></div>
              <div className="col text-right contact " >
                <a role="button" className="btn btn-link" href="tel:+12065551234" style={{color: "#cf7425"}}><i className="fa fa-phone" /> 1-206-555-1234</a>      
                <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co" style={{color: "#cf7425"}}><i className="fa fa-envelope-o" /> admin@munk.co</a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;