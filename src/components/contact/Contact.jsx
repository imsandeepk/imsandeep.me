import React from 'react'
import "./Contact.css"
import { useRef as UseRef} from 'react';
import emailjs from "emailjs-com"

const contact = () => {
  const form = UseRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_thr8gxj', 'template_p6jwe86', form.current,"9F8Nq9f3jnBHlp4L7")
      e.target.reset()
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <section id='contact'>
      <h5>Get in Touch (I am lonely!)</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default contact