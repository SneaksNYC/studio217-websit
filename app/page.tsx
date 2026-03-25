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
          --bg:      #FAFAF8;
          --paper:   #FFFFFF;
          --cream:   #F5F3EE;
          --border:  #E8E4DC;
          --muted:   #9C9585;
          --ash:     #6B6560;
          --ink:     #1a1a2e;
          --deep:    #0f172a;
          --accent:  #B8860B;
          --accent-soft: rgba(184,134,11,0.08);
          --accent-mid: rgba(184,134,11,0.15);
        }

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        ::selection {
          background: var(--accent);
          color: #fff;
        }

        /* — Reveal animation — */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-d1 { transition-delay: 0.12s; }
        .reveal-d2 { transition-delay: 0.24s; }
        .reveal-d3 { transition-delay: 0.36s; }
        .reveal-d4 { transition-delay: 0.48s; }

        /* — Nav — */
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(250, 250, 248, 0.6);
          backdrop-filter: blur(24px) saturate(1.2);
          -webkit-backdrop-filter: blur(24px) saturate(1.2);
          padding: 0 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid transparent;
          transition: border-color 0.5s, background 0.5s, box-shadow 0.5s;
        }

        nav.nav-scrolled {
          background: rgba(250, 250, 248, 0.92);
          border-bottom-color: var(--border);
          box-shadow: 0 1px 20px rgba(15,23,42,0.03);
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 28px;
          letter-spacing: -0.5px;
          color: var(--deep);
          text-decoration: none;
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
          color: var(--ash);
          font-size: 11.5px;
          font-weight: 400;
          letter-spacing: 1.8px;
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
          background: var(--accent);
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        .nav-links a:not(.btn-nav):hover { color: var(--deep); }
        .nav-links a:not(.btn-nav):hover::after { width: 100%; }

        .btn-nav {
          color: var(--deep) !important;
          border: 1px solid var(--border) !important;
          padding: 10px 28px !important;
          border-radius: 100px;
          letter-spacing: 1.2px !important;
          font-size: 11px !important;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1) !important;
        }

        .btn-nav:hover {
          background: var(--deep) !important;
          border-color: var(--deep) !important;
          color: #fff !important;
          box-shadow: 0 4px 20px rgba(15,23,42,0.15) !important;
          transform: translateY(-1px);
        }

        /* — Hero — */
        .hero-wrap {
          padding: 180px 72px 140px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .hero-wrap::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -120px;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, rgba(184,134,11,0.06) 0%, rgba(184,134,11,0.02) 40%, transparent 70%);
          pointer-events: none;
          animation: heroOrb 20s ease-in-out infinite;
        }

        .hero-wrap::after {
          content: '';
          position: absolute;
          bottom: 40px;
          left: -60px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(15,23,42,0.03) 0%, transparent 70%);
          pointer-events: none;
          animation: heroOrb2 25s ease-in-out infinite;
        }

        @keyframes heroOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.05); }
        }

        @keyframes heroOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.08); }
        }

        .hero-eyebrow {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .hero-eyebrow::before {
          content: '';
          width: 40px;
          height: 1px;
          background: var(--accent);
        }

        .hero-wrap h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: clamp(48px, 6.5vw, 82px);
          line-height: 1.08;
          color: var(--deep);
          letter-spacing: -2px;
          margin-bottom: 36px;
          max-width: 900px;
        }

        .hero-wrap h1 em {
          font-style: italic;
          font-weight: 300;
          color: var(--accent);
        }

        .hero-wrap .tagline {
          font-size: 17px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.8;
          margin-bottom: 56px;
          max-width: 520px;
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .btn-cta {
          background: var(--deep);
          color: #fff;
          text-decoration: none;
          padding: 18px 40px;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 400;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .btn-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(15,23,42,0.18);
        }

        .btn-cta:hover::before { opacity: 0.15; }

        .btn-ghost {
          font-size: 11.5px;
          font-weight: 400;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--ash);
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }

        .btn-ghost::after {
          content: ' →';
          transition: transform 0.3s;
          display: inline-block;
        }

        .btn-ghost:hover { color: var(--deep); }
        .btn-ghost:hover::after { transform: translateX(4px); }

        .line {
          max-width: 1100px;
          margin: 0 auto;
          height: 1px;
          background: var(--border);
        }

        /* — Services — */
        .services-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 160px 72px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .section-label::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .services-intro {
          font-family: 'Playfair Display', serif;
          font-weight: 300;
          font-size: clamp(34px, 4.2vw, 50px);
          line-height: 1.18;
          color: var(--deep);
          letter-spacing: -0.5px;
          margin-bottom: 88px;
          max-width: 600px;
        }

        .service-item {
          padding: 48px 40px;
          border-top: 1px solid var(--border);
          display: grid;
          grid-template-columns: 72px 260px 1fr auto;
          gap: 40px;
          align-items: baseline;
          border-radius: 12px;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
          position: relative;
        }

        .service-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 0;
          background: var(--accent);
          border-radius: 2px;
          transition: height 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .service-item:hover {
          background: var(--paper);
          box-shadow: 0 8px 40px rgba(15,23,42,0.05);
          transform: translateX(8px);
          border-color: transparent;
        }

        .service-item:hover::before { height: 100%; }

        .service-num {
          font-family: 'Playfair Display', serif;
          font-weight: 300;
          font-size: 14px;
          color: var(--muted);
          letter-spacing: 1px;
        }

        .service-item h3 {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 26px;
          color: var(--deep);
          line-height: 1.3;
          letter-spacing: -0.3px;
          transition: color 0.3s;
        }

        .service-item:hover h3 { color: var(--accent); }

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

        .service-link:hover { color: var(--accent); letter-spacing: 3px; }

        /* — Process — */
        .process-wrap {
          background: var(--deep);
          color: #fff;
          padding: 160px 72px;
          position: relative;
          overflow: hidden;
        }

        .process-wrap::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(184,134,11,0.08) 0%, transparent 70%);
          pointer-events: none;
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
          font-family: 'Playfair Display', serif;
          font-weight: 300;
          font-size: clamp(34px, 4.2vw, 50px);
          line-height: 1.18;
          color: #fff;
          letter-spacing: -0.5px;
          margin-bottom: 28px;
        }

        .process-header p {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 1.9;
        }

        .step {
          margin-bottom: 56px;
          padding-left: 32px;
          position: relative;
        }

        .step::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: transparent;
          border: 1.5px solid rgba(184,134,11,0.5);
          transition: all 0.4s;
        }

        .step::after {
          content: '';
          position: absolute;
          left: 3.5px;
          top: 24px;
          width: 1px;
          height: calc(100% + 24px);
          background: rgba(255,255,255,0.08);
        }

        .step:last-child::after { display: none; }

        .step:hover::before {
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 0 12px rgba(184,134,11,0.3);
        }

        .step-num {
          font-family: 'Playfair Display', serif;
          font-weight: 300;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 2px;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .step h3 {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 24px;
          color: #fff;
          line-height: 1.3;
          margin-bottom: 10px;
          letter-spacing: -0.2px;
        }

        .step p {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.9;
        }

        /* — Quote — */
        .quote-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 160px 72px;
          text-align: center;
          position: relative;
        }

        .quote-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 48px;
        }

        .quote-decoration-line {
          width: 60px;
          height: 1px;
          background: var(--border);
        }

        .quote-decoration-diamond {
          width: 6px;
          height: 6px;
          background: var(--accent);
          transform: rotate(45deg);
        }

        .quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 120px;
          line-height: 0.5;
          color: var(--accent);
          display: block;
          margin-bottom: 24px;
          opacity: 0.25;
        }

        .quote-wrap blockquote {
          font-family: 'Playfair Display', serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(24px, 3.2vw, 36px);
          line-height: 1.5;
          color: var(--deep);
          letter-spacing: -0.3px;
          margin-bottom: 40px;
        }

        .quote-attr {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--muted);
          font-style: normal;
        }

        /* — Industries — */
        .industries-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 72px 160px;
        }

        .industries-wrap h2 {
          font-family: 'Playfair Display', serif;
          font-weight: 300;
          font-size: clamp(34px, 4.2vw, 50px);
          line-height: 1.18;
          color: var(--deep);
          letter-spacing: -0.5px;
          margin-bottom: 20px;
        }

        .industry-sub {
          font-size: 14px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.9;
          margin-bottom: 80px;
          max-width: 460px;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
        }

        .industry-item {
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-radius: 12px;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          background: transparent;
        }

        .industry-item:hover {
          background: var(--cream);
          transform: translateY(-4px);
          box-shadow: 0 8px 40px rgba(15,23,42,0.05);
        }

        .industry-name {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 22px;
          color: var(--deep);
          line-height: 1.35;
          letter-spacing: -0.2px;
          transition: color 0.3s;
        }

        .industry-item:hover .industry-name { color: var(--accent); }

        .industry-tag {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .industry-tag::before {
          content: '';
          width: 16px;
          height: 1px;
          background: var(--border);
          transition: background 0.3s, width 0.3s;
        }

        .industry-item:hover .industry-tag::before {
          background: var(--accent);
          width: 24px;
        }

        .industry-desc {
          font-size: 14px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.9;
        }

        /* — Contact — */
        .contact-wrap {
          background: var(--cream);
          padding: 160px 72px;
          position: relative;
          overflow: hidden;
        }

        .contact-wrap::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(184,134,11,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .contact-inner {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }

        .contact-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 32px;
        }

        .contact-inner h2 {
          font-family: 'Playfair Display', serif;
          font-weight: 300;
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1.12;
          color: var(--deep);
          letter-spacing: -1px;
          margin-bottom: 28px;
        }

        .contact-inner p {
          font-size: 15px;
          font-weight: 300;
          color: var(--ash);
          line-height: 1.8;
          margin-bottom: 56px;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-email {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 400;
          color: var(--deep);
          text-decoration: none;
          position: relative;
          display: inline-block;
          transition: color 0.4s;
        }

        .contact-email::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--border);
          transition: background 0.4s, height 0.4s;
        }

        .contact-email:hover {
          color: var(--accent);
        }

        .contact-email:hover::after {
          background: var(--accent);
        }

        /* — Footer — */
        footer {
          background: var(--bg);
          padding: 64px 72px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        footer p {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* — Responsive — */
        @media (max-width: 900px) {
          nav { padding: 0 28px; height: 64px; }
          .nav-links { gap: 20px; }
          .nav-logo { font-size: 24px; }
          
          .hero-wrap { padding: 140px 28px 100px; }
          .hero-eyebrow { margin-bottom: 24px; }
          .hero-cta-row { flex-direction: column; align-items: flex-start; gap: 20px; }
          
          .services-wrap { padding: 100px 28px; }
          
          .service-item {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 36px 24px;
          }

          .service-item:hover { transform: translateX(0); }
          
          .process-wrap { padding: 100px 28px; }
          .process-inner {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .quote-wrap { padding: 100px 28px; }
          
          .industries-wrap { padding: 0 28px 100px; }
          .industries-grid { grid-template-columns: 1fr; }
          
          .contact-wrap { padding: 100px 28px; }
          footer { padding: 48px 28px; }
        }

        @media (max-width: 480px) {
          .nav-links .hide-mobile { display: none; }
          .hero-wrap h1 { letter-spacing: -1px; }
        }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">STUDIO217</a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact" className="btn-nav">Start a project</a></li>
        </ul>
      </nav>

      <section className="hero-wrap">
        <div className="hero-eyebrow reveal">NYC-Based Agency</div>
        <h1 className="reveal reveal-d1">Where Passion for Customer Experience Meets <em>Expertise</em></h1>
        <p className="tagline reveal reveal-d2">STUDIO217 is a NYC-based agency that helps brands deliver exceptional customer experiences, build AI-powered tools, and scale their customer base.</p>
        <div className="hero-cta-row reveal reveal-d3">
          <a href="#contact" className="btn-cta">Start a project</a>
          <a href="#services" className="btn-ghost">Explore services</a>
        </div>
      </section>

      <div className="line"></div>

      <section id="services" className="services-wrap">
        <div className="section-label reveal">Services</div>
        <p className="services-intro reveal reveal-d1">Three disciplines.<br/>One integrated approach.</p>
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
            <h2>From kickoff<br/>to live — in weeks,<br/>not months.</h2>
            <p>We move fast without cutting corners. Every engagement starts with deep listening and ends with something that actually works.</p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="step-num">Step 01</div>
              <h3>We listen first</h3>
              <p>We map your workflows, pain points, and customer journey before writing a single line of strategy or code.</p>
            </div>
            <div className="step reveal reveal-d1">
              <div className="step-num">Step 02</div>
              <h3>We build it fast</h3>
              <p>Custom solutions built for your business - not templates, not generic tools, not a chatbot slapped on your website.</p>
            </div>
            <div className="step reveal reveal-d2">
              <div className="step-num">Step 03</div>
              <h3>You ship. We stay.</h3>
              <p>We handle updates, monitoring, and improvements so your team can focus on what they do best.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-wrap reveal">
        <div className="quote-decoration">
          <div className="quote-decoration-line"></div>
          <div className="quote-decoration-diamond"></div>
          <div className="quote-decoration-line"></div>
        </div>
        <span className="quote-mark">&ldquo;</span>
        <blockquote>They came in as consultants and left having built us an AI tool we use every single day. That&apos;s the difference.</blockquote>
        <cite className="quote-attr">STUDIO217 Client</cite>
      </section>

      <div className="line"></div>

      <section>
        <div className="industries-wrap">
          <div className="section-label reveal">Industries</div>
          <h2 className="reveal reveal-d1">Built for<br/>every industry.</h2>
          <p className="industry-sub reveal reveal-d2">From retail to hospitality — if your business runs on customer relationships, we can help.</p>
          <div className="industries-grid">

            <div className="industry-item reveal">
              <div className="industry-tag">01</div>
              <div className="industry-name">Retail &<br/>E-commerce</div>
              <p className="industry-desc">Turn one-time shoppers into loyal regulars. We build retention programs and service experiences that keep customers coming back.</p>
            </div>

            <div className="industry-item reveal reveal-d1">
              <div className="industry-tag">02</div>
              <div className="industry-name">Travel &<br/>Hospitality</div>
              <p className="industry-desc">Guest satisfaction is everything in this industry. We help hotels, agencies, and airlines deliver experiences worth talking about.</p>
            </div>

            <div className="industry-item reveal reveal-d2">
              <div className="industry-tag">03</div>
              <div className="industry-name">Financial &<br/>Professional Services</div>
              <p className="industry-desc">Client trust is your product. We help firms build the service standards and loyalty systems that justify premium pricing.</p>
            </div>

            <div className="industry-item reveal reveal-d3">
              <div className="industry-tag">04</div>
              <div className="industry-name">Tech<br/>& SaaS</div>
              <p className="industry-desc">Churn is a customer experience problem. We diagnose it, fix onboarding, and design touchpoints that turn users into advocates.</p>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="contact-wrap">
        <div className="contact-inner reveal">
          <div className="contact-label">Get in touch</div>
          <h2>Ready to build<br/>something great?</h2>
          <p>Whether it&apos;s strategy, technology, or growth — let&apos;s solve it together.</p>
          <a href="mailto:hello@studio217.ai" className="contact-email">hello@studio217.ai</a>
        </div>
      </section>

      <footer>
        <p>© 2026 STUDIO217</p>
      </footer>
    </div>
  );
}
