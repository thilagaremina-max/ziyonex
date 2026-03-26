import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          Ziyonex
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Our Products
              </span>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/iotproducts">
                    IOT Products
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/webdevelopment">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/softwaresolution">
                    Software Solutions
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mlproducts">
                    AI / ML Products
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/businessappliction">
                    Business Applications
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;