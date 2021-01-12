

import brush from '../Data/imgs/brush-ultra-wide.jpg'
import art from '../Data/imgs/art1.jpg'
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { GALLERY } from '../Data/galleryData';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: GALLERY
        };
    }
    render() {
        return (

            <div class="container">

                <div className="row-content">
                    <div className="jumbotron d-flex align-items-center" >
                        <button className="ml-auto btn" >View Gallery</button>
                    </div>
                </div>

                <hr className="hr" />

                <div className="row row-content">
                    <div className="col-sm contentImg">
                        <img className="img-fluid"
                            src={brush}
                            alt="Munk Brush" />
                    </div>

                    <div className="col-sm my-auto text-center text-sm-left" >
                        <h2>New From Munk</h2>
                        <p>Dolor sit amet, consectetur adipiscing elit dolore magna aliqua. Pusmod tempor incididunt ut labore et.</p>
                        <button className="btn ml-auto" id="btnnn">Add to Cart</button>
                    </div>
                </div>

                {/* <div class="row row-content">
                            <div class="col-sm contentImg">
                                <img class="img-fluid suppliesImg expandable"
                                    src={brush.img}
                                    alt={brush.alt} />
                            </div>

                            <div class="col-sm my-auto text-center text-sm-left" >
                                <h2>{brush.name}</h2>
                                <p>{brush.price}</p>
                                <p>{brush.description}</p>
                                <button class="btn ml-auto" id="btnnn">Add to Cart</button>
                            </div>
                        </div> */}

                <hr className="hr" />

                <div className="row row-content">
                    <div className="col-sm contentImg order-sm-last">
                        <img className="img-fluid" id="munkOfTheWeek"
                            src={art}
                            alt="Munk of the Week" />
                    </div>

                    <div className="col-sm my-auto text-center text-sm-right " >
                        <h2>Munk of the Week</h2>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="btn ml-auto" id="btnnn">View in Gallery</button>
                    </div>
                </div>

                <hr className="hr" />

            </div>

        );
    }
}

export default Home;