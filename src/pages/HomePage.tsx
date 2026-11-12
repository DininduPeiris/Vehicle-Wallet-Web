import { Link } from "react-router-dom";
import PhoneMockup from "../components/PhoneMockup";
import {
  Shield,
  QrCode,
  Clock,
  Lock,
  Database,
  Car,
  Bike,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  EyeOff,
  Flame,
  FileCheck
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Background Decorative Ambient Glows */}
      <div className="ambient-glow-top" />
      <div className="ambient-grid" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            {/* Top Badge */}
            <div className="hero-badge">
              <span className="badge-dot" />
              <span className="badge-text">
                🇱🇰 Tailored for Sri Lanka • 100% Offline by Design
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Your vehicle essentials.{" "}
              <span className="gradient-text">
                Encrypted, offline & always ready.
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc">
              <strong>"Everything important about your vehicles, securely accessible in one place."</strong>
              <br />
              An offline-first digital wallet built for Sri Lankan motorists. Securely manage provincial
              revenue licences, motor insurance cards, DriveGreen emission reports, and National Fuel Pass
              QR codes with zero cloud dependencies and authenticated AES-256-GCM encryption.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <div className="hero-store-group">
                <a
                  href="#playstore"
                  className="btn-store"
                  aria-label="Download on Google Play Store"
                  title="Download on Google Play (Play Store)"
                >
                  <svg
                    className="btn-store-icon"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
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
                      d="M21.252 10.73l-3.82-2.376-3.64 3.646 3.64 3.646 3.82-2.376a1.44 1.44 0 0 0 0-2.54z"
                      fill="#FFBA00"
                    />
                  </svg>
                  <div className="btn-store-text">
                    <span className="btn-store-sub">GET IT ON</span>
                    <span className="btn-store-title">Google Play</span>
                  </div>
                </a>

                <a
                  href="#appstore"
                  className="btn-store"
                  aria-label="Download on Apple App Store"
                  title="Download on Apple App Store"
                >
                  <svg
                    className="btn-store-icon"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.08 1.74-.95 2.77.99.08 2.03-.51 2.68-1.27z" />
                  </svg>
                  <div className="btn-store-text">
                    <span className="btn-store-sub">Download on the</span>
                    <span className="btn-store-title">App Store</span>
                  </div>
                </a>
              </div>

              <div className="hero-secondary-actions">
                <a href="#demo" className="btn-primary">
                  <span>Try Interactive Demo</span>
                  <ArrowRight size={16} />
                </a>
                <Link to="/privacy-policy" className="btn-secondary">
                  <Shield size={16} color="var(--emerald-400)" />
                  <span>Zero-Cloud Privacy Policy</span>
                </Link>
              </div>
            </div>

            {/* 4 Key Pillar Highlights */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Flame size={17} />
                </div>
                <div>
                  <h4 className="highlight-title">2-Tap Fuel Pass</h4>
                  <p className="highlight-sub">High-contrast fullscreen optical QR</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <Lock size={17} />
                </div>
                <div>
                  <h4 className="highlight-title">AES-256-GCM Vault</h4>
                  <p className="highlight-sub">Local hardware-encrypted documents</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <Clock size={17} />
                </div>
                <div>
                  <h4 className="highlight-title">Expiry Notifications</h4>
                  <p className="highlight-sub">Native 30d, 14d, 7d & 1d alerts</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <Database size={17} />
                </div>
                <div>
                  <h4 className="highlight-title">100% Local SQLite</h4>
                  <p className="highlight-sub">No user accounts, no cloud sync</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Mobile Simulator */}
          <div id="demo">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Core Features Bento Grid */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">ENGINEERED FOR SRI LANKAN ROADS</span>
            <h2 className="section-title">
              Designed for real road routines, <br />
              <span className="gradient-emerald">not for the cloud.</span>
            </h2>
            <p className="section-subtitle">
              From roadside police checkpoints to crowded fuel sheds with zero cellular reception,
              Vehicle Wallet gives you rapid, reliable access without delays.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-card-glow" />
              <div className="feature-icon-wrapper">
                <QrCode size={24} />
              </div>
              <h3 className="feature-title">2-Tap High-Contrast Fuel Pass</h3>
              <p className="feature-description">
                Quick-access strip and dedicated fullscreen view engineered specifically for reliable
                optical scanning by handheld POS devices at fuel sheds. Maximizes screen brightness and
                contrast to scan flawlessly even in harsh outdoor tropical sunlight.
              </p>
              <div className="feature-badge-row">
                <span className="feature-pill">Instant 1-Tap</span>
                <span className="feature-pill">High Contrast</span>
                <span className="feature-pill">Shed-Ready</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-card-glow" />
              <div className="feature-icon-wrapper">
                <Lock size={24} />
              </div>
              <h3 className="feature-title">AES-256-GCM Document Vault</h3>
              <p className="feature-description">
                Store sensitive vehicle PDFs and photos (revenue licence, insurance cards, DriveGreen reports)
                with authenticated cryptographic local encryption. Cryptographic keys stay inside your device’s
                secure hardware keystore.
              </p>
              <div className="feature-badge-row">
                <span className="feature-pill">Authenticated Cipher</span>
                <span className="feature-pill">Zero Cloud Storage</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-card-glow" />
              <div className="feature-icon-wrapper">
                <Clock size={24} />
              </div>
              <h3 className="feature-title">Native Expiry Reminders</h3>
              <p className="feature-description">
                Never get caught with an expired revenue licence or insurance policy. Intelligent countdowns
                and local device notifications are scheduled natively (30d, 14d, 7d, 1d) without pinging
                any remote push server.
              </p>
              <div className="feature-badge-row">
                <span className="feature-pill">Local Notifications</span>
                <span className="feature-pill">Zero Fines</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-card-glow" />
              <div className="feature-icon-wrapper">
                <Car size={24} />
              </div>
              <h3 className="feature-title">Sri Lankan Plate Intelligence</h3>
              <p className="feature-description">
                Native validation and authentic display for Sri Lankan number plates across all eras:
                modern provincial plates (e.g. <code>WP CAB-4892</code>, <code>CP AAJ-3041</code>),
                hyphenated numbers (e.g. <code>65-4321</code>), and English letters.
              </p>
              <div className="feature-badge-row">
                <span className="feature-pill">WP • CP • SP • NW</span>
                <span className="feature-pill">Sri Lankan Formats</span>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="feature-card-glow" />
              <div className="feature-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <h3 className="feature-title">Biometrics & 4-Digit PIN Lock</h3>
              <p className="feature-description">
                Hardware-backed biometric unlock using Face ID or Fingerprint / Touch ID, combined with a
                fallback 4-digit PIN. Features configurable auto-lock timeouts (immediately, 30s, 1m, 5m)
                to keep vehicle records private if your phone is borrowed.
              </p>
              <div className="feature-badge-row">
                <span className="feature-pill">Face ID</span>
                <span className="feature-pill">Fingerprint</span>
                <span className="feature-pill">Auto-Lock</span>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="feature-card-glow" />
              <div className="feature-icon-wrapper">
                <EyeOff size={24} />
              </div>
              <h3 className="feature-title">100% Private, Zero Trackers</h3>
              <p className="feature-description">
                No user accounts, no phone numbers, no email registration, and zero third-party telemetry.
                Everything is stored inside an embedded ACID SQLite database on your device. What is in
                your wallet stays strictly yours.
              </p>
              <div className="feature-badge-row">
                <span className="feature-pill">Embedded SQLite</span>
                <span className="feature-pill">No Accounts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sri Lankan Vehicle Categories Section */}
      <section className="section" id="vehicles" style={{ backgroundColor: "rgba(16, 24, 39, 0.4)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">SRI LANKAN VEHICLE ECOSYSTEM</span>
            <h2 className="section-title">
              Built for every ride on <br />
              <span className="gradient-emerald">Sri Lankan highways & byways.</span>
            </h2>
            <p className="section-subtitle">
              Tailored metadata, document requirements, and plate structures for each vehicle class.
            </p>
          </div>

          <div className="vehicle-types-grid">
            {/* Vehicle 1: Cars & SUVs */}
            <div className="v-type-card">
              <div className="v-type-icon">
                <Car size={22} />
              </div>
              <div>
                <h4 className="v-type-title">Car / SUV / Crossover</h4>
                <p className="v-type-desc">
                  Sedans, hatchbacks, hybrid/electric vehicles, and luxury SUVs.
                </p>
              </div>
              <div className="v-type-plate">
                <span className="v-type-plate-text">WP CAB-4892</span>
                <span style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>Western</span>
              </div>
            </div>

            {/* Vehicle 2: Motorcycles */}
            <div className="v-type-card">
              <div className="v-type-icon">
                <Bike size={22} />
              </div>
              <div>
                <h4 className="v-type-title">Motorcycle / Scooter</h4>
                <p className="v-type-desc">
                  Commuter motorbikes, mopeds, and scooters (Honda Dio, Pulsar, FZ).
                </p>
              </div>
              <div className="v-type-plate">
                <span className="v-type-plate-text">CP BDM-7821</span>
                <span style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>Central</span>
              </div>
            </div>

            {/* Vehicle 3: Three-Wheelers */}
            <div className="v-type-card">
              <div className="v-type-icon">
                <Sparkles size={22} />
              </div>
              <div>
                <h4 className="v-type-title">Three-Wheeler (Tuk-Tuk)</h4>
                <p className="v-type-desc">
                  Autorickshaws, 2-stroke & 4-stroke passenger and cargo tuk-tuks.
                </p>
              </div>
              <div className="v-type-plate">
                <span className="v-type-plate-text">SP AAJ-3041</span>
                <span style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>Southern</span>
              </div>
            </div>

            {/* Vehicle 4: Vans & Dual Purpose */}
            <div className="v-type-card">
              <div className="v-type-icon">
                <FileCheck size={22} />
              </div>
              <div>
                <h4 className="v-type-title">Van / MPV / Dual Purpose</h4>
                <p className="v-type-desc">
                  Passenger vans, dual-purpose pickups, Caravan, HiAce, and light trucks.
                </p>
              </div>
              <div className="v-type-plate">
                <span className="v-type-plate-text">WP NA-6520</span>
                <span style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>Western</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trilingual Showcase Banner */}
      <section className="section">
        <div className="container">
          <div className="trilingual-banner">
            <div className="trilingual-left">
              <span className="section-eyebrow">TRILINGUAL LOCALIZATION</span>
              <h3 className="trilingual-title">
                English, සිංහල & தமிழ்.
              </h3>
              <p className="trilingual-desc">
                Vehicle Wallet communicates in your language. Document categories, reminders,
                and notifications switch seamlessly between English, Sinhala, and Tamil so every
                Sri Lankan driver feels right at home.
              </p>
            </div>

            <div className="trilingual-badges">
              <div className="lang-chip">
                <span>English</span>
                <small>Default</small>
              </div>
              <div className="lang-chip">
                <span>සිංහල</span>
                <small>Sinhala</small>
              </div>
              <div className="lang-chip">
                <span>தமிழ்</span>
                <small>Tamil</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Architecture & Comparison Section */}
      <section className="section" id="security">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">PRIVACY & ARCHITECTURE</span>
            <h2 className="section-title">
              Why an offline wallet is <br />
              <span className="gradient-emerald">fundamentally safer.</span>
            </h2>
            <p className="section-subtitle">
              Typical apps store your documents on third-party servers. Vehicle Wallet operates
              exclusively on your physical device with zero cloud attack surface.
            </p>
          </div>

          <div className="security-box">
            {/* Left Specs List */}
            <div className="security-specs-list">
              <div className="spec-item">
                <div className="spec-icon-box">
                  <Database size={20} />
                </div>
                <div>
                  <h4 className="spec-title">Embedded ACID SQLite Storage</h4>
                  <p className="spec-desc">
                    All vehicle details and document indexes are stored inside an embedded local database.
                    No data is ever dispatched over the network.
                  </p>
                </div>
              </div>

              <div className="spec-item">
                <div className="spec-icon-box">
                  <Lock size={20} />
                </div>
                <div>
                  <h4 className="spec-title">Authenticated AES-256-GCM Cipher</h4>
                  <p className="spec-desc">
                    Document attachments are encrypted locally using authenticated AES-256-GCM with keys
                    anchored to your device's Secure Enclave / KeyStore.
                  </p>
                </div>
              </div>

              <div className="spec-item">
                <div className="spec-icon-box">
                  <EyeOff size={20} />
                </div>
                <div>
                  <h4 className="spec-title">Zero Analytics & Zero Profiling</h4>
                  <p className="spec-desc">
                    No Google Analytics, no Facebook SDK, no advertising IDs, and no tracking cookies.
                    Your travel patterns and vehicle ownership remain completely confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Comparison Table */}
            <div className="comparison-card">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Typical Cloud Apps</th>
                    <th className="wallet-col">Vehicle Wallet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Internet Needed</td>
                    <td>Yes (Always online)</td>
                    <td className="wallet-val">Zero (100% Offline)</td>
                  </tr>
                  <tr>
                    <td>Account Creation</td>
                    <td>Mandatory Email/Phone</td>
                    <td className="wallet-val">None (Instant Open)</td>
                  </tr>
                  <tr>
                    <td>Document Storage</td>
                    <td>External Cloud Servers</td>
                    <td className="wallet-val">Local AES-256 Vault</td>
                  </tr>
                  <tr>
                    <td>Fuel QR Access</td>
                    <td>Slow browser login</td>
                    <td className="wallet-val">2-Tap Instant Fullscreen</td>
                  </tr>
                  <tr>
                    <td>Telemetry & Ads</td>
                    <td>Ad trackers & analytics</td>
                    <td className="wallet-val">Zero Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">EASY 3-STEP SETUP</span>
            <h2 className="section-title">
              Ready in under 2 minutes.
            </h2>
            <p className="section-subtitle">
              Get your complete vehicle garage set up without creating an account or verifying OTPs.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">01</span>
              <h3 className="step-title">Add Your Vehicle</h3>
              <p className="step-desc">
                Select vehicle type (Car, Motorcycle, Three-Wheeler, or Van), input your Sri Lankan
                provincial plate number, and give it a nickname.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3 className="step-title">Import Fuel QR & Papers</h3>
              <p className="step-desc">
                Take a photo or import PDFs of your provincial revenue licence, motor insurance card,
                emission report, and National Fuel Pass QR.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3 className="step-title">Drive with Peace of Mind</h3>
              <p className="step-desc">
                Enjoy instant 1-tap presentation at fuel sheds, traffic checkpoints, and insurance
                assessments, backed by proactive expiry alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="hero-badge">
              <span className="badge-dot" />
              <span className="badge-text">Private & Offline Utility</span>
            </div>

            <h2 className="cta-title">
              Everything important about your vehicles,{" "}
              <span className="gradient-emerald">in your pocket.</span>
            </h2>

            <p className="cta-desc">
              Experience the speed, privacy, and peace of mind of a vehicle wallet engineered
              specifically for Sri Lankan drivers.
            </p>

            <div className="cta-buttons">
              <a href="#demo" className="btn-primary">
                <span>Explore Interactive Mockup</span>
                <ArrowRight size={16} />
              </a>
              <Link to="/privacy-policy" className="btn-secondary">
                <Shield size={16} />
                <span>Read Full Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
