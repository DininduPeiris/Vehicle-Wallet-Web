import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  EyeOff,
  CheckCircle2,
  Camera,
  Fingerprint,
  Bell,
  HardDrive,
  ArrowLeft
} from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="container">
        {/* Policy Header */}
        <div className="policy-header">
          <Link to="/" className="btn-secondary" style={{ width: "fit-content", marginBottom: 20 }}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div className="policy-badge">
            <Shield size={14} />
            <span>Zero-Cloud Privacy Policy</span>
          </div>

          <h1 className="policy-title">
            Privacy Policy & Local Security Architecture
          </h1>

          <p className="policy-meta">
            Effective Date: November 2026 • Personal Vehicle Wallet (Sri Lanka) • Version 1.0.0
          </p>
        </div>

        {/* Policy Content Layout */}
        <div className="policy-content">
          {/* Table of Contents Sticky Sidebar */}
          <aside className="policy-toc">
            <span className="policy-toc-title">Table of Contents</span>
            <a href="#core-commitment" className="toc-link">1. Foundational Commitment</a>
            <a href="#zero-cloud" className="toc-link">2. 100% Offline Architecture</a>
            <a href="#no-accounts" className="toc-link">3. Zero Account Collection</a>
            <a href="#encryption" className="toc-link">4. AES-256 Cryptography</a>
            <a href="#permissions" className="toc-link">5. Device Permissions</a>
            <a href="#no-trackers" className="toc-link">6. Zero Analytics & Trackers</a>
            <a href="#data-ownership" className="toc-link">7. Data Retention & Control</a>
            <a href="#sl-compliance" className="toc-link">8. Sri Lankan Legal Compliance</a>
          </aside>

          {/* Policy Articles */}
          <div className="policy-articles">
            {/* Section 1 */}
            <section className="policy-section" id="core-commitment">
              <h2>
                <span className="section-num">01.</span>
                Foundational Commitment
              </h2>
              <p>
                Personal Vehicle Wallet ("Vehicle Wallet", "we", "our") is designed from the ground up
                with one uncompromised philosophy: <strong>privacy through architecture</strong>. We believe
                that vehicle ownership records, registration details, revenue licence papers, insurance policies,
                and fuel ration QR codes are deeply personal information that should never reside on external
                cloud servers.
              </p>
              <div className="policy-alert-box">
                <CheckCircle2 size={20} className="policy-check-icon" />
                <span>
                  <strong>Our Privacy Guarantee:</strong> Vehicle Wallet does not maintain servers, does not have
                  a user database, does not collect analytics, and cannot view or access your vehicle documents
                  under any circumstances.
                </span>
              </div>
            </section>

            {/* Section 2 */}
            <section className="policy-section" id="zero-cloud">
              <h2>
                <span className="section-num">02.</span>
                100% Offline Architecture (Embedded SQLite)
              </h2>
              <p>
                Unlike conventional wallet applications that stream your personal data to cloud APIs,
                Vehicle Wallet operates completely offline on your device:
              </p>
              <ul>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>
                    <strong>Embedded ACID SQLite:</strong> All vehicle records, nicknames, registration numbers,
                    document expiration dates, and QR code identifiers are indexed inside a sandboxed SQLite database
                    located strictly on your device storage.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>
                    <strong>No Remote Data Synchronization:</strong> The application does not communicate with any
                    cloud endpoints, remote servers, or external synchronization backends.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>
                    <strong>Operational Independence:</strong> The app retains full functionality in remote areas,
                    underground basements, and fuel stations with zero cellular reception.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="policy-section" id="no-accounts">
              <h2>
                <span className="section-num">03.</span>
                Zero Account Creation or Profiling
              </h2>
              <p>
                You do not need to register an account to use Vehicle Wallet:
              </p>
              <ul>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>No phone numbers, email addresses, or usernames required.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>No National Identity Card (NIC) or passport verification requested.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>No passwords, SMS OTPs, or third-party OAuth logins (e.g. Google or Apple Sign-In).</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="policy-section" id="encryption">
              <h2>
                <span className="section-num">04.</span>
                Authenticated AES-256-GCM Cryptographic Protection
              </h2>
              <p>
                When you attach documents to your vehicles (such as provincial revenue licences, motor insurance
                policy cards, or DriveGreen emission certificates), they are protected by authenticated local encryption:
              </p>
              <ul>
                <li>
                  <Lock size={16} className="policy-check-icon" />
                  <span>
                    <strong>Authenticated Cipher:</strong> Documents are encrypted with AES-256 in Galois/Counter
                    Mode (GCM), providing both confidentiality and integrity verification against data tampering.
                  </span>
                </li>
                <li>
                  <HardDrive size={16} className="policy-check-icon" />
                  <span>
                    <strong>Hardware Key Storage:</strong> Encryption keys are generated using CSPRNG primitives and
                    anchored inside the operating system's hardware-backed keystore (iOS Keychain & Android Keystore)
                    via <code>expo-secure-store</code>.
                  </span>
                </li>
                <li>
                  <EyeOff size={16} className="policy-check-icon" />
                  <span>
                    <strong>Private Sandboxed Media:</strong> Decrypted documents are rendered transiently in memory
                    only when viewed by an authenticated user and are never written to unencrypted public directories.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="policy-section" id="permissions">
              <h2>
                <span className="section-num">05.</span>
                Device Permissions & Why They Are Requested
              </h2>
              <p>
                Vehicle Wallet requests minimal device permissions, exclusively to power local utilities:
              </p>
              <ul>
                <li>
                  <Camera size={16} className="policy-check-icon" />
                  <span>
                    <strong>Camera (<code>android.permission.CAMERA</code> / <code>NSCameraUsageDescription</code>):</strong>{" "}
                    Used solely to scan National Fuel Pass QR codes and capture vehicle document photos. Camera frames
                    are processed locally on your phone and never streamed or uploaded anywhere.
                  </span>
                </li>
                <li>
                  <Fingerprint size={16} className="policy-check-icon" />
                  <span>
                    <strong>Biometrics (Face ID / Fingerprint):</strong> Used to provide hardware-gated access to your
                    wallet. The biometric authentication challenge is handled entirely by your operating system's Secure
                    Enclave; Vehicle Wallet never accesses, stores, or sees your biometric templates.
                  </span>
                </li>
                <li>
                  <Bell size={16} className="policy-check-icon" />
                  <span>
                    <strong>Local Notifications:</strong> Used exclusively to schedule native device reminders for
                    upcoming document expiry dates (30 days, 14 days, 7 days, 1 day prior). No remote push servers are
                    involved; reminders are scheduled locally via <code>expo-notifications</code>.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="policy-section" id="no-trackers">
              <h2>
                <span className="section-num">06.</span>
                Zero Third-Party Trackers, Telemetry or Advertisements
              </h2>
              <p>
                Vehicle Wallet is completely ad-free and tracking-free:
              </p>
              <ul>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>No Google Firebase Analytics, Facebook SDKs, Adjust, or AppsFlyer.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>No advertising networks, banners, or tracking cookies.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>No background location tracking or telematics recording.</span>
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="policy-section" id="data-ownership">
              <h2>
                <span className="section-num">07.</span>
                Data Retention & Complete User Ownership
              </h2>
              <p>
                You retain 100% control over all data stored within the application:
              </p>
              <ul>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>
                    <strong>Instant Local Deletion:</strong> Deleting a vehicle, document, or QR code immediately removes
                    the record from SQLite and permanently erases the encrypted file from storage.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="policy-check-icon" />
                  <span>
                    <strong>Uninstalling the App:</strong> Because data is stored in the application's private sandbox,
                    uninstalling the app from your device permanently purges all stored documents and databases.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="policy-section" id="sl-compliance">
              <h2>
                <span className="section-num">08.</span>
                Sri Lankan Legal Compliance (PDPA)
              </h2>
              <p>
                Vehicle Wallet adheres strictly to the principles of the <strong>Personal Data Protection Act, No. 9 of 2022
                (PDPA) of Sri Lanka</strong>. Because our technical architecture does not collect, process, or transmit personal data
                to external data controllers, your right to privacy and digital self-determination under Sri Lankan law is
                fully protected by design.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
