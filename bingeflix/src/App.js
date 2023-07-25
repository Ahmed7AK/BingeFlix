import './App.css';
import Navbar from "./components/Navbar"
import Slideshow from './components/Slideshow';
import TopPicks from './components/TopPicks';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <TopPicks />
    </div>
  );
}

export default App;
