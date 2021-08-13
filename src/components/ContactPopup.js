import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import cancel from '../assets/cancel.png';


function ContactPopup (props) {
    init("user_IFMYdb4fRIMuQlc1iBbG7");

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_xpib789', 'template_exeqr8k', e.target, 'user_IFMYdb4fRIMuQlc1iBbG7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }


    return (

        <div id="popup">
            <div className="content">
                <a class="close" onClick={props.popupToggle}><img src={cancel}></img></a>
                <i className='email-icon'><HiOutlineMail /></i>
                <h2>Contact via email</h2>
                
                <form onSubmit={sendEmail}>
                    <label /> Subject:
                    <input type="text" name="subject" />
                    <label /> Message: 
                    <input type="text" name="message" />
                    <label /> Your Email Address: 
                    <input type="email" name="returnEmail" />
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPopup;