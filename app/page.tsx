'use client';

export default function Home() {
  return (
    <div>
      <style jsx global>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --bg: #faf9f7;
          --bg-card: #ffffff;
          --bg-card-hover: #f5f4f2;
          --border: #e8e6e0;
          --accent: #8B4513;
          --accent-light: #A0522D;
          --accent-dark: #654321;
          --brown-primary: #8B4513;
          --brown-secondary: #CD853F;
          --brown-light: #DEB887;
          --text: #2c2826;
          --text-muted: #6b6562;
          --text-light: #8a857f;
          --white: #ffffff;
          --cream: #f9f7f4;
          --radius: 16px;
          --radius-sm: 10px;
        }

        html { scroll-behavior: smooth; }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        section { padding: 120px 0; }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(250, 249, 247, 0.95);
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 16px 0;
        }
        nav .container {
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem; font-weight: 700; color: var(--brown-primary);
          text-decoration: none; letter-spacing: -0.5px;
        }
        .nav-logo span { color: var(--brown-secondary); }
        .nav-links { display: flex; gap: 32px; align-items: center; }
        .nav-links a {
          color: var(--text-muted); text-decoration: none; font-size: 0.9rem;
          font-weight: 500; transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--brown-primary); }

        .hero {
          padding: 180px 0 120px;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--cream) 0%, var(--bg) 100%);
        }
        .hero-content { position: relative; z-index: 1; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--white); border: 1px solid var(--border);
          padding: 8px 20px; border-radius: 100px;
          font-size: 0.85rem; color: var(--brown-primary);
          margin-bottom: 32px; font-weight: 500;
          box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
        }
        .hero-badge .dot {
          width: 8px; height: 8px; background: var(--brown-secondary);
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(139,69,19,.7);
          animation: pulse-badge 1.5s infinite;
        }
        @keyframes pulse-badge {
          0% { transform: scale(.95); box-shadow: 0 0 0 0 rgba(139,69,19,.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(139,69,19,0); }
          100% { transform: scale(.95); box-shadow: 0 0 0 0 rgba(139,69,19,0); }
        }
        .hero h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 800; line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 24px;
          color: var(--text);
        }
        .hero h1 em {
          font-style: normal;
          color: var(--brown-primary);
        }
        .hero p {
          font-size: 1.25rem; color: var(--text-muted);
          max-width: 600px; margin: 0 auto 48px;
          line-height: 1.8; letter-spacing: 0.2px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 64px;
        }
        .service-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 40px 32px;
          transition: all 0.4s cubic-bezier(.25,.8,.25,1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(139, 69, 19, 0.08);
        }
        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--brown-light);
          box-shadow: 0 20px 60px rgba(139, 69, 19, 0.15);
        }
        .service-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--brown-primary);
          margin-bottom: 16px;
          letter-spacing: 1px;
        }
        .service-emoji {
          font-size: 2.5rem;
          margin-bottom: 24px;
          display: block;
        }
        .service-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .service-card p {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .service-features {
          list-style: none;
          padding: 0;
        }
        .service-features li {
          color: var(--text-muted);
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
          font-size: 0.9rem;
        }
        .service-features li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--brown-primary);
        }

        .stats {
          background: var(--cream);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 48px;
          margin: 64px 0;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 40px;
          text-align: center;
        }
        .stat h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--brown-primary);
          margin-bottom: 8px;
          letter-spacing: -1px;
        }
        .stat p {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 64px;
        }
        .process-step {
          text-align: center;
        }
        .process-step h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--brown-primary);
          margin-bottom: 16px;
        }
        .process-step p {
          color: var(--text-muted);
          line-height: 1.6;
        }

        footer {
          text-align: center;
          padding: 80px 0;
          border-top: 1px solid var(--border);
          background: var(--cream);
        }
        .footer-logo {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--brown-primary);
          margin-bottom: 24px;
          letter-spacing: -1px;
        }
        .footer-contact {
          color: var(--brown-secondary);
          font-weight: 600;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hero { padding: 140px 0 100px; }
          .hero h1 { font-size: 2.5rem; }
          .hero p { font-size: 1.1rem; }
          section { padding: 80px 0; }
          .service-card { padding: 32px 24px; }
          .stats { padding: 32px 24px; }
          .stats-grid { gap: 24px; }
        }
      `}</style>

      <nav>
        <div className="container">
          <a href="/" className="nav-logo">STUDIO<span>217</span></a>
          <div className="nav-links">
            <a href="#services">Products</a>
            <a href="#process">How it Works</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Get Early Access</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="dot"></div>
              Now in early access  ·  studio217.ai
            </div>
            <h1>AI automation for the <em>travel industry</em></h1>
            <p>Studio217 builds intelligent tools that handle the repetitive work — so your travel team can focus on what actually matters.</p>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "2.5rem",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "24px",
            color: "var(--brown-primary)"
          }}>Four tools. One integrated approach.</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>
              <span className="service-emoji">✈️</span>
              <h3>AutoCheck</h3>
              <p>Automatically checks in passengers the moment the window opens — across every major airline, every flight, every time.</p>
              <ul className="service-features">
                <li>American, Delta, United, Southwest + 7 more</li>
                <li>Seat selection & boarding pass delivery</li>
                <li>Google Sheets integration for your roster</li>
                <li>Telegram alerts on every check-in</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>
              <span className="service-emoji">💳</span>
              <h3>AuthFlow</h3>
              <p>Automates hotel credit card authorization requests — finds the right contact, sends the form, tracks replies, follows up automatically.</p>
              <ul className="service-features">
                <li>Auto-discovers hotel email addresses</li>
                <li>Sends branded CC auth request emails</li>
                <li>Tracks replies & escalates if no response</li>
                <li>Hotel directory built & maintained automatically</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>
              <span className="service-emoji">🛫</span>
              <h3>FlyPal</h3>
              <p>Real-time flight tracking with shareable codes. Send a link — anyone can watch your flight live, no app required.</p>
              <ul className="service-features">
                <li>Live flight status & tracking</li>
                <li>Shareable codes for clients & families</li>
                <li>Telegram notifications on delays & gates</li>
                <li>Available at flypal.app</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">04</div>
              <span className="service-emoji">🤖</span>
              <h3>Foster AI</h3>
              <p>The AI agent infrastructure behind all Studio217 products — available as a platform to build your own travel automations.</p>
              <ul className="service-features">
                <li>Connect to any airline or hotel system</li>
                <li>Build custom automation workflows</li>
                <li>Telegram, email & Sheets built-in</li>
                <li>No code required</li>
              </ul>
            </div>
          </div>

          <div className="stats">
            <div className="stats-grid">
              <div className="stat">
                <h4>10+</h4>
                <p>Airlines automated</p>
              </div>
              <div className="stat">
                <h4>24/7</h4>
                <p>Always running</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Hands-free check-ins</p>
              </div>
              <div className="stat">
                <h4>&lt;2s</h4>
                <p>Avg. response time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="container">
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "2.5rem",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "64px",
            color: "var(--brown-primary)"
          }}>Built by people who actually know travel ops</h2>
          
          <div className="process-grid">
            <div className="process-step">
              <h4>01 • Connect your roster</h4>
              <p>Link your Google Sheet with passenger details, booking references, and hotel names. That&apos;s your source of truth.</p>
            </div>
            
            <div className="process-step">
              <h4>02 • We go to work</h4>
              <p>Our agents monitor check-in windows, find hotel contacts, send authorization requests, and track replies — all automatically.</p>
            </div>
            
            <div className="process-step">
              <h4>03 • You get notified</h4>
              <p>Every action shows up in Telegram instantly. Boarding passes, auth confirmations, delays — you&apos;re always in the loop.</p>
            </div>
            
            <div className="process-step">
              <h4>04 • Sheet stays updated</h4>
              <p>Every result writes back in real time. Seats, statuses, emails found — full audit trail, always current.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container">
          <div className="footer-logo">Let&apos;s Automate</div>
          <div className="footer-contact">hello@studio217.ai</div>
        </div>
      </footer>
    </div>
  );
}