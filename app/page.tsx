"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:      #ffffff;
          --surface: #f7f7f5;
          --border:  #e8e6e1;
          --muted:   #a09d98;
          --text:    #3d3a36;
          --ink:     #1a1816;
          --accent:  #6b7c6e;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', -apple-system, sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 0 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid transparent;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        nav.scrolled {
          border-bottom-color: var(--border);
          box-shadow: 0 1px 24px rgba(0,0,0,0.03);
        }

        .nav-logo {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: 28px;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: -0.3px;
          transition: opacity 0.3s;
        }

        .nav-logo:hover { opacity: 0.7; }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 44px;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--muted);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          transition: color 0.3s;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--ink);
          transition: width 0.3s ease;
        }

        .nav-links a:hover { color: var(--ink); }
        .nav-links a:hover::after { width: 100%; }

        .btn-nav {
          color: var(--ink) !important;
          border: 1px solid var(--border) !important;
          padding: 10px 28px !important;
          border-radius: 100px;
          transition: all 0.35s ease !important;
        }

        .btn-nav::after { display: none !important; }

        .btn-nav:hover {
          background: var(--ink) !important;
          border-color: var(--ink) !important;
          color: #fff !important;
        }

        /* Hero */
        .hero-wrap {
          padding: 180px 72px 120px;
          max-width: 1060px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(32px);
          animation: fadeUp 1s ease forwards;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-wrap h1 {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: clamp(48px, 6.5vw, 80px);
          line-height: 1.08;
          color: var(--ink);
          letter-spacing: -1.5px;
          margin-bottom: 32px;
        }

        .hero-wrap .tagline {
          font-size: 17px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.75;
          margin-bottom: 52px;
          max-width: 500px;
        }

        .btn-cta {
          background: var(--ink);
          color: #fff;
          text-decoration: none;
          padding: 16px 40px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.35s ease;
          display: inline-block;
        }

        .btn-cta:hover {
          background: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(107, 124, 110, 0.2);
        }

        .line {
          max-width: 1100px;
          margin: 0 auto;
          height: 1px;
          background: var(--border);
        }

        /* Services */
        .services-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 160px 72px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 28px;
        }

        .services-intro {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: clamp(34px, 4.2vw, 50px);
          line-height: 1.15;
          color: var(--ink);
          letter-spacing: -0.5px;
          margin-bottom: 88px;
        }

        .service-item {
          padding: 44px 0;
          border-top: 1px solid var(--border);
          display: grid;
          grid-template-columns: 72px 280px 1fr auto;
          gap: 44px;
          align-items: baseline;
          transition: opacity 0.3s;
        }

        .service-item:hover { opacity: 0.75; }

        .service-num {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: 16px;
          color: var(--muted);
        }

        .service-item h3 {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: 24px;
          color: var(--ink);
          line-height: 1.3;
        }

        .service-item p {
          font-size: 14px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.85;
        }

        .service-link {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent);
          text-decoration: none;
          transition: color 0.3s;
          white-space: nowrap;
        }

        .service-link:hover { color: var(--ink); }

        /* Process */
        .process-wrap {
          background: var(--surface);
          padding: 160px 72px;
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
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: clamp(34px, 4.2vw, 50px);
          line-height: 1.15;
          color: var(--ink);
          letter-spacing: -0.5px;
          margin-bottom: 28px;
        }

        .process-header p {
          font-size: 14px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.85;
        }

        .step {
          margin-bottom: 60px;
          padding-left: 32px;
          border-left: 2px solid var(--border);
          transition: border-color 0.4s;
        }

        .step:hover { border-left-color: var(--accent); }

        .step-num {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: 14px;
          color: var(--accent);
          margin-bottom: 12px;
          letter-spacing: 1px;
        }

        .step h3 {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: 22px;
          color: var(--ink);
          line-height: 1.3;
          margin-bottom: 10px;
        }

        .step p {
          font-size: 14px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.85;
        }

        /* Quote */
        .quote-wrap {
          max-width: 780px;
          margin: 0 auto;
          padding: 140px 72px;
          text-align: center;
        }

        .quote-mark {
          font-family: 'DM Serif Display', serif;
          font-size: 80px;
          line-height: 0.5;
          color: var(--accent);
          display: block;
          margin-bottom: 20px;
          opacity: 0.5;
        }

        .quote-wrap blockquote {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-style: italic;
          font-size: clamp(22px, 3.2vw, 34px);
          line-height: 1.45;
          color: var(--text);
          letter-spacing: -0.2px;
          margin-bottom: 36px;
        }

        .quote-attr {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* Industries */
        .industries-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 72px 160px;
        }

        .industries-wrap h2 {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: clamp(34px, 4.2vw, 50px);
          line-height: 1.15;
          color: var(--ink);
          letter-spacing: -0.5px;
          margin-bottom: 20px;
        }

        .industry-sub {
          font-size: 14px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.85;
          margin-bottom: 80px;
          max-width: 460px;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .industry-item {
          padding: 44px 0;
          border-top: 1px solid var(--border);
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 40px;
          align-items: baseline;
          transition: opacity 0.3s;
        }

        .industry-item:hover { opacity: 0.7; }

        .industry-item:nth-child(odd) {
          padding-right: 64px;
          border-right: 1px solid var(--border);
        }

        .industry-item:nth-child(even) { padding-left: 64px; }

        .industry-name {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: 19px;
          color: var(--ink);
          line-height: 1.35;
        }

        .industry-desc {
          font-size: 13px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.85;
        }

        /* Contact */
        .contact-wrap {
          background: var(--surface);
          padding: 140px 72px;
        }

        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-inner h2 {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: clamp(34px, 4.2vw, 50px);
          line-height: 1.15;
          color: var(--ink);
          letter-spacing: -0.5px;
          margin-bottom: 28px;
        }

        .contact-inner p {
          font-size: 14px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.85;
          margin-bottom: 52px;
          max-width: 460px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-email {
          font-family: 'DM Serif Display', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--ink);
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }

        .contact-email::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--border);
          transition: background 0.3s;
        }

        .contact-email:hover { color: var(--accent); }
        .contact-email:hover::after { background: var(--accent); }

        /* Footer */
        footer {
          background: var(--bg);
          padding: 72px;
          text-align: center;
        }

        footer p {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* Mobile */
        @media (max-width: 900px) {
          nav { padding: 0 28px; height: 64px; }
          .nav-links { gap: 20px; }
          .nav-logo { font-size: 24px; }

          .hero-wrap { padding: 128px 28px 80px; }

          .line { margin: 0 28px; }

          .services-wrap { padding: 100px 28px; }
          .service-item {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .process-wrap { padding: 100px 28px; }
          .process-inner {
            grid-template-columns: 1fr;
            gap: 64px;
          }

          .quote-wrap { padding: 80px 28px; }

          .industries-wrap { padding: 0 28px 100px; }
          .industries-grid { grid-template-columns: 1fr; }
          .industry-item { grid-template-columns: 1fr; gap: 14px; }
          .industry-item:nth-child(odd) { padding-right: 0; border-right: none; }
          .industry-item:nth-child(even) { padding-left: 0; }

          .contact-wrap { padding: 100px 28px; }
          footer { padding: 48px 28px; }
        }

        @media (max-width: 600px) {
          .nav-links li:not(:last-child) { display: none; }
          .hero-wrap h1 { letter-spacing: -0.5px; }
        }
      `}</style>

      <nav className={scrolled ? "scrolled" : ""}>
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
        <span className="quote-mark">&ldquo;</span>
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
