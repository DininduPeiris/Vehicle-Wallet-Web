import { useState, type ChangeEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import appIcon from "../assets/icon.jpg";
import {
  useWebsiteLocalization,
  WEBSITE_LANGUAGE_NAMES,
} from "../localization/website";

export default function SiteHeader() {
  const { pathname } = useLocation();
  const { language, setLanguage, t } = useWebsiteLocalization();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = pathname === "/";
  const featuresTarget = isHome ? "#features" : "/#features";

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLanguage = event.currentTarget.value;
    if (nextLanguage === "en" || nextLanguage === "si" || nextLanguage === "ta") {
      setLanguage(nextLanguage);
    }
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label={t("navHome")}>
          <span className="brand-icon-wrapper">
            <img src={appIcon} alt="" className="brand-icon-img" />
          </span>
          <span className="brand-info">
            <span className="brand-name">Vehicle Wallet</span>
            <span className="brand-sub">{t("brandTagline")}</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label={t("navHome")}>
          <Link to="/" className={`nav-link${isHome ? " active" : ""}`}>
            {t("navHome")}
          </Link>
          <Link to={featuresTarget} className="nav-link">
            {t("navFeatures")}
          </Link>
          <Link
            to="/privacy-policy"
            className={`nav-link${!isHome ? " active" : ""}`}
          >
            {t("navPrivacy")}
          </Link>
        </nav>

        <div className="nav-actions">
          <label className="visually-hidden" htmlFor="site-language">
            {t("languageLabel")}
          </label>
          <select
            className="language-select"
            id="site-language"
            value={language}
            onChange={handleLanguageChange}
          >
            {Object.entries(WEBSITE_LANGUAGE_NAMES).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>

          <button
            className="mobile-nav-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          className="mobile-nav-menu"
          id="mobile-nav-menu"
          aria-label={t("navHome")}
        >
          <label className="mobile-language-label" htmlFor="mobile-site-language">
            {t("languageLabel")}
          </label>
          <select
            className="language-select mobile-language-select"
            id="mobile-site-language"
            value={language}
            onChange={handleLanguageChange}
          >
            {Object.entries(WEBSITE_LANGUAGE_NAMES).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            {t("navHome")}
          </Link>
          <Link to={featuresTarget} className="nav-link" onClick={closeMenu}>
            {t("navFeatures")}
          </Link>
          <Link
            to="/privacy-policy"
            className="nav-link"
            onClick={closeMenu}
          >
            {t("navPrivacy")}
          </Link>
        </nav>
      )}
    </header>
  );
}
