"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Nav scroll effect
    const nav = document.querySelector("nav");
    const onScroll = () => {
      if (nav) {
        nav.classList.toggle("nav-scrolled", window.scrollY > 40);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:      #F9FAFB;
          --paper:   #FFFFFF;
          --border:  #E2E8F0;
          --muted:   #94A3B8;
          --ash:     #64748B;
          --ink:     #1E293B;
          --deep:    #0F172A;
          --accent:  #C9A96E;
          --accent2: #3B82F6;
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

        /* — Reveal animation — */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-d1 { transition-delay: 0.08s; }
        .reveal-d2 { transition-delay: 0.16s; }
        .reveal-d3 { transition-delay: 0.24s; }
        .reveal-d4 { transition-delay: 0.32s; }

        /* — Nav — */
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(249, 250, 251, 0.85);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          padding: 0 64px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid transparent;
          transition: border-color 0.4s, box-shadow 0.4s;
        }

        nav.nav-scrolled {
          border-bottom-color: var(--border);
          box-shadow: 0 1px 12px rgba(15,23,42,0.04);
        }

        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 36px;
          letter-spacing: 0.5px;
          color: var(--deep);
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
          position: relative;
        }

        .nav-links a:not(.btn-nav)::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--ink);
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
        }

        .nav-links a:not(.btn-nav):hover::after { width: 100%; }
        .nav-links a:hover { color: var(--ink); }

        .btn-nav {
          color: var(--ink) !important;
          border: 1px solid var(--border) !important;
          padding: 9px 24px !important;
          border-radius: 100px;
          letter-spacing: 0.8px !important;
          transition: background 0.35s, border-color 0.35s, color 0.35s, box-shadow 0.35s !important;
        }

        .btn-nav:hover {
          background: var(--deep) !important;
          border-color: var(--deep) !important;
          color: #fff !important;
          box-shadow: 0 4px 16px rgba(15,23,42,0.12) !important;
        }

        /* — Hero — */
        .hero-wrap {
          padding: 168px 64px 108px;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
        }

        .hero-wrap::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -200px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-wrap h1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: clamp(52px, 7vw, 88px);
          line-height: 1.1;
          color: var(--deep);
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
          background: var(--deep);
          color: #fff;
          text-decoration: none;
          padding: 16px 36px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          transition: all 0.35s cubic-bezier(0.22,1,0.36,1);
          display: inline-block;
        }

        .btn-cta:hover {
          background: var(--ink);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15,23,42,0.14);
        }

        .line {
          max-width: 1100px;
          margin: 0 auto;
          height: 1px;
          background: var(--border);
          margin-left: auto;
          margin-right: auto;
          padding: 0 64px;
        }

        /* — Services — */
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
          color: var(--accent);
          margin-bottom: 24px;
        }

        .services-intro {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(36px, 4.5vw, 52px);
          line-height: 1.15;
          color: var(--deep);
          letter-spacing: -0.5px;
          margin-bottom: 80px;
        }

        .service-item {
          padding: 40px 32px;
          border-top: 1px solid var(--border);
          display: grid;
          grid-template-columns: 80px 320px 1fr auto;
          gap: 40px;
          align-items: baseline;
          border-radius: 8px;
          transition: background 0.35s, box-shadow 0.35s, transform 0.35s;
        }

        .service-item:hover {
          background: var(--paper);
          box-shadow: 0 4px 24px rgba(15,23,42,0.05);
          transform: translateY(-2px);
        }

        .service-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 18px;
          color: var(--muted);
        }

        .service-item h3 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 24px;
          color: var(--deep);
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
          color: var(--muted);
          text-decoration: none;
          transition: color 0.3s, letter-spacing 0.3s;
          white-space: nowrap;
        }

        .service-link:hover { color: var(--accent); letter-spacing: 2.5px; }

        /* — Process — */
        .process-wrap {
          background: var(--paper);
          padding: 148px 64px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
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
          color: var(--deep);
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
          padding-left: 28px;
          border-left: 2px solid var(--border);
          transition: border-color 0.4s;
        }

        .step:hover { border-left-color: var(--accent); }

        .step-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 18px;
          color: var(--muted);
          margin-bottom: 12px;
        }

        .step h3 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 24px;
          color: var(--deep);
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .step p {
          font-size: 14px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.9;
        }

        /* — Quote — */
        .quote-wrap {
          max-width: 740px;
          margin: 0 auto;
          padding: 128px 64px;
          text-align: center;
          position: relative;
        }

        .quote-wrap::before,
        .quote-wrap::after {
          content: '';
          position: absolute;
          width: 60px;
          height: 1px;
          background: var(--border);
          top: 50%;
        }
        .quote-wrap::before { left: -40px; }
        .quote-wrap::after { right: -40px; }

        .quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 96px;
          line-height: 0.6;
          color: var(--accent);
          display: block;
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .quote-wrap blockquote {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(24px, 3.5vw, 36px);
          line-height: 1.45;
          color: var(--ink);
          letter-spacing: -0.2px;
          margin-bottom: 36px;
        }

        .quote-attr {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* — Industries — */
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
          color: var(--deep);
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
          padding: 40px 32px;
          border-top: 1px solid var(--border);
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 40px;
          align-items: baseline;
          border-radius: 8px;
          transition: background 0.35s, box-shadow 0.35s;
        }

        .industry-item:hover {
          background: var(--paper);
          box-shadow: 0 2px 16px rgba(15,23,42,0.04);
        }

        .industry-item:nth-child(odd) {
          padding-right: 64px;
          border-right: 1px solid var(--border);
        }

        .industry-item:nth-child(even) { padding-left: 64px; }

        .industry-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 19px;
          color: var(--deep);
          line-height: 1.35;
        }

        .industry-desc {
          font-size: 13px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.9;
        }

        /* — Contact — */
        .contact-wrap {
          background: var(--paper);
          padding: 128px 64px;
          border-top: 1px solid var(--border);
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
          color: var(--deep);
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
          color: var(--deep);
          text-decoration: none;
          border-bottom: 1px solid var(--border);
          padding-bottom: 4px;
          transition: border-color 0.3s, color 0.3s;
        }

        .contact-email:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* — Footer — */
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
          color: var(--muted);
        }

        /* — Responsive — */
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
          .quote-wrap::before, .quote-wrap::after { display: none; }
          
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
        <h1 className="reveal">Where Passion for Customer Experience Meets Expertise</h1>
        <p className="tagline reveal reveal-d1">Studio217 is a NYC-based agency that helps brands deliver exceptional customer experiences, build AI-powered tools, and scale their customer base.</p>
        <a href="#contact" className="btn-cta reveal reveal-d2">Start a project</a>
      </section>

      <div className="line"></div>

      <section id="services" className="services-wrap">
        <div className="section-label reveal">Services</div>
        <p className="services-intro reveal">Three disciplines.<br/>One integrated approach.</p>
        <div className="services-list">

          <div className="service-item reveal">
            <div className="service-num">01</div>
            <h3>CX Consulting</h3>
            <p>We audit and redesign your customer experience end-to-end - service quality, loyalty programs, satisfaction tracking, and every touchpoint in between.</p>
            <a href="#contact" className="service-link">Learn more</a>
          </div>

          <div className="service-item reveal reveal-d1">
            <div className="service-num">02</div>
            <h3>AI Innovation</h3>
            <p>We build AI-powered tools tailored to your workflows - automating the repetitive, surfacing the important, and making every person on your team more effective.</p>
            <a href="#contact" className="service-link">Learn more</a>
          </div>

          <div className="service-item reveal reveal-d2">
            <div className="service-num">03</div>
            <h3>Growth</h3>
            <p>We generate the ideas that solve real business problems and scale customer bases - brand positioning, growth strategy, and the creative thinking that turns potential into traction.</p>
            <a href="#contact" className="service-link">Learn more</a>
          </div>

        </div>
      </section>

      <section id="process" className="process-wrap">
        <div className="process-inner">
          <div className="process-header reveal">
            <h2>From kickoff<br/>to live - in weeks,<br/>not months.</h2>
            <p>We move fast without cutting corners. Every engagement starts with deep listening and ends with something that actually works.</p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="step-num">01</div>
              <h3>We listen first</h3>
              <p>We map your workflows, pain points, and customer journey before writing a single line of strategy or code.</p>
            </div>
            <div className="step reveal reveal-d1">
              <div className="step-num">02</div>
              <h3>We build it fast</h3>
              <p>Custom solutions built for your business - not templates, not generic tools, not a chatbot slapped on your website.</p>
            </div>
            <div className="step reveal reveal-d2">
              <div className="step-num">03</div>
              <h3>You ship. We stay.</h3>
              <p>We handle updates, monitoring, and improvements so your team can focus on what they do best.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-wrap reveal">
        <span className="quote-mark">&ldquo;</span>
        <blockquote>They came in as consultants and left having built us an AI tool we use every single day. That&apos;s the difference.</blockquote>
        <cite className="quote-attr">STUDIO217 Client</cite>
      </section>

      <div className="line"></div>

      <section>
        <div className="industries-wrap">
          <h2 className="reveal">Built for<br/>every industry.</h2>
          <p className="industry-sub reveal">From retail to hospitality - if your business runs on customer relationships, we can help.</p>
          <div className="industries-grid">

            <div className="industry-item reveal">
              <div className="industry-name">Retail &<br/>E-commerce</div>
              <p className="industry-desc">Turn one-time shoppers into loyal regulars. We build retention programs and service experiences that keep customers coming back.</p>
            </div>

            <div className="industry-item reveal reveal-d1">
              <div className="industry-name">Travel &<br/>Hospitality</div>
              <p className="industry-desc">Guest satisfaction is everything in this industry. We help hotels, agencies, and airlines deliver experiences worth talking about.</p>
            </div>

            <div className="industry-item reveal reveal-d2">
              <div className="industry-name">Financial &<br/>Professional Services</div>
              <p className="industry-desc">Client trust is your product. We help firms build the service standards and loyalty systems that justify premium pricing.</p>
            </div>

            <div className="industry-item reveal reveal-d3">
              <div className="industry-name">Tech<br/>& SaaS</div>
              <p className="industry-desc">Churn is a customer experience problem. We diagnose it, fix onboarding, and design touchpoints that turn users into advocates.</p>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="contact-wrap">
        <div className="contact-inner reveal">
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
