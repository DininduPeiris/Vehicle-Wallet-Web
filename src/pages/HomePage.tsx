import { Link } from "react-router-dom";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function HeroIllustration() {
  return (
    <div className="hero-art" aria-label="Illustration of the Vehicle Wallet app">
      <div className="art-sun" />
      <div className="art-road">
        <span />
        <span />
        <span />
      </div>
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="phone">
        <div className="phone-top">
          <span>9:41</span>
          <span className="phone-signal">●●● ▰</span>
        </div>
        <div className="phone-heading">
          <div>
            <small>GOOD MORNING</small>
            <strong>Your garage</strong>
          </div>
          <span className="avatar">D</span>
        </div>
        <div className="fuel-card">
          <div className="fuel-label"><span className="tiny-spark">✳</span> FUEL PASS</div>
          <div className="qr-box" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none">
              <path d="M3 3h22v22H3zM39 3h22v22H39zM3 39h22v22H3z" stroke="currentColor" strokeWidth="5" />
              <path d="M11 11h6v6h-6zM47 11h6v6h-6zM11 47h6v6h-6zM34 32h7v7h-7zM48 34h5v5h-5zM31 47h7v7h-7zM43 48h4v4h-4zM53 45h7v12h-7z" fill="currentColor" />
            </svg>
          </div>
          <div className="fuel-foot"><span>Tap for full-screen QR</span><span>↗</span></div>
        </div>
        <div className="vehicle-card">
          <div className="vehicle-icon">↗</div>
          <div><small>YOUR VEHICLE</small><strong>Everyday drive</strong></div>
          <span className="vehicle-chevron">›</span>
          <div className="car-illustration">
            <svg viewBox="0 0 210 70" fill="none" aria-hidden="true">
              <path d="M25 42 39 22c3-5 8-8 14-8h77c7 0 12 3 16 8l17 20 18 5c5 1 8 5 8 10v5H14v-7c0-5 4-10 11-11Z" fill="#204B3D" />
              <path d="m55 20-12 20h54V16H57c-1 0-2 2-2 4ZM103 16v24h51l-15-19c-2-3-5-5-9-5h-27Z" fill="#C5E5D2" />
              <path d="M19 48h170" stroke="#153B30" strokeWidth="5" />
              <circle cx="53" cy="59" r="12" fill="#142D26" /><circle cx="53" cy="59" r="5" fill="#B7C9BE" />
              <circle cx="159" cy="59" r="12" fill="#142D26" /><circle cx="159" cy="59" r="5" fill="#B7C9BE" />
              <path d="M18 45h14M177 45h11" stroke="#FFD47E" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="phone-tabbar"><span className="tab-active">⌂</span><span>▤</span><span>▣</span><span>⚙</span></div>
      </div>
      <div className="float-note note-reminder">
        <span className="note-icon">◷</span>
        <span><strong>Heads up</strong><small>Licence due in 14 days</small></span>
      </div>
      <div className="float-note note-lock">
        <span className="lock-icon">⌑</span>
        <span><strong>Just yours</strong><small>Private by design</small></span>
      </div>
      <div className="art-caption"><span className="caption-dot" /> YOUR EVERYDAY, A LITTLE EASIER</div>
    </div>
  );
}

const features = [
  {
    number: "01",
    icon: "▣",
    title: "Fuel pass, ready",
    text: "Keep your Fuel Pass QR in one handy spot and bring it up full-screen when it’s time to refuel.",
    tone: "mint",
  },
  {
    number: "02",
    icon: "▤",
    title: "Your documents, together",
    text: "Collect your revenue licence, insurance, emission test and other vehicle papers in one wallet.",
    tone: "peach",
  },
  {
    number: "03",
    icon: "◷",
    title: "A timely little nudge",
    text: "Set local reminders for important expiry dates, so renewals feel less last-minute.",
    tone: "yellow",
  },
  {
    number: "04",
    icon: "⌑",
    title: "Built around your privacy",
    text: "No account to create. Your wallet is designed to work offline, with data kept on your device.",
    tone: "lilac",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A CALMER WAY TO BE ROAD-READY</div>
          <h1>Your road life,<br />all in <span>one place.</span></h1>
          <p className="hero-description">
            Vehicle details, important papers and your Fuel Pass QR — right where you need them, even when you’re offline.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#features">Take a look <ArrowIcon /></a>
            <a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof">
            <div className="proof-icon">✳</div>
            <div><strong>Made for Sri Lankan roads</strong><span>Cars, bikes, three-wheelers & more</span></div>
          </div>
        </div>
        <HeroIllustration />
      </section>

      <section className="trust-strip" aria-label="App highlights">
        <div className="trust-inner">
          <span><i>✳</i> Offline by design</span>
          <span><i>⌑</i> No account needed</span>
          <span><i>◷</i> Helpful expiry reminders</span>
          <span><i>⌂</i> Made for your vehicles</span>
        </div>
      </section>

      <section className="features-section section-wrap" id="features">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> ONE WALLET. LESS TO REMEMBER.</div>
            <h2>Small details.<br /><span>Smoother days.</span></h2>
          </div>
          <p>The things you reach for on the road deserve a place that’s simple to find — and simple to use.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className={`feature-icon ${feature.tone}`}>{feature.icon}</div>
              <div className="feature-number">{feature.number}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className="feature-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" id="how-it-works">
        <div className="story-wrap section-wrap">
          <div className="story-art">
            <div className="story-sun" />
            <div className="story-circle circle-back" />
            <div className="story-circle circle-front" />
            <div className="story-road"><span /><span /></div>
            <div className="story-card card-one"><span className="paper-icon">▤</span><span><small>DOCUMENT</small><strong>Insurance card</strong></span><i>✓</i></div>
            <div className="story-card card-two"><span className="paper-icon">◷</span><span><small>REMINDER</small><strong>Renewal coming up</strong></span></div>
            <div className="story-car">✦<span>✦</span></div>
            <div className="story-label">KEEP MOVING<br /><b>AT YOUR PACE.</b></div>
          </div>
          <div className="story-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> MADE FOR REAL-LIFE ROUTINES</div>
            <h2>Less searching.<br /><span>More going.</span></h2>
            <p>Add your vehicle, save the documents you need, and keep your Fuel Pass QR close. Vehicle Wallet brings your everyday essentials into one simple, offline-friendly space.</p>
            <div className="steps">
              <div className="step"><span>1</span><div><strong>Add your ride</strong><small>Car, motorcycle, three-wheeler, van or more.</small></div></div>
              <div className="step"><span>2</span><div><strong>Bring the essentials</strong><small>Save vehicle papers and a Fuel Pass QR.</small></div></div>
              <div className="step"><span>3</span><div><strong>Get on with your day</strong><small>Find what you need, online or off.</small></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section section-wrap" id="privacy">
        <div className="privacy-card">
          <div className="privacy-copy">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> YOUR WALLET, YOUR BUSINESS</div>
            <h2>Private by nature.<br /><span>Useful by design.</span></h2>
            <p>Your vehicle information stays on your device. No account, no cloud sync, no analytics — just the essentials you choose to keep in your wallet.</p>
            <Link className="privacy-link" to="/privacy-policy">Read our privacy policy <ArrowIcon /></Link>
          </div>
          <div className="privacy-visual">
            <div className="privacy-ring ring-outer" />
            <div className="privacy-ring ring-inner" />
            <div className="privacy-lock">
              <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <path d="M24 37v-9a16 16 0 0 1 32 0v9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <rect x="17" y="35" width="46" height="34" rx="8" fill="currentColor" />
                <circle cx="40" cy="51" r="4" fill="#174438" />
                <path d="M40 55v6" stroke="#174438" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <span className="privacy-orbit-dot dot-top" />
            <span className="privacy-orbit-dot dot-side" />
            <span className="privacy-visual-caption">YOUR DATA<br /><b>STAYS YOURS</b></span>
          </div>
        </div>
      </section>

      <section className="closing-section section-wrap">
        <span className="closing-spark">✳</span>
        <h2>Ready for a little more<br /><span>peace of mind?</span></h2>
        <p>Keep the important things close. Let the rest of the day unfold.</p>
        <a href="#features" className="button button-dark">Explore the wallet <ArrowIcon /></a>
      </section>
    </main>
  );
}
