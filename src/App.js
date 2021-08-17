import './App.css';
import MovingIconBackground from './components/MovingIconBackground';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import ContactPopup from './components/ContactPopup.js';
import LandingPage from './components/LandingPage';



function App() {



  return (
    <div className="App">
      <MovingIconBackground />
      <LandingPage />
      <ContactPopup />
    </div>
  );
}

export default App;
