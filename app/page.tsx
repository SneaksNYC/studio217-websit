export default function Home() {
  return (
    <div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background: #ffffff;
          color: #333;
          line-height: 1.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        header {
          background: #ffffff;
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: #8B4513;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #666;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #8B4513;
        }

        .hero {
          background: linear-gradient(135deg, #f8f6f0 0%, #ffffff 100%);
          padding: 120px 0 80px;
          text-align: center;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero .highlight {
          color: #8B4513;
        }

        .hero p {
          font-size: 1.3rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .cta-button {
          background: #8B4513;
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 5px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.3s;
        }

        .cta-button:hover {
          background: #A0522D;
        }

        .services {
          padding: 80px 0;
          background: #faf9f7;
        }

        .services h2 {
          text-align: center;
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 3rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-card h3 {
          font-size: 1.5rem;
          color: #8B4513;
          margin-bottom: 1rem;
        }

        .service-card p {
          color: #666;
          line-height: 1.6;
        }

        .about {
          padding: 80px 0;
          background: white;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .about p {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .contact {
          padding: 80px 0;
          background: #f8f6f0;
          text-align: center;
        }

        .contact h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .contact p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 2rem;
        }

        .contact-info {
          font-size: 1.3rem;
          color: #8B4513;
          font-weight: 600;
        }

        footer {
          background: #8B4513;
          color: white;
          text-align: center;
          padding: 2rem 0;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .nav-links {
            display: none;
          }

          .about-content {
            grid-template-columns: 1fr;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header>
        <nav className="container">
          <div className="logo">Studio217</div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <h1>AI Automation & <span className="highlight">Customer Service</span></h1>
          <p>Studio217 delivers intelligent automation solutions that streamline your business operations and enhance customer experiences.</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Process Automation</h3>
              <p>Streamline repetitive tasks and workflows with intelligent automation solutions tailored to your business needs.</p>
            </div>
            <div className="service-card">
              <h3>Customer Support AI</h3>
              <p>Deploy smart chatbots and support systems that provide 24/7 customer service with human-like interactions.</p>
            </div>
            <div className="service-card">
              <h3>Business Intelligence</h3>
              <p>Transform your data into actionable insights with AI-powered analytics and reporting solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div>
              <h2>About Studio217</h2>
              <p>We specialize in creating custom AI solutions that solve real business problems. Our team combines technical expertise with deep industry knowledge to deliver automation that actually works.</p>
              <p>From customer service chatbots to complex workflow automation, we build solutions that scale with your business and deliver measurable results.</p>
            </div>
            <div>
              <img src="/api/placeholder/500/400" alt="Studio217 team" style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px', background: '#f0f0f0'}} />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let&apos;s discuss how Studio217 can transform your business operations.</p>
          <div className="contact-info">hello@studio217.ai</div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2026 Studio217. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}