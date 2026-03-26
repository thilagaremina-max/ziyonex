import "./softwaresolution.css";

function SoftwareSolution() {
  return (
    <div className="software-container">

      {/* Hero */}
      <div className="software-hero">
        <h1>Software Solutions</h1>
        <p>
          Ziyonex provides custom software development services for businesses,
          startups and enterprises. We build scalable and secure software systems.
        </p>
      </div>

      {/* Services */}
      <div className="software-services">

        <h2>Our Software Services</h2>

        <div className="software-cards">

          <div className="software-card">
            <h3>Business Software</h3>
            <p>Custom software for managing business operations.</p>
          </div>

          <div className="software-card">
            <h3>Inventory System</h3>
            <p>Track products, stock and orders easily.</p>
          </div>

          <div className="software-card">
            <h3>Billing / POS Software</h3>
            <p>Smart billing and invoice management systems.</p>
          </div>

          <div className="software-card">
            <h3>School Management</h3>
            <p>Complete student and staff management software.</p>
          </div>

        </div>

      </div>

      {/* Features */}
      <div className="software-features">

        <h2>Software Features</h2>

        <ul>
          <li>Secure Systems</li>
          <li>User Friendly Dashboard</li>
          <li>Cloud Based Software</li>
          <li>Fast Performance</li>
          <li>Custom Modules</li>
        </ul>

      </div>

      {/* Process */}
      <div className="software-process">

        <h2>Development Process</h2>

        <div className="process-list">

          <div>Requirement Analysis</div>
          <div>System Design</div>
          <div>Development</div>
          <div>Testing</div>
          <div>Deployment</div>

        </div>

      </div>

      {/* CTA */}
      <div className="software-cta">
        <h2>Build Your Custom Software</h2>
        <p>Start your software project with Ziyonex today.</p>
        <button>Contact Us</button>
      </div>

    </div>
  );
}

export default SoftwareSolution;