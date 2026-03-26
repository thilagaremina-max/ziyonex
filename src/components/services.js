import "./services.css";

function Services(){
  
  return(
    <div className="services-container">

      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">

        <div className="service-card">
          <h3>Web Development</h3>
          <p>Modern responsive websites and web applications.</p>
        </div>

        <div className="service-card">
          <h3>AI / ML Solutions</h3>
          <p>Smart AI systems for prediction and automation.</p>
        </div>

        <div className="service-card">
          <h3>IOT Solutions</h3>
          <p>Connected smart devices and automation systems.</p>
        </div>

        <div className="service-card">
          <h3>Software Development</h3>
          <p>Custom business software solutions.</p>
        </div>

        <div className="service-card">
          <h3>Mobile Applications</h3>
          <p>Android and cross-platform mobile apps.</p>
        </div>

        <div className="service-card">
          <h3>Cloud Integration</h3>
          <p>Deploy scalable cloud systems and APIs.</p>
        </div>

      </div>

    </div>
  )
}

export default Services;