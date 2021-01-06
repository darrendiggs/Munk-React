
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GalleryContainer from '../components/gallery';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../components/home';
import Newsletter from '../components/newsletter';
import SuppliesContainer from '../components/supplies';
import 'bootstrap-social/bootstrap-social.css';



function Main() {
  return (
    <div >

      <Header />

      <Home />
      <Newsletter />
      <GalleryContainer />
      <SuppliesContainer />

      <Footer />
      
    </div>
  );
}

export default Main;