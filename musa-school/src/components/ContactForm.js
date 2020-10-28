import React from 'react'
import '../styles/ContactForm.css'


const ContactForm = () => (
  

<div id="contact1" className="bg-light"  aria-hidden="false">

<form name="contact" className="contact-form" method="post" netlify="true">
    <p id="contact-me-title" className="text-center">

        CONTACT US
    </p>
    <input type="hidden" name="form-name" value="contact" />

    <div className="form-field">
        <label htmlFor="name">
    <div className="label-content">Name:</div>
    <input type="text" name="name" required />
  </label>
    </div>

    <div className="form-field">
        <label htmlFor="email">
    <div className="label-content">Email:</div>
    <input type="email" name="email" required />
  </label>
    </div>

    <div className="form-field">
        <label htmlFor="message">
    <div className="label-content">Message:</div>
    <textarea className="stretch" name="message" rows="5" required />
  </label>
    </div>

    <button className="btn bg-warning" type="submit">Send</button>

</form>
</div>

)

export default ContactForm
