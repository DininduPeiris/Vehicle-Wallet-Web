import { useState } from "react";
import {
  Shield,
  QrCode,
  FileText,
  Settings,
  Car,
  Bike,
  Plus,
  Lock,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Sun,
  Flame,
  FileCheck,
  Fingerprint
} from "lucide-react";
import appIcon from "../assets/icon.jpg";

type MockTab = "dashboard" | "fuel-qr" | "documents" | "settings";
type MockLang = "en" | "si" | "ta";

const translations = {
  en: {
    appName: "Vehicle Wallet",
    subTitle: "Sri Lanka Digital Vehicle & Fuel Pass (Offline)",
    quickFuel: "Quick Fuel Pass",
    oneTap: "1-Tap Fullscreen",
    expiryNotice: "Licence & Insurance Alert",
    expiresIn: "Expires in 14 days",
    insuranceTitle: "Motor Insurance Policy",
    carName: "Toyota Prius (2018)",
    carPlate: "WP CAB-4892",
    carType: "Car / Hybrid",
    fuelQrBtn: "Fuel QR",
    insuranceBtn: "Insurance",
    bikeName: "Honda Dio 110",
    bikePlate: "CP BDM-7821",
    bikeType: "Motorcycle",
    shedScanning: "SHED OPTICAL SCANNING READY",
    scanNotice: "Instant high-contrast QR engineered for handheld POS scanning",
    quotaStatus: "Weekly Quota: 20L Available",
    vaultTitle: "Encrypted Documents",
    vaultSub: "AES-256-GCM Hardware Encrypted",
    revenueLicence: "Western Provincial Revenue Licence",
    mta: "MTA Western Province",
    activeDoc: "Active • 240d left",
    emissionDoc: "DriveGreen Emission Certificate",
    emissionIssuer: "CleanCo Systems Lanka",
    emissionNotice: "Expires in 14 days",
    crDoc: "Certificate of Registration (CR)",
    crIssuer: "Dept of Motor Traffic (RMV)",
    permanent: "Permanent",
    securityHeader: "Security & Preferences",
    biometrics: "Face ID / Fingerprint",
    biometricDesc: "Require biometrics to unlock",
    appPin: "4-Digit Hardware PIN",
    pinStatus: "Enabled (Local Keystore)",
    offlineDb: "100% Offline SQLite Storage",
    zeroCloud: "Zero cloud transmission • Stored locally",
    language: "App Language",
    homeTab: "Home",
    docsTab: "Documents",
    vehiclesTab: "Vehicles",
    settingsTab: "Settings"
  },
  si: {
    appName: "Vehicle Wallet",
    subTitle: "ශ්‍රී ලංකා ඩිජිටල් වාහන සහ ඉන්ධන QR (නොබැඳි)",
    quickFuel: "ඉක්මන් ඉන්ධන QR",
    oneTap: "තනි තට්ටුවෙන් සම්පූර්ණ තිරය",
    expiryNotice: "බලපත්‍ර සහ රක්ෂණ අනතුරු ඇඟවීම",
    expiresIn: "දින 14 කින් කල් ඉකුත් වේ",
    insuranceTitle: "මෝටර් රථ රක්ෂණ සහතිකය",
    carName: "ටොයෝටා ප්‍රියස් (2018)",
    carPlate: "WP CAB-4892",
    carType: "මෝටර් රථ",
    fuelQrBtn: "ඉන්ධන QR",
    insuranceBtn: "රක්ෂණය",
    bikeName: "හොන්ඩා ඩියෝ 110",
    bikePlate: "CP BDM-7821",
    bikeType: "යතුරුපැදිය",
    shedScanning: "ඉන්ධන පිරවුම්හල් කියවීමට සූදානම්",
    scanNotice: "අධික ආලෝකයේදීත් ක්ෂණිකව කියවිය හැකි QR කේතය",
    quotaStatus: "සතිපතා කෝටාව: ලීටර් 20 ක් ඇත",
    vaultTitle: "ගුප්තකේතනය කළ ලේඛන",
    vaultSub: "AES-256-GCM දෘඩාංග ආරක්ෂණය",
    revenueLicence: "බස්නාහිර පළාත් ආදායම් බලපත්‍රය",
    mta: "මෝටර් රථ ප්‍රවාහන දෙපාර්තමේන්තුව",
    activeDoc: "සක්‍රීයයි • දින 240 ක් ඉතිරිව ඇත",
    emissionDoc: "DriveGreen දුම් සහතිකය",
    emissionIssuer: "ක්ලීන්කෝ පද්ධති ලංකා",
    emissionNotice: "දින 14 කින් කල් ඉකුත් වේ",
    crDoc: "ලියාපදිංචි සහතිකය (පොත)",
    crIssuer: "මෝටර් රථ ලියාපදිංචි දෙපාර්තමේන්තුව",
    permanent: "ස්ථිර ලේඛනය",
    securityHeader: "ආරක්ෂාව සහ මනාප",
    biometrics: "මුහුණු හැඳුනුම / ඇඟිලි සලකුණ",
    biometricDesc: "විවෘත කිරීමට ජෛවමිතික අවශ්‍යයි",
    appPin: "ඉලක්කම් 4ක යෙදුම් PIN",
    pinStatus: "සක්‍රීයයි (දේශීයව සුරැකී ඇත)",
    offlineDb: "100% නොබැඳි SQLite දත්ත සමුදාය",
    zeroCloud: "වළාකුළු සම්ප්‍රේෂණය ශුන්‍යයි",
    language: "යෙදුමේ භාෂාව",
    homeTab: "මුල් පිටුව",
    docsTab: "ලේඛන",
    vehiclesTab: "වාහන",
    settingsTab: "සැකසුම්"
  },
  ta: {
    appName: "Vehicle Wallet",
    subTitle: "இலங்கை டிஜிட்டல் வாகன மற்றும் எரிபொருள் பாஸ் (ஆஃப்லைன்)",
    quickFuel: "விரைவு எரிபொருள் QR",
    oneTap: "1-தட்டல் முழுத்திரை",
    expiryNotice: "காப்பீடு & உரிம காலாவதி எச்சரிக்கை",
    expiresIn: "14 நாட்களில் காலாவதியாகிறது",
    insuranceTitle: "மோட்டார் வாகன காப்பீடு",
    carName: "டொயோட்டா பிரியஸ் (2018)",
    carPlate: "WP CAB-4892",
    carType: "கார் / ஹைப்ரிட்",
    fuelQrBtn: "எரிபொருள் QR",
    insuranceBtn: "காப்பீடு",
    bikeName: "ஹோண்டா டியோ 110",
    bikePlate: "CP BDM-7821",
    bikeType: "மோட்டார் சைக்கிள்",
    shedScanning: "எரிபொருள் நிலைய ஸ்கேனருக்கு தயார்",
    scanNotice: "கைபேசி பிஓஎஸ் ஸ்கேனர்களுக்கு உகந்த உயர்-மாறுபட்ட QR",
    quotaStatus: "வார ஒதுக்கீடு: 20L மீதமுள்ளது",
    vaultTitle: "மறைகுறியாக்கப்பட்ட ஆவணங்கள்",
    vaultSub: "AES-256-GCM உள்ளூர் பாதுகாப்பு",
    revenueLicence: "மேல் மாகாண வருவாய் உரிமம்",
    mta: "மோட்டார் போக்குவரத்து துறை",
    activeDoc: "செயலில் உள்ளது • 240 நாட்கள் உள்ளன",
    emissionDoc: "DriveGreen புகை பரிசோதனை சான்றிதழ்",
    emissionIssuer: "க்ளின்கோ சிஸ்டம்ஸ் லங்கா",
    emissionNotice: "14 நாட்களில் காலாவதியாகிறது",
    crDoc: "பதிவு சான்றிதழ் (CR)",
    crIssuer: "மோட்டார் போக்குவரத்து துறை",
    permanent: "நிரந்தர ஆவணம்",
    securityHeader: "பாதுகாப்பு & விருப்பத்தேர்வுகள்",
    biometrics: "முக அடையாளம் / கைரேகை",
    biometricDesc: "திறக்க பயோமெட்ரிக் தேவை",
    appPin: "4-இலக்க PIN குறியீடு",
    pinStatus: "இயக்கப்பட்டது",
    offlineDb: "100% ஆஃப்லைன் SQLite சேமிப்பு",
    zeroCloud: "கிளவுட் பரிமாற்றம் பூஜ்ஜியம்",
    language: "செயலி மொழி",
    homeTab: "முகப்பு",
    docsTab: "ஆவணங்கள்",
    vehiclesTab: "வாகனங்கள்",
    settingsTab: "அமைப்புகள்"
  }
};

export default function PhoneMockup() {
  const [activeTab, setActiveTab] = useState<MockTab>("dashboard");
  const [lang, setLang] = useState<MockLang>("en");
  const t = translations[lang];

  return (
    <div className="phone-mockup-wrapper">
      <div className="phone-mockup-glow" />

      {/* Simulator Quick Screen Switcher */}
      <div className="simulator-controls">
        <button
          className={`sim-btn ${activeTab === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          <Car size={15} />
          <span>Dashboard</span>
        </button>
        <button
          className={`sim-btn ${activeTab === "fuel-qr" ? "active" : ""}`}
          onClick={() => setActiveTab("fuel-qr")}
        >
          <QrCode size={15} />
          <span>Fuel QR</span>
        </button>
        <button
          className={`sim-btn ${activeTab === "documents" ? "active" : ""}`}
          onClick={() => setActiveTab("documents")}
        >
          <FileText size={15} />
          <span>Vault</span>
        </button>
        <button
          className={`sim-btn ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          <Settings size={15} />
          <span>Security</span>
        </button>
      </div>

      {/* Realistic Mobile Frame */}
      <div className="phone-frame">
        <div className="phone-screen">
          {/* Status Bar */}
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="phone-notch">
              <div className="notch-camera" />
            </div>
            <span>5G 100%</span>
          </div>

          {/* Interactive Screen Content */}
          <div className="phone-inner-content">
            {/* Screen 1: Dashboard */}
            {activeTab === "dashboard" && (
              <>
                <div className="app-header-row">
                  <div className="app-brand-left">
                    <div className="app-brand-icon">
                      <img src={appIcon} alt="Vehicle Wallet Icon" />
                    </div>
                    <div>
                      <h4 className="app-brand-title">{t.appName}</h4>
                      <p className="app-brand-subtitle">{t.subTitle}</p>
                    </div>
                  </div>
                  <div className="app-add-btn">
                    <Plus size={16} />
                  </div>
                </div>

                {/* 1-Tap Quick Fuel Pass Strip */}
                <div className="mock-quick-qr">
                  <div className="mock-section-title">
                    <span>
                      <Flame size={13} />
                      {t.quickFuel}
                    </span>
                    <span className="mock-section-hint">{t.oneTap}</span>
                  </div>
                  <div className="mock-qr-strip">
                    <div
                      className="mock-qr-pill"
                      onClick={() => setActiveTab("fuel-qr")}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="mock-qr-badge">
                        <QrCode size={15} />
                      </div>
                      <div className="mock-qr-meta">
                        <span className="mock-qr-name">{t.carName.split(" ")[0]}</span>
                        <span className="mock-qr-plate">{t.carPlate}</span>
                      </div>
                    </div>

                    <div
                      className="mock-qr-pill"
                      onClick={() => setActiveTab("fuel-qr")}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="mock-qr-badge">
                        <QrCode size={15} />
                      </div>
                      <div className="mock-qr-meta">
                        <span className="mock-qr-name">{t.bikeName.split(" ")[0]}</span>
                        <span className="mock-qr-plate">{t.bikePlate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upcoming Expiry Warning */}
                <div
                  className="mock-expiry-card"
                  onClick={() => setActiveTab("documents")}
                  style={{ cursor: "pointer" }}
                >
                  <div className="mock-expiry-icon">
                    <AlertTriangle size={17} />
                  </div>
                  <div className="mock-expiry-content">
                    <div className="mock-expiry-header">
                      <span className="mock-expiry-title">{t.insuranceTitle}</span>
                      <span className="mock-expiry-badge">{t.expiresIn}</span>
                    </div>
                    <p className="mock-expiry-sub">
                      {t.carName} • {t.carPlate}
                    </p>
                  </div>
                  <ChevronRight size={14} color="#94A3B8" />
                </div>

                {/* Vehicle Card 1: Toyota Prius */}
                <div className="mock-vehicle-card">
                  <div className="mock-vehicle-top">
                    <div>
                      <h5 className="mock-vehicle-name">{t.carName}</h5>
                      <div className="mock-vehicle-tags">
                        <span className="mock-tag-type">{t.carType}</span>
                        <span className="mock-tag-model">2018 • Silver</span>
                      </div>
                    </div>
                    <div className="mock-vehicle-icon-circle">
                      <Car size={17} />
                    </div>
                  </div>

                  {/* Sri Lankan Plate Styled Box */}
                  <div className="mock-plate-box">
                    <span className="mock-plate-text">{t.carPlate}</span>
                    <span className="mock-plate-sl">SRI LANKA</span>
                  </div>

                  {/* 2-Tap Quick Action Row */}
                  <div className="mock-vehicle-actions">
                    <button
                      className="mock-btn-qr"
                      onClick={() => setActiveTab("fuel-qr")}
                    >
                      <QrCode size={13} />
                      <span>{t.fuelQrBtn}</span>
                    </button>
                    <button
                      className="mock-btn-doc"
                      onClick={() => setActiveTab("documents")}
                    >
                      <Shield size={13} />
                      <span>{t.insuranceBtn}</span>
                    </button>
                  </div>
                </div>

                {/* Vehicle Card 2: Honda Dio */}
                <div className="mock-vehicle-card">
                  <div className="mock-vehicle-top">
                    <div>
                      <h5 className="mock-vehicle-name">{t.bikeName}</h5>
                      <div className="mock-vehicle-tags">
                        <span className="mock-tag-type">{t.bikeType}</span>
                        <span className="mock-tag-model">2021 • Matte Blue</span>
                      </div>
                    </div>
                    <div className="mock-vehicle-icon-circle">
                      <Bike size={17} />
                    </div>
                  </div>

                  <div className="mock-plate-box">
                    <span className="mock-plate-text">{t.bikePlate}</span>
                    <span className="mock-plate-sl">SRI LANKA</span>
                  </div>
                </div>
              </>
            )}

            {/* Screen 2: High-Contrast Fuel Pass QR */}
            {activeTab === "fuel-qr" && (
              <div className="mock-fullscreen-qr">
                <div className="mock-sunlight-badge">
                  <Sun size={12} />
                  <span>{t.shedScanning}</span>
                </div>

                <div className="mock-qr-display-box">
                  <span className="mock-qr-shed-label">NATIONAL FUEL PASS</span>
                  {/* High contrast SVG QR code */}
                  <svg
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    className="mock-qr-svg"
                  >
                    {/* Top Left Finder */}
                    <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="#000" strokeWidth="6" />
                    <rect x="13" y="13" width="12" height="12" rx="2" fill="#000" />
                    {/* Top Right Finder */}
                    <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="#000" strokeWidth="6" />
                    <rect x="75" y="13" width="12" height="12" rx="2" fill="#000" />
                    {/* Bottom Left Finder */}
                    <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="#000" strokeWidth="6" />
                    <rect x="13" y="75" width="12" height="12" rx="2" fill="#000" />
                    {/* Data Points */}
                    <rect x="42" y="10" width="8" height="8" rx="1" fill="#000" />
                    <rect x="42" y="25" width="16" height="8" rx="1" fill="#000" />
                    <rect x="10" y="42" width="8" height="16" rx="1" fill="#000" />
                    <rect x="25" y="45" width="12" height="8" rx="1" fill="#000" />
                    <rect x="45" y="45" width="10" height="10" rx="1" fill="#000" />
                    <rect x="62" y="42" width="8" height="14" rx="1" fill="#000" />
                    <rect x="78" y="42" width="12" height="8" rx="1" fill="#000" />
                    <rect x="42" y="65" width="8" height="16" rx="1" fill="#000" />
                    <rect x="56" y="65" width="16" height="8" rx="1" fill="#000" />
                    <rect x="78" y="60" width="12" height="12" rx="1" fill="#000" />
                    <rect x="65" y="78" width="12" height="12" rx="1" fill="#000" />
                    <rect x="45" y="86" width="16" height="6" rx="1" fill="#000" />
                  </svg>
                  <span className="mock-qr-quota">{t.quotaStatus}</span>
                </div>

                <div className="mock-qr-plate-badge">{t.carPlate}</div>
                <p className="mock-expiry-sub" style={{ paddingInline: 8 }}>
                  {t.scanNotice}
                </p>
              </div>
            )}

            {/* Screen 3: Encrypted Document Vault */}
            {activeTab === "documents" && (
              <div className="mock-vault-screen">
                <div className="mock-vault-header">
                  <div>
                    <h5 className="mock-vehicle-name">{t.vaultTitle}</h5>
                    <p className="app-brand-subtitle">{t.vaultSub}</p>
                  </div>
                  <div className="mock-vault-badge">
                    <Shield size={11} />
                    <span>AES-256</span>
                  </div>
                </div>

                {/* Doc 1: Revenue Licence */}
                <div className="mock-doc-item">
                  <div className="mock-doc-icon">
                    <FileCheck size={18} />
                  </div>
                  <div className="mock-doc-details">
                    <h6 className="mock-doc-title">{t.revenueLicence}</h6>
                    <span className="mock-doc-meta">{t.mta} • {t.carPlate}</span>
                  </div>
                  <span className="mock-doc-status status-active">{t.activeDoc}</span>
                </div>

                {/* Doc 2: Insurance */}
                <div className="mock-doc-item">
                  <div className="mock-doc-icon" style={{ color: "#FBBF24" }}>
                    <Shield size={18} />
                  </div>
                  <div className="mock-doc-details">
                    <h6 className="mock-doc-title">{t.insuranceTitle}</h6>
                    <span className="mock-doc-meta">Sri Lanka Insurance • {t.carPlate}</span>
                  </div>
                  <span className="mock-doc-status status-warning">{t.expiresIn}</span>
                </div>

                {/* Doc 3: Emission Test */}
                <div className="mock-doc-item">
                  <div className="mock-doc-icon" style={{ color: "#FBBF24" }}>
                    <FileText size={18} />
                  </div>
                  <div className="mock-doc-details">
                    <h6 className="mock-doc-title">{t.emissionDoc}</h6>
                    <span className="mock-doc-meta">{t.emissionIssuer} • {t.carPlate}</span>
                  </div>
                  <span className="mock-doc-status status-warning">{t.emissionNotice}</span>
                </div>

                {/* Doc 4: CR Book */}
                <div className="mock-doc-item">
                  <div className="mock-doc-icon">
                    <Lock size={18} />
                  </div>
                  <div className="mock-doc-details">
                    <h6 className="mock-doc-title">{t.crDoc}</h6>
                    <span className="mock-doc-meta">{t.crIssuer} • {t.carPlate}</span>
                  </div>
                  <span className="mock-doc-status status-active">{t.permanent}</span>
                </div>
              </div>
            )}

            {/* Screen 4: Security & Settings */}
            {activeTab === "settings" && (
              <div className="mock-settings-screen">
                <div className="mock-vault-header">
                  <div>
                    <h5 className="mock-vehicle-name">{t.securityHeader}</h5>
                    <p className="app-brand-subtitle">{t.offlineDb}</p>
                  </div>
                </div>

                {/* Setting 1: Biometrics */}
                <div className="mock-setting-row">
                  <div className="mock-setting-left">
                    <Fingerprint size={16} className="mock-setting-icon" />
                    <div>
                      <span className="mock-setting-label">{t.biometrics}</span>
                      <p className="mock-expiry-sub">{t.biometricDesc}</p>
                    </div>
                  </div>
                  <div className="mock-switch-active">
                    <div className="mock-switch-thumb" />
                  </div>
                </div>

                {/* Setting 2: App PIN */}
                <div className="mock-setting-row">
                  <div className="mock-setting-left">
                    <Lock size={16} className="mock-setting-icon" />
                    <div>
                      <span className="mock-setting-label">{t.appPin}</span>
                      <p className="mock-expiry-sub">{t.pinStatus}</p>
                    </div>
                  </div>
                  <div className="mock-switch-active">
                    <div className="mock-switch-thumb" />
                  </div>
                </div>

                {/* Setting 3: Offline SQLite */}
                <div className="mock-setting-row">
                  <div className="mock-setting-left">
                    <CheckCircle2 size={16} className="mock-setting-icon" />
                    <div>
                      <span className="mock-setting-label">{t.offlineDb}</span>
                      <p className="mock-expiry-sub">{t.zeroCloud}</p>
                    </div>
                  </div>
                  <span className="mock-doc-status status-active">100% Local</span>
                </div>

                {/* Language Switcher */}
                <div style={{ marginTop: 6 }}>
                  <span className="mock-setting-label" style={{ paddingLeft: 4 }}>
                    {t.language}
                  </span>
                  <div className="mock-lang-selector">
                    <button
                      className={`mock-lang-btn ${lang === "en" ? "active" : ""}`}
                      onClick={() => setLang("en")}
                    >
                      English
                    </button>
                    <button
                      className={`mock-lang-btn ${lang === "si" ? "active" : ""}`}
                      onClick={() => setLang("si")}
                    >
                      සිංහල
                    </button>
                    <button
                      className={`mock-lang-btn ${lang === "ta" ? "active" : ""}`}
                      onClick={() => setLang("ta")}
                    >
                      தமிழ்
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Tab Bar */}
          <div className="phone-bottom-tabbar">
            <div
              className={`mock-tab-item ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => setActiveTab("dashboard")}
              style={{ cursor: "pointer" }}
            >
              <Car size={15} />
              <span>{t.homeTab}</span>
            </div>
            <div
              className={`mock-tab-item ${activeTab === "documents" ? "active" : ""}`}
              onClick={() => setActiveTab("documents")}
              style={{ cursor: "pointer" }}
            >
              <FileText size={15} />
              <span>{t.docsTab}</span>
            </div>
            <div
              className={`mock-tab-item ${activeTab === "fuel-qr" ? "active" : ""}`}
              onClick={() => setActiveTab("fuel-qr")}
              style={{ cursor: "pointer" }}
            >
              <QrCode size={15} />
              <span>Fuel QR</span>
            </div>
            <div
              className={`mock-tab-item ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => setActiveTab("settings")}
              style={{ cursor: "pointer" }}
            >
              <Settings size={15} />
              <span>{t.settingsTab}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
