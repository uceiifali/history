import './App.css';
import About from './Components/About';
import Collection from './Components/Collection';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Latest from './Components/Latest';
import Navbar from './Components/Navbar';
import NavMobile from './Components/NavMobile';
import Recent from './Components/Recent';
import Subscribe from './Components/Subscribe';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <NavMobile />
      <Header />
      <About />
      <Collection />
      <Recent />
      <Subscribe />
      <Latest />
      <Footer />
    </div>
  );
}

export default App;
