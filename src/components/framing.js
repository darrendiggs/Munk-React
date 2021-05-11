

import { Component } from 'react';
import FrameCarousel from '../components/framingCarousel';
import { Col, Row, Button, Form, FormGroup, FormText, Input, Fade } from 'reactstrap';

class Framing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      width: '',
      height: '',
      unit: '',
      email: '',
      material: '',
      style: '',
      file: '',
      text: ''

    };
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    alert('Form Values: ' + JSON.stringify(this.state));
    this.resetForm();
  }

  resetForm() {
    this.setState({
      fullName: '',
      width: '',
      height: '',
      unit: '',
      email: '',
      material: '',
      style: '',
      file: '',
      text: ''
    });
  }

  render() {
    return (
      <div className="container">
        <Fade in>

          <div className="row mx-auto my-auto row-content">
            <div className="col text-center">
              <h1 className="bolder" >Munk Custom Framing</h1>
              <p style={{ color: "#cf7425" }}>With over 20 years of frame builing expirence, you can trust excellence delivered everytime.</p>
            </div>
          </div>

          <hr className="hr" />

          <div className="row-content" style={{ maxWidth: "55%", margin: "auto" }} >
            <FrameCarousel />
          </div>

          <hr className="hr " />

          <div className="row mx-auto my-auto row-content">
            <div className="col text-center">
              <h2 className="bolder" >Describe your Project</h2>
              <p>And we'll get started!</p>
            </div>
          </div>

          <Form>

            <FormGroup>
              <Input
                type="text"
                name="fullName"
                id="clientName"
                placeholder="Full Name"
                className="form-control-lg"
                value={this.state.fullName}
                onChange={this.handleInputChange}
              />
            </FormGroup>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Input
                    type="number"
                    name="width"
                    value={this.state.width}
                    id="frameWidth"
                    placeholder="Width"
                    className="form-control-lg"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Input
                    type="number"
                    name="height"
                    value={this.state.height}
                    id="frameHeight"
                    placeholder="Height"
                    className="form-control-lg"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Input
                    type="select"
                    name="unit"
                    value={this.state.unit}
                    id="unitSelector"
                    className="form-control-lg"
                    onChange={this.handleInputChange}>
                    <option>IN</option>
                    <option>CM</option>
                    <option>FT</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                id="Email"
                placeholder="Email"
                className="form-control-lg"
                onChange={this.handleInputChange}
              />
            </FormGroup>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Input
                    type="select"
                    name="material"
                    value={this.state.material}
                    id="materialSelector"
                    placeholder="Material"
                    className="form-control-lg"
                    onChange={this.handleInputChange}>
                    <option selected>Material</option>
                    <option>Wood</option>
                    <option>Metal</option>
                    <option>Acrylic</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Input
                    type="select"
                    name="style"
                    value={this.state.style}
                    id="styleSelector"
                    placeholder="Style"
                    className="form-control-lg"
                    onChange={this.handleInputChange}>
                    <option selected>Style</option>
                    <option>Simple</option>
                    <option>Rustic</option>
                    <option>Modern</option>
                    <option>Minimal</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Input
                type="file"
                name="file"
                value={this.state.file}
                id="imageFile"
                className="form-control-lg"
                onChange={this.handleInputChange}
              />
              <FormText color="muted">
                Not sure what type of frame you'd like? Send us a picture and we'll help you decide.
            </FormText>
            </FormGroup>

            <FormGroup>
              <Input
                type="textarea"
                name="text"
                value={this.state.text}
                id="notesText"
                placeholder="Additional Notes"
                rows="4"
                className="form-control-lg"
                onChange={this.handleInputChange} />
            </FormGroup>

            <Button
              type="submit"
              className="form-control form-control-lg"
              onClick={this.handleSubmit}>
              <span style={{ color: 'black' }}>
                Submit
              </span>
          </Button>

            <FormText color="muted" align="center">
              Our framing experts will get back to you within 48 hours with more details!
          </FormText>
          </Form>
        </Fade>
      </div>
    );
  }
}

export default Framing;