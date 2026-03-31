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
            <p> New Bus Stand Opposite,Alangulam <br/>Tenkasi</p>
          </div>

          <div className="contact-row">
            <h4>📧 Email</h4>
            <p>ziyonextech@gmail.com</p>
          </div>

          <div className="contact-row">
            <h4>📞 Phone</h4>
            <p>+91 6381121261,8056569219</p>

          </div>

          <div className="contact-row">
            <h4>📸 Instagram</h4>
            <a href="https://instagram.com/ziyonextec" style={{textDecoration: 'none'}}>
              @ziyonextech
            </a>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default Contact;