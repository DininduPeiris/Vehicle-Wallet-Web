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
