import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import appIcon from "../assets/icon.jpg";

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        {/* Brand Link */}
        <Link to="/" className="brand" aria-label="Vehicle Wallet Home">
          <div className="brand-icon-wrapper">
            <img
              src={appIcon}
              alt="Vehicle Wallet App Icon"
              className="brand-icon-img"
            />
          </div>
          <div className="brand-info">
            <div className="brand-name">
              Vehicle Wallet
              <span className="brand-tag">Offline</span>
            </div>
            <span className="brand-sub">Sri Lanka Digital Vehicle & Fuel Pass</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          {isHome ? (
            <>
              <a href="#demo" className="nav-link">
                Interactive Demo
              </a>
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#vehicles" className="nav-link">
                Vehicle Types
              </a>
              <a href="#security" className="nav-link">
                Architecture
              </a>
              <Link to="/privacy-policy" className="nav-link">
                Privacy Policy
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/#features" className="nav-link">
                Features
              </Link>
              <Link to="/privacy-policy" className="nav-link active">
                Privacy Policy
              </Link>
            </>
          )}
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <Link
            to="/privacy-policy"
            className="btn-secondary"
            title="Privacy First Architecture"
          >
            <Shield size={16} />
            <span>Privacy First</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-menu">
          <Link
            to="/"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#demo"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Interactive Demo
          </a>
          <a
            href="#features"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#vehicles"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Vehicle Types
          </a>
          <a
            href="#security"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Security & SQLite
          </a>
          <Link
            to="/privacy-policy"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Privacy Policy
          </Link>
        </div>
      )}
    </header>
  );
}
