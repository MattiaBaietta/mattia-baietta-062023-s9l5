import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListaFilm from './components/ListaFilm';

function App() {
  return (
    <div className="bg-secondary">
      <Navbar/>
      <ListaFilm/>
      <Footer/>
    </div>
  );
}

export default App;
