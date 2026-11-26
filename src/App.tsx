import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { useWebsiteLocalization, WebsiteLocalizationProvider } from "./localization/website";

function AppContent() {
  const { pathname } = useLocation();
  const { language, t } = useWebsiteLocalization();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title =
      pathname === "/privacy-policy" ? t("privacyPageTitle") : t("homeTitle");
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (description) description.content = t("metaDescription");
  }, [language, pathname, t]);

  return (
    <div className="app-layout">
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

export default function App() {
  return (
    <WebsiteLocalizationProvider>
      <AppContent />
    </WebsiteLocalizationProvider>
  );
}
