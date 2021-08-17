import './App.css';
import MovingIconBackground from './components/MovingIconBackground';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import ContactPopup from './components/ContactPopup.js';



function App() {

  function popupToggle() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active')
}

  return (
    <div className="App">
      <MovingIconBackground />
      <div className="mykael-div">
        <span className="mykael">Mykael Barnes</span> <br />
        </div>

        <div className="webdev-div">
        <span className="webdev">F</span><span className="webdev">u</span><span className="webdev">l</span><span className="webdev">l</span><span className="webdev">-</span><span className="webdev">S</span><span className="webdev">t</span><span className="webdev"></span><span className="webdev">a</span><span className="webdev">c</span><span className="webdev">k</span><span className="webdev"> </span><span className="webdev">W</span><span className="webdev">e</span><span className="webdev">b</span><span className="webdev"> </span><span className="webdev">D</span><span className="webdev">e</span><span className="webdev">v</span><span className="webdev">e</span><span className="webdev">l</span><span className="webdev">o</span><span className="webdev">p</span><span className="webdev">e</span><span className="webdev">r</span>
        </div>

      <div className="button-container">
          <a href="#" onClick={popupToggle}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact
          </a>
        </div>

      <div className='social-media'>
        
          <a href="https://github.com/Mykeb96"><i className='icon-test'><FaGithubSquare /></i></a>
          <a href="https://www.linkedin.com/in/mykael-barnes/"><i className='icon-test'><FaLinkedin /></i></a>


      </div>

      <ContactPopup popupToggle={popupToggle}/>
    </div>
  );
}

export default App;
