import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <p>Contact Us</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><strong>Address:</strong> At. Post. Kalher, Opp. Kopar Bus Stop, Tal. Bhiwandi, Dist.Thane 421302</p>
          <p><strong>Email:</strong> smtcapschool@gmail.com</p>
          <p><strong>Phone:</strong>9371091424</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7847462088696!2d73.08458977437658!3d19.221472202137104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795d6e27f3f0b%3A0x28484f5dbb29341d!2sRoyal%20College%20Of%20Science%20%26%20Commerce!5e0!3m2!1sen!2sin!4v1674029304413!5m2!1sen!2sin"
              width="300"
              height="200"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="contact-form">
          <h2>Have Questions?</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea className="form-control" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;