
import { Component } from 'react';
import { Modal, ModalBody, Fade } from 'reactstrap';
import { GALLERY } from '../Data/galleryData';
import Like from '../components/like';

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
            <img className="img-fluid" src={subs.img} alt="art" onClick={() => this.openModal(subs.id)} />
            <br />

          </div>

          <Modal isOpen={this.state.openedModal === subs.id} toggle={this.closeModal} className="text-center">
            <ModalBody>
              <img className="img-fluid" src={subs.img} alt="art" /> <br />
              <span style={{ fontWeight: "bold", fontSize: "larger" }}>{subs.title} - {subs.artist} </span><br />
              {subs.description} <br />
              <Like />
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
              <p style={{ color: "#cf7425" }}>Want to be featured? Every purchase comes with a link to submit your art!</p>
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