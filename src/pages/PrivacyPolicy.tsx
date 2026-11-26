import {
  ArrowLeft,
  HardDrive,
  LockKeyhole,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useWebsiteLocalization } from "../localization/website";

export default function PrivacyPolicy() {
  const { t } = useWebsiteLocalization();
  const sections = [
    {
      icon: HardDrive,
      title: t("privacyStorageTitle"),
      body: t("privacyStorageBody"),
    },
    {
      icon: WifiOff,
      title: t("privacyOfflineTitle"),
      body: t("privacyOfflineBody"),
    },
    {
      icon: LockKeyhole,
      title: t("privacySecurityTitle"),
      body: t("privacySecurityBody"),
    },
    {
      icon: ShieldCheck,
      title: t("privacyControlTitle"),
      body: t("privacyControlBody"),
    },
  ];

  return (
    <main className="privacy-page">
      <div className="container privacy-content">
        <Link to="/" className="privacy-back-link">
          <ArrowLeft size={17} aria-hidden="true" />
          {t("privacyBack")}
        </Link>

        <header className="privacy-heading">
          <p className="home-eyebrow">{t("privacyEyebrow")}</p>
          <h1>{t("privacyTitle")}</h1>
          <p>{t("privacyIntro")}</p>
        </header>

        <div className="privacy-grid">
          {sections.map(({ icon: Icon, title, body }) => (
            <section className="privacy-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
