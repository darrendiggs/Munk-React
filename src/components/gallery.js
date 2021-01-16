
import { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Fade } from 'reactstrap';
import { GALLERY } from '../Data/galleryData';

class GalleryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: GALLERY,
            openedModal: null
        };
    }

    openModal = id => {
        this.setState({ openedModal: id });
      };
      closeModal = () => {
        this.setState({ openedModal: null });
      };
  

    render() {

        const galleryItems = this.state.gallery.map(subs => {
            return (
                <>
                    <div className="col-sm-6 col-md-4 col-lg-3 my-auto galleryImg text-center" >
                        <img className="img-fluid" src={subs.img} alt="art" onClick={() => this.openModal(subs.id)}/> <br/>
                        {subs.title}
                    </div>

                    <Modal isOpen={this.state.openedModal === subs.id} toggle={this.closeModal} className="text-center">
                        <ModalHeader toggle={this.toggleModal}>{subs.title}</ModalHeader>
                        <ModalBody>
                            <img className="img-fluid" src={subs.img} alt="art" /> <br/>
                            By - {subs.artist} <br/>
                            {subs.description}
                        </ModalBody>
                    </Modal>
              </>
            );
        });


        return (
            <div className="container">
                <Fade in>
                <div className="row mx-auto my-auto row-content">
                    <div className="col text-center">
                        <h1 className="bolder" >Munk Gallery</h1>
                        <p>Want to be featured? <a href="#" style={{ color: "#cf7425" }}>Learn More</a></p>
                    </div>
                </div>
                
                <hr className="hr" />
                <div className="row">
                    {galleryItems}
                </div>
                </Fade>
            </div>
        );
    }
}


export default GalleryContainer;