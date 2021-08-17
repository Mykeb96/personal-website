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

      e.target.reset()
    }


    return (

        <div id="popup">
            <a class="close" onClick={props.popupToggle}><img src={cancel}></img></a>
            <div className="contact-content">
                <i className='email-icon'><HiOutlineMail /></i>
                <h2>Contact via email</h2>
                
                <div className='form-container'>
                <form className='contact-form' onSubmit={sendEmail}>
                    <label /> Subject:
                    <input type="text" name="subject" />
                    <label /> Your Email Address: 
                    <input type="email" name="returnEmail" />
                    <label /> Message: 
                    <textarea id='message-input' name="message"/>
                    {/* <input type="text" name="message" id='message-input'/> */}
                    <button>send</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPopup;