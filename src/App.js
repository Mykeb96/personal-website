import './App.css';
import MovingIconBackground from './components/MovingIconBackground';

import ContactPopup from './components/ContactPopup.js';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';


function App() {



  return (
    <div className="App">
      <MovingIconBackground />
      <NavBar />
      <LandingPage />
      <ContactPopup />
    </div>
  );
}

export default App;
