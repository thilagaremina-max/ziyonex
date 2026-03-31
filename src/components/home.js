import React from "react";
import "./home.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import hero1 from "../components/images/1.jpg";
import hero2 from "../components/images/2.jpg";
import hero3 from "../components/images/3.jpg";
import hero4 from "../components/images/4.jpg";
import hero5 from "../components/images/5.jpg";
import hero6 from "../components/images/6.jpg";

function Home() {

  const images = [hero1, hero2];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home">

    <div className="hero">
      <img src={images[current]} alt="Ziyonex" />
      
      {/* Slider Controls */}
      <button className="slider-btn prev-btn" onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}>
        ‹
      </button>
      <button className="slider-btn next-btn" onClick={() => setCurrent((prev) => (prev + 1) % images.length)}>
        ›
      </button>

      <div className="hero-text">
          <h1>Welcome to Ziyonex</h1>

          <p>
            Innovating technology for a smarter future.
            We deliver modern web solutions, AI & Machine Learning
            applications, IoT systems, and professional project guidance.
          </p>

          <button onClick={() => window.location.href = '/registration'}>Registration Now</button>
        </div>

      </div>
      <div className="rigstration">
  <Link to="/registration">
    Register Now: Robotics Classes & Software Development 2026
  </Link>
</div>
   {/* SERVICES SECTION */}
<section className="services">
  <h2>Our Core Services</h2>
  <div className="service-list">
    <div className="services-grid">
        {/* Service 1: Web Development */}
        <div className="service-row">
          <div className="service-content">
            <h3>Web Development</h3>
            <p>Modern responsive websites using React and Node.</p>
          </div>
          <div className="service-image">
            <img src={hero4} alt="Web Development" />
          </div>
        </div>

        {/* Service 2: AI / ML Projects */}
        <div className="service-row">
          <div className="service-content">
            <h3>AI / ML Projects</h3>
            <p>Machine learning applications and intelligent systems.</p>
          </div>
          <div className="service-image">
            <img src={hero5} alt="AI/ML" />
          </div>
        </div>

        {/* Service 3: IOT Solutions */}
        <div className="service-row">
          <div className="service-content">
            <h3>IOT Solutions</h3>
            <p>Smart device integration and automation systems.</p>
          </div>
          <div className="service-image">
            <img src={hero6} alt="IOT" />
          </div>
        </div>
    </div>

    <div className="services-grid">
        {/* Service 4: Project Guidance */}
        <div className="service-row">
          <div className="service-content">
            <h3>Project Guidance</h3>
            <p>Professional support for final year IT projects.</p>
          </div>
          <div className="service-image">
            <img src={hero3} alt="Guidance" />
          </div>
        </div>
    </div>
  </div>
</section>


{/* TECHNOLOGIES */}
<section className="tech">
  <div className="section-header">
    <h2>Technologies We Work With</h2>
    <p>Cutting-edge tools for high-performance solutions</p>
  </div>
  <div className="tech-flex">
    <div className="tech-item">React JS
    & Node Js
    </div>
    <br />
    <div className="tech-item">Python & ML</div>
    <div className="tech-item">MongoDB</div>
    <div className="tech-item">IOT Hardware</div>
  </div>
</section>

{/* PROJECTS & SOLUTIONS */}
<section className="projects">
  <h2>Our Projects & Solutions</h2>
  <div className="projects-grid">
    <div className="project-feature">
      <div className="project-icon">🏫</div>
      <h4>School Management</h4>
      <p>Advanced ERP system for educational institutions.</p>
    </div>
    <div className="project-feature">
      <div className="project-icon">👤</div>
      <h4>Smart Attendance</h4>
      <p>Face recognition based automated tracking.</p>
    </div>
    <div className="project-feature">
      <div className="project-icon">🌐</div>
      <h4>Business Websites</h4>
      <p>Custom tailored digital presence for companies.</p>
    </div>
    <div className="project-feature">
      <div className="project-icon">🛒</div>
      <h4>E-Commerce</h4>
      <p>Scalable online stores with payment gateways.</p>
    </div>
    <div className="project-feature">
      <div className="project-icon">🏠</div>
      <h4>IOT Smart Home</h4>
      <p>Next-gen automation for modern living.</p>
    </div>
    <div className="project-feature">
      <div className="project-icon">📊</div>
      <h4>ML Models</h4>
      <p>Data-driven prediction and analysis tools.</p>
    </div>
  </div>
</section>

{/* WHY CHOOSE SECTION */}
<section className="why-ziyonex">
  <div className="why-container">
    <div className="why-text">
      <h2>Why Choose Ziyonex?</h2>
      <div className="benefit">
        <h5>🚀 Innovation First</h5>
        <p>We don't just build; we innovate with the latest tech stack.</p>
      </div>
      <div className="benefit">
        <h5>👨‍💻 Expert Developers</h5>
        <p>Team with deep expertise in AI, Web, and Hardware.</p>
      </div>
      <div className="benefit">
        <h5>🛠️ Lifetime Support</h5>
        <p>Reliable maintenance and professional guidance.</p>
      </div>
    </div>
  </div>
</section>



      {/* CALL TO ACTION */}

      <section className="cta">

        <h4>Ready to Start Your Project?</h4>

        <p>
          Partner with Ziyonex to transform your ideas
          into powerful digital solutions.
        </p>

        <button onClick={() => window.location.href = '/contact'}>Contact Us</button>

      </section>

      {/* FOOTER SECTION */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p className="address">
              Ziyonex Technologies<br />
              New Bus Stand Opposite,Alangulam<br />
              Tenkasi, Tamil Nadu 627851<br />
              India
            </p>
            <p className="phone">
              Phone: +91 6381121261, 8056569219<br />
              Email: ziyonextech@gmail.com
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/ziyonextec" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="instagram-icon">📷</i>
                @ziyonex
              </a>
            </div>
          </div>
          
          <div className="footer-section">
           
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Ziyonex Technologies. All rights reserved.</p>
        </div>
      </footer>


    </div>
  );
}

export default Home;