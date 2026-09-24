import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-circle">
                <span>YSA</span>
              </div>

              <div className="footer-brand-text">
                <span className="footer-brand-name">
                  YSA <span className="brand-accent">&bull;</span> CA
                </span>
                <span className="footer-tagline">
                  Chartered Accountants
                </span>
              </div>
            </Link>

            <p>
              Professional accounting, taxation, audit and financial
              advisory services you can rely on.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>

            <ul>
              <li>Tax Services</li>
              <li>GST Services</li>
              <li>Audit & Assurance</li>
              <li>Financial Advisory</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Contact Us</h3>

            <ul className="footer-contact">
              <li>📞 +91 XXXXX XXXXX</li>
              <li>✉ contact@ysaca.com</li>
              <li>📍 Greater Noida, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} YSA Chartered Accountants. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;