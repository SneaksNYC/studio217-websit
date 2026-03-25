export default function Home() {
  return (
    <div>
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --black:    #0d0d0d;
          --dark:     #141414;
          --dark2:    #1a1a1a;
          --mid:      #272727;
          --mid2:     #2e2e2e;
          --gray:     #aaaaaa;
          --light:    #f0f0f0;
          --white:    #ffffff;
          --indigo:   #6366f1;
          --purple:   #a855f7;
          --pink:     #ec4899;
          --glow:     rgba(99,102,241,0.14);
          --font-display: 'Barlow Condensed', sans-serif;
          --font-body:    'DM Sans', sans-serif;
        }

        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        html { scroll-behavior: smooth; }

        body {
          background: var(--black);
          color: var(--white);
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.6;
          overflow-x: hidden;
        }

        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 48px;
          background: transparent;
          transition: background .35s, backdrop-filter .35s;
        }

        nav.scrolled {
          background: rgba(13,13,13,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--mid);
        }

        .nav-logo {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 26px;
          letter-spacing: 0.06em;
          color: var(--white);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--indigo), var(--purple));
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
        }

        .nav-links a {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: var(--gray);
          text-decoration: none;
          letter-spacing: .02em;
          transition: color .2s;
        }
        .nav-links a:hover { color: var(--white); }

        .nav-cta {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: var(--white) !important;
          background: linear-gradient(135deg, var(--indigo), var(--purple));
          padding: 10px 22px;
          border-radius: 100px;
          text-decoration: none;
          letter-spacing: .02em;
          transition: opacity .2s, transform .2s;
        }
        .nav-cta:hover { opacity: .85; transform: translateY(-1px); }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 130px 24px 90px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -55%);
          width: 900px; height: 900px;
          background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.05) 40%, transparent 70%);
          pointer-events: none;
        }

        .hero-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pulse {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: .3; }
        }

        .hero-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(90px, 17vw, 240px);
          line-height: 0.88;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
        }

        .line-white {
          display: block;
          color: var(--white);
        }

        .line-grad {
          display: block;
          background: linear-gradient(135deg, var(--indigo) 0%, var(--purple) 50%, var(--pink) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 36px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(16px, 2.5vw, 24px);
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--gray);
          position: relative;
          z-index: 1;
        }

        .sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--indigo);
          opacity: .6;
        }

        .hero-tagline {
          margin-top: 36px;
          font-size: 18px;
          color: rgba(255,255,255,.45);
          font-weight: 400;
          max-width: 540px;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .hero-actions {
          margin-top: 48px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          color: var(--white);
          background: linear-gradient(135deg, var(--indigo), var(--purple));
          padding: 15px 36px;
          border-radius: 100px;
          text-decoration: none;
          letter-spacing: .02em;
          transition: opacity .2s, transform .2s, box-shadow .2s;
          box-shadow: 0 0 32px rgba(99,102,241,.25);
        }
        .btn-primary:hover {
          opacity: .88;
          transform: translateY(-2px);
          box-shadow: 0 0 48px rgba(99,102,241,.4);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          color: var(--white);
          background: transparent;
          padding: 15px 36px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,.18);
          text-decoration: none;
          letter-spacing: .02em;
          transition: border-color .2s, transform .2s;
        }
        .btn-outline:hover {
          border-color: rgba(255,255,255,.5);
          transform: translateY(-2px);
        }

        .marquee-wrap {
          border-top: 1px solid var(--mid);
          border-bottom: 1px solid var(--mid);
          padding: 20px 0;
          overflow: hidden;
          background: var(--dark2);
        }

        .marquee-track {
          display: flex;
          gap: 56px;
          width: max-content;
          animation: marquee 28s linear infinite;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 18px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--gray);
        }

        .marquee-track span { opacity: .35; transition: opacity .2s; }
        .marquee-track span:hover { opacity: 1; }
        .marquee-track .sep-marquee { opacity: .15; color: var(--indigo); }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        section {
          padding: 110px 48px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: var(--indigo);
          margin-bottom: 18px;
        }

        .section-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(52px, 8vw, 104px);
          line-height: .9;
          letter-spacing: -.02em;
        }

        #products { border-top: 1px solid var(--mid); }

        .products-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          gap: 32px;
          flex-wrap: wrap;
        }

        .products-header p {
          max-width: 360px;
          color: rgba(255,255,255,.45);
          font-size: 16px;
          line-height: 1.75;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
        }

        .product-card {
          background: var(--dark2);
          padding: 48px 44px;
          position: relative;
          overflow: hidden;
          transition: background .25s;
          cursor: default;
        }

        .product-card:nth-child(1) { border-radius: 16px 0 0 0; }
        .product-card:nth-child(2) { border-radius: 0 16px 0 0; }
        .product-card:nth-child(3) { border-radius: 0 0 0 16px; }
        .product-card:nth-child(4) { border-radius: 0 0 16px 0; }

        .product-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--indigo), var(--purple), transparent);
          opacity: 0;
          transition: opacity .3s;
        }

        .product-card:hover { background: var(--mid); }
        .product-card:hover::before { opacity: 1; }

        .product-number {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 80px;
          color: rgba(255,255,255,.04);
          line-height: 1;
          margin-bottom: 20px;
          letter-spacing: -.02em;
          user-select: none;
        }

        .product-icon-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .product-icon {
          font-size: 28px;
        }

        .product-tag {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 100px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .tag-live { background: rgba(34,197,94,.1);  color: #22c55e; border: 1px solid rgba(34,197,94,.2); }

        .product-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 36px;
          letter-spacing: .04em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .product-desc {
          color: rgba(255,255,255,.45);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .product-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .product-features li {
          font-size: 13px;
          color: rgba(255,255,255,.4);
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .product-features li::before {
          content: '—';
          color: var(--indigo);
          font-weight: 700;
          font-size: 12px;
          flex-shrink: 0;
        }

        .stats-strip {
          border-top: 1px solid var(--mid);
          padding: 80px 48px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .stat { text-align: center; }

        .stat-number {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 72px;
          line-height: 1;
          letter-spacing: -.03em;
          background: linear-gradient(135deg, var(--indigo), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          margin-top: 8px;
          font-size: 12px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: rgba(255,255,255,.35);
        }

        footer {
          border-top: 1px solid var(--mid);
          padding: 44px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-brand {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 22px;
          letter-spacing: .06em;
          color: var(--white);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--indigo), var(--purple));
        }

        .footer-links {
          display: flex;
          gap: 24px;
          list-style: none;
        }

        .footer-links a {
          font-size: 13px;
          color: rgba(255,255,255,.3);
          text-decoration: none;
          letter-spacing: .04em;
          transition: color .2s;
        }
        .footer-links a:hover { color: var(--white); }

        .footer-copy {
          font-size: 13px;
          color: rgba(255,255,255,.25);
          letter-spacing: .04em;
        }

        @media (max-width: 900px) {
          nav { padding: 18px 22px; }
          .nav-links { display: none; }
          section { padding: 72px 22px; }
          .stats-strip { grid-template-columns: repeat(2, 1fr); padding: 60px 22px; }
          .products-grid { grid-template-columns: 1fr; }
          .product-card:nth-child(1) { border-radius: 16px 16px 0 0; }
          .product-card:nth-child(2) { border-radius: 0; }
          .product-card:nth-child(3) { border-radius: 0; }
          .product-card:nth-child(4) { border-radius: 0 0 16px 16px; }
          footer { flex-direction: column; text-align: center; padding: 32px 22px; }
        }
      `}</style>

      <nav id="navbar">
        <a href="#" className="nav-logo">
          <span className="logo-dot"></span>
          STUDIO217
        </a>
        <ul className="nav-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="nav-cta">Get Early Access</a></li>
        </ul>
      </nav>

      <header className="hero">
        <p className="hero-eyebrow">
          <span className="pulse"></span>
          Now in early access &nbsp;·&nbsp; studio217.ai
        </p>
        <h1 className="hero-title">
          <span className="line-white">AI OPS FOR</span>
          <span className="line-grad">TRAVEL</span>
        </h1>
        <div className="hero-sub">
          <span>Check-ins</span>
          <span className="sep"></span>
          <span>CC Auth</span>
          <span className="sep"></span>
          <span>Flight Tracking</span>
          <span className="sep"></span>
          <span>Automation</span>
        </div>
        <p className="hero-tagline">
          Studio217 builds intelligent tools that handle the repetitive work —
          so your team can focus on what actually matters.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get Early Access →</a>
          <a href="#products" className="btn-outline">See what we build</a>
        </div>
      </header>

      <div className="marquee-wrap">
        <div className="marquee-track">
          <span>AutoCheck</span><span className="sep-marquee">·</span>
          <span>AuthFlow</span><span className="sep-marquee">·</span>
          <span>FlyPal</span><span className="sep-marquee">·</span>
          <span>Foster AI</span><span className="sep-marquee">·</span>
          <span>American Airlines</span><span className="sep-marquee">·</span>
          <span>Delta</span><span className="sep-marquee">·</span>
          <span>United</span><span className="sep-marquee">·</span>
          <span>Emirates</span><span className="sep-marquee">·</span>
          <span>Lufthansa</span><span className="sep-marquee">·</span>
          <span>Singapore Airlines</span><span className="sep-marquee">·</span>
          <span>Studio217</span><span className="sep-marquee">·</span>
          <span>AutoCheck</span><span className="sep-marquee">·</span>
          <span>AuthFlow</span><span className="sep-marquee">·</span>
          <span>FlyPal</span><span className="sep-marquee">·</span>
          <span>Foster AI</span><span className="sep-marquee">·</span>
          <span>American Airlines</span><span className="sep-marquee">·</span>
          <span>Delta</span><span className="sep-marquee">·</span>
          <span>United</span><span className="sep-marquee">·</span>
          <span>Emirates</span><span className="sep-marquee">·</span>
          <span>Lufthansa</span><span className="sep-marquee">·</span>
          <span>Singapore Airlines</span><span className="sep-marquee">·</span>
          <span>Studio217</span><span className="sep-marquee">·</span>
        </div>
      </div>

      <section id="products">
        <div className="products-header">
          <div>
            <p className="section-label">Our Products</p>
            <h2 className="section-title">What we<br/>build</h2>
          </div>
          <p>Four focused tools for travel professionals. Each one automates a task your team shouldn&apos;t be doing manually.</p>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <div className="product-number">01</div>
            <div className="product-icon-row">
              <span className="product-icon">✈️</span>
              <span className="product-tag tag-live">Live</span>
            </div>
            <h3 className="product-name">AutoCheck</h3>
            <p className="product-desc">
              Automatically checks in passengers the moment the window opens — across every major airline, every flight, every time.
            </p>
            <ul className="product-features">
              <li>American, Delta, United, Southwest + 7 more</li>
              <li>Seat selection & boarding pass delivery</li>
              <li>Google Sheets integration for your roster</li>
              <li>Telegram alerts on every check-in</li>
            </ul>
          </div>

          <div className="product-card">
            <div className="product-number">02</div>
            <div className="product-icon-row">
              <span className="product-icon">💳</span>
              <span className="product-tag tag-live">Live</span>
            </div>
            <h3 className="product-name">AuthFlow</h3>
            <p className="product-desc">
              Automates hotel credit card authorization requests — finds the right contact, sends the form, tracks replies, follows up automatically.
            </p>
            <ul className="product-features">
              <li>Auto-discovers hotel email addresses</li>
              <li>Sends branded CC auth request emails</li>
              <li>Tracks replies & escalates if no response</li>
              <li>Hotel directory built & maintained automatically</li>
            </ul>
          </div>

          <div className="product-card">
            <div className="product-number">03</div>
            <div className="product-icon-row">
              <span className="product-icon">🛫</span>
              <span className="product-tag tag-live">Live</span>
            </div>
            <h3 className="product-name">FlyPal</h3>
            <p className="product-desc">
              Real-time flight tracking with shareable codes. Send a link — anyone can watch your flight live, no app required.
            </p>
            <ul className="product-features">
              <li>Live flight status & tracking</li>
              <li>Shareable codes for clients & families</li>
              <li>Telegram notifications on delays & gates</li>
              <li>Available at flypal.app</li>
            </ul>
          </div>

          <div className="product-card">
            <div className="product-number">04</div>
            <div className="product-icon-row">
              <span className="product-icon">🤖</span>
              <span className="product-tag tag-live">Live</span>
            </div>
            <h3 className="product-name">Foster</h3>
            <p className="product-desc">
              The AI agent infrastructure behind all Studio217 products — available as a platform to build your own travel automations.
            </p>
            <ul className="product-features">
              <li>Connect to any airline or hotel system</li>
              <li>Build custom automation workflows</li>
              <li>Telegram, email & Sheets built-in</li>
              <li>No code required</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="stat">
          <div className="stat-number">10+</div>
          <p className="stat-label">Airlines automated</p>
        </div>
        <div className="stat">
          <div className="stat-number">24/7</div>
          <p className="stat-label">Always running</p>
        </div>
        <div className="stat">
          <div className="stat-number">100%</div>
          <p className="stat-label">Hands-free check-ins</p>
        </div>
        <div className="stat">
          <div className="stat-number">&lt;2s</div>
          <p className="stat-label">Avg. response time</p>
        </div>
      </div>

      <footer>
        <span className="footer-brand">
          <span className="footer-dot"></span>
          STUDIO217
        </span>
        <ul className="footer-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="https://flypal.app">FlyPal</a></li>
          <li><a href="mailto:hello@studio217.ai">Contact</a></li>
        </ul>
        <span className="footer-copy">© 2026 Studio217. All rights reserved.</span>
      </footer>

      <script dangerouslySetInnerHTML={{
        __html: `
          setTimeout(() => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
              window.addEventListener('scroll', () => {
                navbar.classList.toggle('scrolled', window.scrollY > 60);
              });
            }
          }, 100);
        `
      }} />
    </div>
  );
}