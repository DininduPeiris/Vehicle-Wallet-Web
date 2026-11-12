import { Link } from "react-router-dom";
import { Shield, Lock, Database, CheckCircle2 } from "lucide-react";
import appIcon from "../assets/icon.jpg";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" className="brand">
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
                  <span className="brand-tag">SL</span>
                </div>
                <span className="brand-sub">Offline Digital Vehicle Vault</span>
              </div>
            </Link>

            <p className="footer-bio">
              Everything important about your vehicles, securely accessible in one place.
              Built specifically for Sri Lankan motorists with zero cloud dependencies and hardware-level encryption.
            </p>

            <div>
              <span className="footer-pill-badge">
                <CheckCircle2 size={13} />
                <span>100% Offline • Zero Analytics</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link">
                  Home Overview
                </Link>
              </li>
              <li>
                <a href="#demo" className="footer-link">
                  Interactive Demo
                </a>
              </li>
              <li>
                <a href="#features" className="footer-link">
                  Core Features
                </a>
              </li>
              <li>
                <a href="#vehicles" className="footer-link">
                  Sri Lankan Vehicles
                </a>
              </li>
              <li>
                <a href="#security" className="footer-link">
                  Security & Architecture
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Essentials */}
          <div>
            <h4 className="footer-col-title">Supported Papers</h4>
            <ul className="footer-links-list">
              <li>
                <span className="footer-link">National Fuel Pass QR</span>
              </li>
              <li>
                <span className="footer-link">Provincial Revenue Licences (MTA)</span>
              </li>
              <li>
                <span className="footer-link">Motor Insurance Policies</span>
              </li>
              <li>
                <span className="footer-link">DriveGreen / Laugfs Emission</span>
              </li>
              <li>
                <span className="footer-link">Certificate of Registration (CR)</span>
              </li>
              <li>
                <span className="footer-link">Driving Licences</span>
              </li>
            </ul>
          </div>

          {/* Security & Tech */}
          <div>
            <h4 className="footer-col-title">Local Architecture</h4>
            <p className="footer-bio" style={{ marginBottom: 12 }}>
              Built with Expo SDK, embedded ACID SQLite, and AES-256-GCM authenticated cipher encryption.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 6 }}>
                <Lock size={13} color="var(--emerald-400)" />
                AES-256-GCM Document Vault
              </span>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 6 }}>
                <Database size={13} color="var(--emerald-400)" />
                Local SQLite Database
              </span>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 6 }}>
                <Shield size={13} color="var(--emerald-400)" />
                Biometric & PIN Keystore
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>🇱🇰 Built for Sri Lankan Motorists</span>
            <span>•</span>
            <span>English • සිංහල • தமிழ்</span>
          </div>

          <div>
            <span>© {currentYear} Personal Vehicle Wallet. Private & Offline Utility.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
