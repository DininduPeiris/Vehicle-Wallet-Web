import { Bell, Car, FileText, QrCode, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useWebsiteLocalization } from "../localization/website";

export default function HomePage() {
  const { t } = useWebsiteLocalization();

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="container home-hero-content">
          <p className="home-eyebrow">{t("heroEyebrow")}</p>
          <h1 className="home-title" id="home-title">
            {t("heroTitle")}
          </h1>
          <p className="home-description">{t("heroDescription")}</p>
          <div className="home-store-group">
            <a href="#" className="btn-store">
              <svg
                className="btn-store-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3.609 1.814L13.792 12 3.61 22.186A2.27 2.27 0 0 1 3 21.428V2.572c.16-.3.376-.563.609-.758z"
                  fill="#00C3FF"
                />
                <path
                  d="M17.432 8.354L5.089.824a1.76 1.76 0 0 0-1.48.99L13.792 12l3.64-3.646z"
                  fill="#00E676"
                />
                <path
                  d="M17.432 15.646L13.792 12 3.609 22.186c.35.197.77.246 1.18.113l12.643-7.227z"
                  fill="#FF334B"
                />
                <path
                  d="m21.252 10.73-3.82-2.376-3.64 3.646 3.64 3.646 3.82-2.376a1.44 1.44 0 0 0 0-2.54z"
                  fill="#FFBA00"
                />
              </svg>
              <span className="btn-store-text">
                <span className="btn-store-sub">{t("playStoreLead")}</span>
                <span className="btn-store-title">Google Play</span>
              </span>
            </a>
            <a href="#" className="btn-store">
              <svg
                className="btn-store-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.08 1.74-.95 2.77.99.08 2.03-.51 2.68-1.27z"
                />
              </svg>
              <span className="btn-store-text">
                <span className="btn-store-sub">{t("appStoreLead")}</span>
                <span className="btn-store-title">App Store</span>
              </span>
            </a>
          </div>
          <div className="home-actions">
            <a className="btn-primary" href="#features">
              {t("heroFeaturesLink")}
            </a>
            <Link className="btn-secondary" to="/privacy-policy">
              <ShieldCheck size={17} aria-hidden="true" />
              {t("heroPrivacyLink")}
            </Link>
          </div>
          <div className="home-highlights" aria-label={t("featuresTitle")}>
            <span>
              <QrCode size={17} aria-hidden="true" />
              {t("fuelTitle")}
            </span>
            <span>
              <FileText size={17} aria-hidden="true" />
              {t("documentsTitle")}
            </span>
            <span>
              <Bell size={17} aria-hidden="true" />
              {t("remindersTitle")}
            </span>
          </div>
        </div>
      </section>

      <section
        className="home-features"
        id="features"
        aria-labelledby="features-title"
      >
        <div className="container">
          <div className="home-section-heading">
            <h2 id="features-title">{t("featuresTitle")}</h2>
            <p>{t("featuresIntro")}</p>
          </div>

          <div className="home-feature-grid">
            <article className="home-feature-card">
              <Car size={25} aria-hidden="true" />
              <h3>{t("vehiclesTitle")}</h3>
              <p>{t("vehiclesBody")}</p>
            </article>
            <article className="home-feature-card">
              <FileText size={25} aria-hidden="true" />
              <h3>{t("documentsTitle")}</h3>
              <p>{t("documentsBody")}</p>
            </article>
            <article className="home-feature-card">
              <QrCode size={25} aria-hidden="true" />
              <h3>{t("fuelTitle")}</h3>
              <p>{t("fuelBody")}</p>
            </article>
            <article className="home-feature-card">
              <Bell size={25} aria-hidden="true" />
              <h3>{t("remindersTitle")}</h3>
              <p>{t("remindersBody")}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="home-privacy"
        id="privacy"
        aria-labelledby="privacy-title"
      >
        <div className="container home-privacy-card">
          <ShieldCheck size={30} aria-hidden="true" />
          <div>
            <h2 id="privacy-title">{t("privacyPreviewTitle")}</h2>
            <p>{t("privacyPreviewBody")}</p>
            <Link to="/privacy-policy" className="home-text-link">
              {t("privacyPreviewAction")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
