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
        <span className="mykael">M</span><span className="mykael">y</span><span className="mykael">k</span><span className="mykael">a</span><span className="mykael">e</span><span className="mykael">l</span> <span className="mykael"></span><span className="mykael">B</span><span className="mykael">a</span><span className="mykael">r</span><span className="mykael">n</span><span className="mykael">e</span><span className="mykael">s</span> <br />
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
        
          <a href="#"><i className='icon-test'><FaGithubSquare /></i></a>
          <a href="#"><i className='icon-test'><FaLinkedin /></i></a>


      </div>

      <ContactPopup popupToggle={popupToggle}/>
    </div>
  );
}

export default App;
