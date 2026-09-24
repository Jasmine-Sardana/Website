import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for subtle header shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Circular Logo & Brand Info */}
          <Link
            to="/"
            className="navbar-brand"
            onClick={closeMenu}
            aria-label="YSA Chartered Accountants Homepage"
          >
            <div className="logo-circle" aria-hidden="true">
              <span>YSA</span>
            </div>
            <div className="brand-text">
              <span className="brand-name">
                YSA <span className="brand-accent"></span> 
              </span>
              <span className="brand-tagline">Cost Accountants</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "nav-item-link active" : "nav-item-link"
                    }
                    end={link.path === "/"}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink
              to="/book-consultation"
              className={({ isActive }) =>
                isActive ? "btn-consultation active" : "btn-consultation"
              }
            >
              Book Consultation
            </NavLink>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`mobile-toggle ${isMenuOpen ? "is-open" : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <span className="hamburger-box" aria-hidden="true">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-backdrop ${isMenuOpen ? "visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Accessible Mobile Drawer Navigation */}
      <aside
        id="mobile-navigation-drawer"
        className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-drawer-header">
          <div className="navbar-brand">
            <div className="logo-circle" aria-hidden="true">
              <span>YSA</span>
            </div>
            <div className="brand-text">
              <span className="brand-name">YSA</span>
              <span className="brand-tagline">Chartered Accountants</span>
            </div>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className="mobile-nav-body">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.path} className="mobile-nav-item">
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "mobile-nav-link active" : "mobile-nav-link"
                  }
                  end={link.path === "/"}
                >
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          <NavLink
            to="/book-consultation"
            className="btn-consultation"
            onClick={closeMenu}
          >
            Book Consultation
          </NavLink>
          <p className="mobile-drawer-contact">
            Need urgent assistance? Reach out at contact@ysaca.com
          </p>
        </div>
      </aside>
    </>
  );
}

export default Navbar;