

import React, { Component } from 'react';
import yinYang from '../Data/imgs/yinYang.png'
import { GALLERY } from '../Data/galleryData';
import { BRUSHES } from '../Data/suppliesData';
import { Fade } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: GALLERY,
      brushes: BRUSHES
    };
  }
  render() {

    const featuredArt = this.state.gallery
      .filter(sub => sub.featured === true)
      .map(art => {
        return (
          <div className="row row-content">
            <div className="col-sm contentImg order-sm-last">
              <img className="img-fluid homeImg"
                src={art.img}
                alt="Munk of the week" />
            </div>

            <div className="col-sm my-auto text-center text-sm-right " >
              <h2 style={{ color: "#cf7425" }}>Munk of the Week</h2>
              <hr className="hr hrSmall" />
              <h3>{art.title}</h3>
              <p>By - {art.artist}</p>
              <p>{art.description}</p>
              <button className="btn ml-auto" id="btnnn" >
                <NavLink
                  style={{ color: "#000000" }}
                  className="nav-link"
                  to="/gallery">
                  Gallery
                </NavLink>
              </button>
            </div>
          </div>
        )
      });

    const featuredSupplies = this.state.brushes
      .filter(supplies => supplies.featured === true)
      .map(supply => {
        return (
          <div className="row row-content">
            <div className="col-sm contentImg">
              <img className="img-fluid homeImg"
                src={supply.img}
                alt={supply.alt} />
            </div>

            <div className="col-sm my-auto text-center text-sm-left" >
              <h2 style={{ color: "#cf7425" }}>New From Munk</h2>
              <hr className="hr hrSmall" />
              <h3>{supply.name}</h3>
              <p>{supply.description}</p>
              <p>{supply.price}</p>
              <button className="btn ml-auto" id="btnnn">
                <NavLink
                  style={{ color: "#000000" }}
                  className="nav-link"
                  to="/supplies">
                  View Supplies
                </NavLink>
              </button>
            </div>
          </div>
        )
      });

    return (

      <div class="container">
        <Fade in>
          <div className="row-content ">
            <p className="text-center mb-5">
              "A true artist is not one who is inspired, but one who inspires others." <br />
                    ―  Salvador Dali</p>
            <div className="jumbotron d-flex align-items-center" >
              <button className="ml-auto btn" >
                <NavLink
                  style={{ color: "#000000" }}
                  className="nav-link"
                  to="/gallery">
                  View Gallery
                </NavLink>
              </button>
            </div>
          </div>

          <hr className="hr" />

          {featuredSupplies}

          <hr className="hr" />

          {featuredArt}

          <hr className="hr" />

          <div className="row row-content">
            <div className="col-sm contentImg">
              <img className="img-fluid rotate"
                src={yinYang}
                alt="Ying Yank" />
            </div>

            <div className="col-md my-auto text-center text-sm-left" >
              <h1>About <span style={{ color: "#cf7425" }}>Munk</span></h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          </div>
          <hr className="hr" />
        </Fade>
      </div>
    );
  }
}

export default Home;

