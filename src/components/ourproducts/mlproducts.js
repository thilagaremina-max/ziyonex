import "./mlproducts.css";

function MLProducts() {
  return (
    <div className="ml-container">

      {/* Hero */}
      <div className="ml-hero">
        <h1>AI / ML Products</h1>
        <p>
          Ziyonex develops intelligent AI and Machine Learning products
          to automate processes, analyze data and create smart solutions
          for businesses and industries.
        </p>
      </div>

      {/* AI Products */}
      <div className="ml-services">

        <h2>Our AI Solutions</h2>

        <div className="ml-cards">

          <div className="ml-card">
            <h3>Prediction Systems</h3>
            <p>AI models to predict business trends and outcomes.</p>
          </div>

          <div className="ml-card">
            <h3>Image Recognition</h3>
            <p>AI systems for face detection and object recognition.</p>
          </div>

          <div className="ml-card">
            <h3>Chatbots</h3>
            <p>AI powered chatbots for customer support automation.</p>
          </div>

          <div className="ml-card">
            <h3>Data Analysis</h3>
            <p>Machine learning models to analyze large datasets.</p>
          </div>

        </div>

      </div>

      {/* Technologies */}
      <div className="ml-tech">

        <h2>Technologies We Use</h2>

        <div className="tech-list">

          <span>Python</span>
          <span>TensorFlow</span>
          <span>Scikit-learn</span>
          <span>OpenCV</span>
          <span>PyTorch</span>

        </div>

      </div>

      {/* Features */}
      <div className="ml-features">

        <h2>Key Features</h2>

        <ul>
          <li>Smart Automation</li>
          <li>Real-time Data Processing</li>
          <li>High Accuracy Models</li>
          <li>Scalable AI Systems</li>
        </ul>

      </div>

      {/* CTA */}
      <div className="ml-cta">
        <h2>Build AI Solutions With Ziyonex</h2>
        <button>Start AI Project</button>
      </div>

    </div>
  );
}

export default MLProducts;