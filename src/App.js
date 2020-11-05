
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GalleryContainer from './components/gallery';
import Header from './components/header';


function App() {
  return (
    <div className="App body">
      <Header />
      <GalleryContainer />
    </div>
  );
}

export default App;
