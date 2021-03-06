
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GalleryContainer from '../components/gallery';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../components/home';
import Newsletter from '../components/newsletter';
import SuppliesContainer from '../components/supplies';
import 'bootstrap-social/bootstrap-social.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { BRUSHES } from '../Data/suppliesData';
import { PAINTS } from '../Data/suppliesData';
import { CANVAS } from '../Data/suppliesData';
import { EASELS } from '../Data/suppliesData';
import Framing from './framing';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      brushes: BRUSHES,
      paints: PAINTS,
      canvas: CANVAS,
      easels: EASELS
    };
  }
  render() {



    return (
      <div >

        <Header />
        <Switch>

          <Route exact path='/home' component={Home} />

          <Route exact path='/gallery' component={GalleryContainer} />

          <Route exact path='/supplies' render={() =>
            <SuppliesContainer
              brushes={this.state.brushes}
              paints={this.state.paints}
              canvas={this.state.canvas}
              easels={this.state.easels}
            />}
          />

          <Route exact path='/framing' component={Framing} />

          <Redirect to='/home' />

        </Switch>
        <Newsletter />
        <Footer />

      </div>
    );
  }
}
export default Main;