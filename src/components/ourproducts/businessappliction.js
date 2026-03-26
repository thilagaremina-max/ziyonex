import "./businessappliction.css";

function BusinessApplications() {
  return (
    <div className="business-container">

      {/* Hero */}
      <div className="business-hero">
        <h1>Business Applications</h1>
        <p>
          Ziyonex builds powerful business applications to automate processes,
          manage operations and improve productivity for modern businesses.
        </p>
      </div>

      {/* Business Solutions */}
      <div className="business-services">
        <h2>Our Business Solutions</h2>

        <div className="business-cards">

          <div className="business-card">
            <h3>CRM Systems</h3>
            <p>Manage customer relationships, leads and sales efficiently.</p>
          </div>

          <div className="business-card">
            <h3>ERP Systems</h3>
            <p>Complete enterprise resource planning software for companies.</p>
          </div>

          <div className="business-card">
            <h3>Inventory Management</h3>
            <p>Track stock, products and supply chain operations.</p>
          </div>

          <div className="business-card">
            <h3>Billing / POS</h3>
            <p>Smart billing systems for shops and businesses.</p>
          </div>

          <div className="business-card">
            <h3>HR Management</h3>
            <p>Manage employees, payroll and attendance systems.</p>
          </div>

          <div className="business-card">
            <h3>Customer Support Systems</h3>
            <p>Helpdesk and support ticket management systems.</p>
          </div>

        </div>
      </div>

      {/* Features */}
      <div className="business-features">

        <h2>Key Features</h2>

        <ul>
          <li>Cloud Based Applications</li>
          <li>Secure Data Management</li>
          <li>Analytics Dashboard</li>
          <li>Automation Tools</li>
          <li>Mobile Friendly Systems</li>
        </ul>

      </div>

      {/* Industries */}
      <div className="business-industries">

        <h2>Industries We Serve</h2>

        <div className="industry-list">
          <span>Retail</span>
          <span>Healthcare</span>
          <span>Education</span>
          <span>Finance</span>
          <span>Manufacturing</span>
          <span>Startups</span>
        </div>

      </div>

      {/* CTA */}
      <div className="business-cta">
        <h2>Start Your Business Application</h2>
        <p>Transform your business with Ziyonex digital solutions.</p>
        <button>Contact Us</button>
      </div>

    </div>
  );
}

export default BusinessApplications;