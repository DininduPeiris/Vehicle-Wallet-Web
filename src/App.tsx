import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      pathname === "/privacy-policy"
        ? "Privacy Policy — Vehicle Wallet"
        : "Vehicle Wallet — Your road life, in one place";
  }, [pathname]);

  return null;
}

function Brand() {
  return (
    <Link aria-label="Vehicle Wallet home" className="brand" to="/">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none">
          <path
            d="M7.5 10.5h17a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 23V13a2.5 2.5 0 0 1 2.5-2.5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M11 10.5V8a5 5 0 0 1 10 0v2.5" stroke="currentColor" strokeWidth="2" />
          <path d="M13 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <span>vehicle<span className="brand-light">wallet</span></span>
    </Link>
  );
}

function SiteHeader() {
  const { pathname } = useLocation();
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Brand />
        <nav aria-label="Main navigation" className="main-nav">
          {pathname === "/" ? (
            <>
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="#privacy">Privacy</a>
            </>
          ) : (
            <Link to="/">Home</Link>
          )}
        </nav>
        <a className="nav-cta" href={pathname === "/" ? "#features" : "/"}>
          Meet your co-pilot <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Brand />
          <p>All the little things that keep you moving, together.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/privacy-policy">Privacy policy</Link>
          <a href="/#features">Features</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Made for the road ahead.</span>
        <span>© {new Date().getFullYear()} Vehicle Wallet</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </>
  );
}
