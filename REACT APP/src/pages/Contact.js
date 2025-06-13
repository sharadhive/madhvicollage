import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: contact@royalcollege.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123, College Road, Dombivli, Mumbai</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
