export default function Home() {
  return (
    <div>
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:    #f8f5f0;
          --paper: #f2ede5;
          --stone: #e0d8cc;
          --ash:   #9c9088;
          --earth: #3d3328;
          --ink:   #211c16;
          --gold:  #a07848;
        }

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--ink);
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(248, 245, 240, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 0 64px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 36px;
          letter-spacing: 0.5px;
          color: var(--ink);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--ash);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          transition: color 0.3s;
        }

        .nav-links a:hover { color: var(--ink); }

        .btn-nav {
          color: var(--ink) !important;
          border: 1px solid var(--stone) !important;
          padding: 9px 24px !important;
          border-radius: 100px;
          letter-spacing: 0.8px !important;
          transition: background 0.3s, border-color 0.3s, color 0.3s !important;
        }

        .btn-nav:hover {
          background: var(--ink) !important;
          border-color: var(--ink) !important;
          color: var(--bg) !important;
        }

        .hero-wrap {
          padding: 168px 64px 108px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-wrap h1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: clamp(52px, 7vw, 88px);
          line-height: 1.1;
          color: var(--ink);
          letter-spacing: -1px;
          margin-bottom: 28px;
        }

        .hero-wrap .tagline {
          font-size: 18px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.7;
          margin-bottom: 48px;
          max-width: 520px;
        }

        .btn-cta {
          background: var(--ink);
          color: var(--bg);
          text-decoration: none;
          padding: 16px 36px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          transition: all 0.3s;
          display: inline-block;
        }

        .btn-cta:hover {
          background: var(--earth);
          transform: translateY(-1px);
        }

        .line {
          width: 100%;
          height: 1px;
          background: var(--stone);
          margin: 0;
        }

        .services-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 148px 64px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--ash);
          margin-bottom: 24px;
        }

        .services-intro {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(36px, 4.5vw, 52px);
          line-height: 1.15;
          color: var(--ink);
          letter-spacing: -0.5px;
          margin-bottom: 80px;
        }

        .service-item {
          padding: 40px 0;
          border-top: 1px solid var(--stone);
          display: grid;
          grid-template-columns: 80px 320px 1fr auto;
          gap: 40px;
          align-items: baseline;
        }

        .service-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 18px;
          color: var(--ash);
        }

        .service-item h3 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 24px;
          color: var(--ink);
          line-height: 1.3;
        }

        .service-item p {
          font-size: 14px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.9;
        }

        .service-link {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ash);
          text-decoration: none;
          transition: color 0.3s;
          white-space: nowrap;
        }

        .service-link:hover { color: var(--ink); }

        .process-wrap {
          background: var(--paper);
          padding: 148px 64px;
        }

        .process-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          align-items: start;
        }

        .process-header h2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(36px, 4.5vw, 52px);
          line-height: 1.15;
          color: var(--ink);
          letter-spacing: -0.5px;
          margin-bottom: 28px;
        }

        .process-header p {
          font-size: 14px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.9;
        }

        .step {
          margin-bottom: 56px;
        }

        .step-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 18px;
          color: var(--ash);
          margin-bottom: 12px;
        }

        .step h3 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 24px;
          color: var(--ink);
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .step p {
          font-size: 14px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.9;
        }

        .quote-wrap {
          max-width: 740px;
          margin: 0 auto;
          padding: 128px 64px;
          text-align: center;
        }

        .quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 96px;
          line-height: 0.6;
          color: var(--stone);
          display: block;
          margin-bottom: 16px;
        }

        .quote-wrap blockquote {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(24px, 3.5vw, 36px);
          line-height: 1.45;
          color: var(--earth);
          letter-spacing: -0.2px;
          margin-bottom: 36px;
        }

        .quote-attr {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--ash);
        }

        .industries-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 64px 148px;
        }

        .industries-wrap h2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(36px, 4.5vw, 52px);
          line-height: 1.15;
          color: var(--ink);
          letter-spacing: -0.5px;
          margin-bottom: 64px;
        }

        .industry-sub {
          font-size: 14px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.9;
          margin-bottom: 80px;
          max-width: 480px;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .industry-item {
          padding: 40px 0;
          border-top: 1px solid var(--stone);
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 40px;
          align-items: baseline;
        }

        .industry-item:nth-child(odd) {
          padding-right: 64px;
          border-right: 1px solid var(--stone);
        }

        .industry-item:nth-child(even) { padding-left: 64px; }

        .industry-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 19px;
          color: var(--ink);
          line-height: 1.35;
        }

        .industry-desc {
          font-size: 13px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.9;
        }

        .contact-wrap {
          background: var(--paper);
          padding: 128px 64px;
        }

        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-inner h2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(36px, 4.5vw, 52px);
          line-height: 1.15;
          color: var(--ink);
          letter-spacing: -0.5px;
          margin-bottom: 28px;
        }

        .contact-inner p {
          font-size: 14px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.9;
          margin-bottom: 48px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-email {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid var(--stone);
          padding-bottom: 4px;
          transition: border-color 0.3s;
        }

        .contact-email:hover {
          border-color: var(--ash);
        }

        footer {
          background: var(--bg);
          padding: 64px;
          text-align: center;
        }

        footer p {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ash);
        }

        @media (max-width: 900px) {
          nav { padding: 0 32px; }
          .nav-links { gap: 20px; }
          
          .hero-wrap { padding: 120px 32px 80px; }
          
          .services-wrap { padding: 100px 32px; }
          
          .service-item {
            grid-template-columns: 1fr;
            gap: 16px;
            text-align: left;
          }
          
          .process-wrap { padding: 100px 32px; }
          .process-inner {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .quote-wrap { padding: 80px 32px; }
          
          .industries-wrap { padding: 0 32px 100px; }
          .industries-grid { grid-template-columns: 1fr; }
          .industry-item { grid-template-columns: 1fr; gap: 16px; }
          .industry-item:nth-child(odd) { padding-right: 0; border-right: none; }
          .industry-item:nth-child(even) { padding-left: 0; }
          
          .contact-wrap { padding: 100px 32px; }
          footer { padding: 48px 32px; }
        }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">Studio217</a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact" className="btn-nav">Start a project</a></li>
        </ul>
      </nav>

      <section className="hero-wrap">
        <h1>Where Passion for Customer Experience Meets Expertise</h1>
        <p className="tagline">Studio217 is a NYC-based agency that helps brands deliver exceptional customer experiences, build AI-powered tools, and scale their customer base.</p>
        <a href="#contact" className="btn-cta">Start a project</a>
      </section>

      <div className="line"></div>

      <section id="services" className="services-wrap">
        <div className="section-label">Services</div>
        <p className="services-intro">Three disciplines.<br/>One integrated approach.</p>
        <div className="services-list">

          <div className="service-item">
            <div className="service-num">01</div>
            <h3>CX Consulting</h3>
            <p>We audit and redesign your customer experience end-to-end - service quality, loyalty programs, satisfaction tracking, and every touchpoint in between.</p>
            <a href="#contact" className="service-link">Learn more</a>
          </div>

          <div className="service-item">
            <div className="service-num">02</div>
            <h3>AI Innovation</h3>
            <p>We build AI-powered tools tailored to your workflows - automating the repetitive, surfacing the important, and making every person on your team more effective.</p>
            <a href="#contact" className="service-link">Learn more</a>
          </div>

          <div className="service-item">
            <div className="service-num">03</div>
            <h3>Growth</h3>
            <p>We generate the ideas that solve real business problems and scale customer bases - brand positioning, growth strategy, and the creative thinking that turns potential into traction.</p>
            <a href="#contact" className="service-link">Learn more</a>
          </div>

        </div>
      </section>

      <section id="process" className="process-wrap">
        <div className="process-inner">
          <div className="process-header">
            <h2>From kickoff<br/>to live - in weeks,<br/>not months.</h2>
            <p>We move fast without cutting corners. Every engagement starts with deep listening and ends with something that actually works.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <h3>We listen first</h3>
              <p>We map your workflows, pain points, and customer journey before writing a single line of strategy or code.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>We build it fast</h3>
              <p>Custom solutions built for your business - not templates, not generic tools, not a chatbot slapped on your website.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>You ship. We stay.</h3>
              <p>We handle updates, monitoring, and improvements so your team can focus on what they do best.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-wrap">
        <span className="quote-mark">"</span>
        <blockquote>They came in as consultants and left having built us an AI tool we use every single day. That&apos;s the difference.</blockquote>
        <cite className="quote-attr">STUDIO217 Client</cite>
      </section>

      <div className="line"></div>

      <section>
        <div className="industries-wrap">
          <h2>Built for<br/>every industry.</h2>
          <p className="industry-sub">From retail to hospitality - if your business runs on customer relationships, we can help.</p>
          <div className="industries-grid">

            <div className="industry-item">
              <div className="industry-name">Retail &<br/>E-commerce</div>
              <p className="industry-desc">Turn one-time shoppers into loyal regulars. We build retention programs and service experiences that keep customers coming back.</p>
            </div>

            <div className="industry-item">
              <div className="industry-name">Travel &<br/>Hospitality</div>
              <p className="industry-desc">Guest satisfaction is everything in this industry. We help hotels, agencies, and airlines deliver experiences worth talking about.</p>
            </div>

            <div className="industry-item">
              <div className="industry-name">Financial &<br/>Professional Services</div>
              <p className="industry-desc">Client trust is your product. We help firms build the service standards and loyalty systems that justify premium pricing.</p>
            </div>

            <div className="industry-item">
              <div className="industry-name">Tech<br/>& SaaS</div>
              <p className="industry-desc">Churn is a customer experience problem. We diagnose it, fix onboarding, and design touchpoints that turn users into advocates.</p>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="contact-wrap">
        <div className="contact-inner">
          <h2>Ready to build<br/>something great?</h2>
          <p>Whether it&apos;s strategy, technology, or growth - let&apos;s solve it together.</p>
          <a href="mailto:hello@studio217.ai" className="contact-email">hello@studio217.ai</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Studio217</p>
      </footer>
    </div>
  );
}