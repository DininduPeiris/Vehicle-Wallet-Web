import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname === "/privacy-policy") {
      document.title = "Privacy Policy — Vehicle Wallet (Sri Lanka)";
    } else {
      document.title = "Vehicle Wallet — Sri Lanka Digital Vehicle & Fuel Pass";
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}
