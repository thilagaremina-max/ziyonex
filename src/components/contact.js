import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-content">
        {/* Contact Details Grid */}
        <div className="contact-details">
          <div className="contact-row">
            <h4>📍 Address</h4>
            <p>Alangulam Bus Stand, <br/>Tenkasi</p>
          </div>

          <div className="contact-row">
            <h4>📧 Email</h4>
            <p>ziyonextech@gmail.com</p>
          </div>

          <div className="contact-row">
            <h4>📞 Phone</h4>
            <p>+91 6381121261</p>
          </div>

          <div className="contact-row">
            <h4>📸 Instagram</h4>
            <a href="https://instagram.com/ziyonextech" style={{textDecoration: 'none'}}>
              @ziyonextech
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.434443152648!2d77.5055!3d8.8755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTInMzEuOCJOIDc3wrAzMCcxOS44IkU!5e0!3m2!1sen!2sin!4v1711456789012!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;