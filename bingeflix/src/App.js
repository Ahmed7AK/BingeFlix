import './App.css';
import Navbar from "./components/Navbar"
import Slideshow from './components/Slideshow';
import TopPicks from './components/TopPicks';
import InfoSection from './components/InfoSection';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <TopPicks />
      <InfoSection />
      <div className='footer'>
        <a target='_blank' href='https://rapidapi.com/SAdrian/api/moviesdatabase/' className='footer-text'>Created using the MoviesDatabase API by Adriano Massimo</a>
      </div>
    </div>
  );
}

export default App;
