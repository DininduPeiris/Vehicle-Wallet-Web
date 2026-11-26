import { Link } from "react-router-dom";
import appIcon from "../assets/icon.jpg";
import { useWebsiteLocalization } from "../localization/website";

export default function SiteFooter() {
  const { t } = useWebsiteLocalization();

  return (
    <footer className="site-footer site-footer-simple">
      <div className="container footer-simple-content">
        <div className="footer-simple-brand">
          <Link to="/" className="brand">
            <span className="brand-icon-wrapper">
              <img src={appIcon} alt="" className="brand-icon-img" />
            </span>
            <span className="brand-info">
              <span className="brand-name">Vehicle Wallet</span>
              <span className="brand-sub">{t("footerDesigned")}</span>
            </span>
          </Link>
          <p className="footer-bio">{t("footerSummary")}</p>
        </div>

        <nav className="footer-simple-links" aria-label={t("navHome")}>
          <Link to="/">{t("navHome")}</Link>
          <Link to="/#features">{t("navFeatures")}</Link>
          <Link to="/privacy-policy">{t("navPrivacy")}</Link>
        </nav>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Vehicle Wallet. {t("footerCopyright")}
        </p>
      </div>
    </footer>
  );
}
