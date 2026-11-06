import { Link } from "react-router-dom";

const sections = [
  {
    title: "Information in your wallet",
    body: (
      <>
        <p>Vehicle Wallet is designed to work without an account. Information you choose to add is stored on your device and may include:</p>
        <ul>
          <li>Vehicle details such as nickname, registration number, make, model and year.</li>
          <li>Documents and related details such as title, category and issue or expiry dates.</li>
          <li>Fuel Pass QR images or their content, if you choose to save them.</li>
          <li>Your app preferences, including language and security settings.</li>
        </ul>
      </>
    ),
  },
  {
    title: "How information is used",
    body: (
      <>
        <p>The app uses information on your device to show your vehicles and saved items, display Fuel Pass QR codes, and help you keep track of document dates.</p>
        <p>If you enable expiry reminders, the app schedules local notifications on your device. Reminder text can include the document title, vehicle name and time remaining. These notifications are generated for your device, not sent to us.</p>
      </>
    ),
  },
  {
    title: "Where information is stored",
    body: (
      <>
        <p>Vehicle Wallet is designed for local use. It does not require registration and does not provide cloud sync. Vehicle records and preferences are kept in the app’s local database and device storage. App-lock credentials and related settings use the platform’s secure storage. Biometric checks are handled by your device’s operating system; the app does not receive your fingerprint or face data.</p>
        <p>The app’s wallet features do not send your vehicle information, saved documents or Fuel Pass details to a Vehicle Wallet server. The app can work offline.</p>
      </>
    ),
  },
  {
    title: "Permissions you control",
    body: (
      <>
        <p>Depending on the features you use, the app may ask for access to:</p>
        <ul>
          <li><strong>Camera:</strong> to scan a Fuel Pass QR code.</li>
          <li><strong>Photos or files:</strong> to select documents or QR images to save in your wallet.</li>
          <li><strong>Notifications:</strong> to show local document-expiry reminders.</li>
          <li><strong>Biometrics:</strong> to let your device authenticate you when you choose biometric unlocking.</li>
        </ul>
        <p>You can manage permissions in your device settings. Turning off a permission may limit the related feature.</p>
      </>
    ),
  },
  {
    title: "Retention and deletion",
    body: (
      <p>Your information remains in the app until you remove it or clear the app’s data. Removing the app may remove locally stored information, subject to your device’s backup and restore settings. If you share or export a file using your device, that separate copy is managed by the destination app or service.</p>
    ),
  },
  {
    title: "Third-party services and this website",
    body: (
      <p>The app does not use advertising or analytics services as part of its wallet features. This landing website has no sign-up form, tracking pixels or analytics. If the website is hosted by a provider, that provider may process basic technical request data under its own policies.</p>
    ),
  },
  {
    title: "Children’s privacy",
    body: (
      <p>Vehicle Wallet is a general-purpose vehicle utility and is not designed to collect information from children through an online account or service.</p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>This policy may be updated when the app or its privacy practices change. The latest version will be published on this page with its revision date.</p>
    ),
  },
  {
    title: "Questions",
    body: (
      <p>For questions about this policy or the app, contact the app publisher through the store listing or distribution channel where you obtained Vehicle Wallet.</p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <div className="policy-hero-inner">
          <div className="eyebrow"><span className="eyebrow-line" /> THE IMPORTANT DETAILS</div>
          <h1>Your privacy<br /><span>comes first.</span></h1>
          <p>A clear look at how Vehicle Wallet handles information, what stays on your device, and the choices you have.</p>
          <span className="policy-date">LAST UPDATED · NOVEMBER 6, 2026</span>
        </div>
      </section>
      <div className="policy-content">
        <aside className="policy-aside">
          <div className="aside-note">
            <span className="aside-icon">⌑</span>
            <strong>Short version</strong>
            <p>Your wallet is designed to stay on your device. No account or cloud sync is needed.</p>
          </div>
          <Link to="/" className="back-home">← Back to home</Link>
        </aside>
        <article className="policy-article">
          <div className="policy-intro">
            <p>Vehicle Wallet is a personal vehicle-document and Fuel Pass QR wallet for Sri Lankan vehicle owners. This policy explains how information is handled when you use the mobile app and this website.</p>
          </div>
          {sections.map((section, index) => (
            <section className="policy-section" key={section.title}>
              <span className="policy-section-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title}</h2>
                <div className="policy-body">{section.body}</div>
              </div>
            </section>
          ))}
          <div className="policy-last-note">
            <span>✳</span>
            <p>Vehicle Wallet is designed to put you in control of what you choose to keep in your wallet.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
