
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



function Main() {
  return (
    <div >

      <Header />
      <Switch>

        <Route exact path='/home' component={Home} />

        <Route exact path='/gallery' component={GalleryContainer} />

        <Route exact path='/supplies' component={SuppliesContainer} />

        <Redirect to='/home' />

      </Switch>
      <Newsletter />
      <Footer />
      
    </div>
  );
}

export default Main;