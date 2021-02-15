 

import brush from '../Data/imgs/brush-ultra-wide.jpg'
import art from '../Data/imgs/art1.jpg'
import React, { Component } from 'react';
import { GALLERY } from '../Data/galleryData';
import { Fade } from 'reactstrap';



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
<Fade in>
                <div className="row-content">
                    {/* <div className=" d-flex mx-auto my-auto">"A true artist is not one who is inspired, but one who inspires others." <br/>
                    ―  Salvador Dali</div> */}
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
                        <p>$12.99</p>
                        <p>Dolor sit amet, consectetur adipiscing elit dolore magna aliqua. Pusmod tempor incididunt ut labore et.</p>
                        <button className="btn ml-auto" id="btnnn">Add to Cart</button>
                    </div>
                </div>


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
                <div className="row row-content">
                    <div className="col-sm contentImg">
                        <img className="img-fluid rotate"
                            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Traditional_yin_and_yang_with_dots.png"
                            alt="Ying Yank" />
                    </div>

                    <div className="col-md my-auto text-center text-sm-left" >
                  <h1>About <span style={{ color: "#cf7425"}}>Munk</span></h1>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                
                    </div>
                </div>
                <hr className="hr" />
                </Fade>
            </div>

        );
    }
}

export default Home;

