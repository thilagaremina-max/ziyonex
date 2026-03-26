import "./webdevelopment.css";

function WebDevelopment() {
  return (
    <div className="webdev-container">

      {/* Hero Section */}
      <div className="webdev-hero">
        <h1>Web Development Services</h1>
        <p>
          Ziyonex builds modern, scalable and high-performance websites 
          and web applications for startups, businesses and enterprises.
        </p>
      </div>

      {/* Services */}
      <div className="webdev-services">
        <h2>Our Web Solutions</h2>

        <div className="webdev-cards">

          <div className="webdev-card">
            <h3>Business Websites</h3>
            <p>Professional company websites with modern UI and responsive design.</p>
          </div>

          <div className="webdev-card">
            <h3>E-Commerce</h3>
            <p>Online stores with payment integration and product management.</p>
          </div>

          <div className="webdev-card">
            <h3>Web Applications</h3>
            <p>Custom web apps using React, Node.js and modern technologies.</p>
          </div>

          <div className="webdev-card">
            <h3>Custom Software</h3>
            <p>Enterprise software systems for business automation.</p>
          </div>

        </div>
      </div>

      {/* Technologies */}
      <div className="webdev-tech">
        <h2>Technologies We Use</h2>

        <div className="tech-list">
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Python</span>
          <span>Django</span>
          <span>AWS</span>
        </div>
      </div>

      {/* CTA */}
      <div className="webdev-cta">
        <h2>Start Your Project With Ziyonex</h2>
        <p>Let's build something amazing together.</p>
        <button>Contact Us</button>
      </div>

    </div>
  );
}

export default WebDevelopment;