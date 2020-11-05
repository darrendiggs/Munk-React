

import React, { Component } from 'react';
import { GALLERY } from '../Data/galleryData';





class GalleryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: GALLERY
        };
    }


    render () {
        const galleryItems = this.state.gallery.map(subs => {
            return (
                    <div className="col-sm-6 col-md-4 col-lg-3 my-auto galleryImg text-center">
                        <img className="img-fluid" src={subs.img} alt="art" />
                        {subs.title}
                    </div>
            );
        });
            return (
            <div className="container">
                <div className="row mx-auto my-auto row-content">
                    <div className="col text-center">
                        <h1 className="bolder" >Munk Gallery</h1>
                        <p>Want to be featured? <a href="#">Learn More</a> </p>
                        </div>
                        </div>
                        <hr className="hr" />
                        <div className="row">
                        {galleryItems}
                        </div>
                    
                
            </div>
        );
    }
}


export default GalleryContainer;