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
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #fefefe;
          color: #5a5a5a;
          line-height: 1.7;
          font-weight: 400;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        header {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          padding: 20px 0;
          box-shadow: 0 1px 20px rgba(0,0,0,0.03);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(200,180,160,0.1);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.6rem;
          font-weight: 600;
          color: #c8a882;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.5rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #8a8a8a;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.4s ease;
        }

        .nav-links a:hover {
          color: #c8a882;
        }

        .hero {
          background: linear-gradient(135deg, #faf9f7 0%, #ffffff 50%, #f8f6f2 100%);
          padding: 140px 0 100px;
          text-align: center;
        }

        .hero h1 {
          font-size: 3.2rem;
          font-weight: 300;
          color: #4a4a4a;
          margin-bottom: 1.5rem;
          line-height: 1.3;
          letter-spacing: -1px;
        }

        .hero .highlight {
          color: #d4b896;
          font-weight: 400;
        }

        .hero p {
          font-size: 1.2rem;
          color: #7a7a7a;
          max-width: 580px;
          margin: 0 auto 2.5rem;
          font-weight: 300;
          line-height: 1.8;
        }

        .cta-button {
          background: linear-gradient(135deg, #d4b896 0%, #c8a882 100%);
          color: white;
          padding: 16px 36px;
          border: none;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(212,184,150,0.2);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(212,184,150,0.3);
        }

        .services {
          padding: 100px 0;
          background: #fafafa;
        }

        .services h2 {
          text-align: center;
          font-size: 2.2rem;
          color: #4a4a4a;
          margin-bottom: 3.5rem;
          font-weight: 300;
          letter-spacing: -0.5px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .service-card {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 2px 40px rgba(0,0,0,0.04);
          text-align: center;
          transition: all 0.5s ease;
          border: 1px solid rgba(200,180,160,0.08);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 60px rgba(0,0,0,0.08);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f5f0ea 0%, #ede7e0 100%);
          border-radius: 18px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .service-card h3 {
          font-size: 1.4rem;
          color: #c8a882;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .service-card p {
          color: #7a7a7a;
          line-height: 1.7;
          font-weight: 300;
        }

        .growth {
          padding: 100px 0;
          background: rgba(255,255,255,0.5);
        }

        .growth-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .growth h2 {
          font-size: 2.2rem;
          color: #4a4a4a;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: -0.5px;
        }

        .growth p {
          color: #7a7a7a;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-card {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(15px);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(200,180,160,0.1);
          box-shadow: 0 4px 30px rgba(0,0,0,0.04);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 600;
          color: #d4b896;
          margin-bottom: 0.5rem;
          letter-spacing: -1px;
        }

        .stat-label {
          color: #7a7a7a;
          font-size: 0.95rem;
          font-weight: 300;
        }

        .testimonials {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f6f2 0%, #ffffff 50%, #faf9f7 100%);
        }

        .testimonials h2 {
          text-align: center;
          font-size: 2.2rem;
          color: #4a4a4a;
          margin-bottom: 3.5rem;
          font-weight: 300;
          letter-spacing: -0.5px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .testimonial-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(15px);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 4px 40px rgba(0,0,0,0.05);
          border: 1px solid rgba(200,180,160,0.1);
        }

        .testimonial-text {
          color: #6a6a6a;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-style: italic;
          font-weight: 300;
        }

        .testimonial-author {
          font-weight: 500;
          color: #c8a882;
          margin-bottom: 0.3rem;
        }

        .testimonial-role {
          color: #8a8a8a;
          font-size: 0.9rem;
          font-weight: 300;
        }

        .team {
          padding: 100px 0;
          background: #fafafa;
        }

        .team h2 {
          text-align: center;
          font-size: 2.2rem;
          color: #4a4a4a;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: -0.5px;
        }

        .team-intro {
          text-align: center;
          color: #7a7a7a;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          font-weight: 300;
          line-height: 1.8;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
        }

        .team-card {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 4px 30px rgba(0,0,0,0.04);
          border: 1px solid rgba(200,180,160,0.08);
          transition: all 0.4s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 50px rgba(0,0,0,0.08);
        }

        .team-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #f5f0ea 0%, #ede7e0 100%);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }

        .team-name {
          font-size: 1.3rem;
          color: #c8a882;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .team-role {
          color: #7a7a7a;
          font-size: 0.95rem;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .team-bio {
          color: #7a7a7a;
          font-size: 0.9rem;
          line-height: 1.6;
          font-weight: 300;
        }

        .about {
          padding: 100px 0;
          background: rgba(255,255,255,0.5);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about h2 {
          font-size: 2.2rem;
          color: #4a4a4a;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: -0.5px;
        }

        .about p {
          color: #7a7a7a;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .about-image {
          width: 100%;
          height: 320px;
          background: linear-gradient(135deg, #f8f6f2 0%, #f0ece7 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c8a882;
          font-size: 3rem;
          box-shadow: 0 8px 40px rgba(0,0,0,0.05);
        }

        .contact {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f6f2 0%, #ffffff 50%, #faf9f7 100%);
          text-align: center;
        }

        .contact h2 {
          font-size: 2.2rem;
          color: #4a4a4a;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: -0.5px;
        }

        .contact p {
          font-size: 1.2rem;
          color: #7a7a7a;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

        .contact-info {
          font-size: 1.4rem;
          color: #d4b896;
          font-weight: 500;
          letter-spacing: -0.3px;
        }

        footer {
          background: linear-gradient(135deg, #f0ece7 0%, #ede7e0 100%);
          color: #8a8a8a;
          text-align: center;
          padding: 3rem 0;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 80px;
          }

          .hero h1 {
            font-size: 2.4rem;
          }

          .hero p {
            font-size: 1.1rem;
          }

          .nav-links {
            display: none;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .services-grid, .stats-grid, .testimonials-grid, .team-grid {
            grid-template-columns: 1fr;
          }

          .services h2, .growth h2, .testimonials h2, .team h2, .about h2, .contact h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <header>
        <nav className="container">
          <div className="logo">Studio217</div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#growth">Growth</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <h1>AI Automation & <span className="highlight">Customer Service</span></h1>
          <p>Studio217 delivers intelligent automation solutions that streamline your business operations and enhance customer experiences with gentle, thoughtful design.</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Process Automation</h3>
              <p>Streamline repetitive tasks and workflows with intelligent automation solutions tailored to your business needs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💬</div>
              <h3>Customer Support AI</h3>
              <p>Deploy smart chatbots and support systems that provide 24/7 customer service with human-like interactions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Business Intelligence</h3>
              <p>Transform your data into actionable insights with AI-powered analytics and reporting solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="growth" className="growth">
        <div className="container">
          <div className="growth-content">
            <h2>Growing Together</h2>
            <p>Our success is measured by your growth. We partner with businesses to create scalable solutions that evolve with your needs, delivering consistent value and measurable results.</p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">200+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">95%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Studio217 transformed our customer service operations. Their AI solutions reduced response time by 70% while maintaining the personal touch our clients expect."
              </div>
              <div className="testimonial-author">Sarah Johnson</div>
              <div className="testimonial-role">CEO, TechFlow Solutions</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "The automation solutions Studio217 built for us have been game-changing. We've saved countless hours and improved accuracy across all our processes."
              </div>
              <div className="testimonial-author">Michael Chen</div>
              <div className="testimonial-role">Operations Director, InnovaCorp</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Working with Studio217 has been exceptional. Their team understands our business needs and delivers solutions that actually work in the real world."
              </div>
              <div className="testimonial-author">Emma Rodriguez</div>
              <div className="testimonial-role">CTO, DataBridge Inc</div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container">
          <h2>Our Team</h2>
          <p className="team-intro">Meet the passionate professionals behind Studio217's innovative AI solutions.</p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💻</div>
              <div className="team-name">Alex Foster</div>
              <div className="team-role">Founder & CEO</div>
              <div className="team-bio">AI strategist with 10+ years in automation and machine learning solutions.</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍💼</div>
              <div className="team-name">Maria Santos</div>
              <div className="team-role">Head of Operations</div>
              <div className="team-bio">Expert in process optimization and client relationship management.</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍🔬</div>
              <div className="team-name">David Kim</div>
              <div className="team-role">Lead AI Engineer</div>
              <div className="team-bio">Specialist in natural language processing and intelligent automation systems.</div>
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
              <p>Founded in 2023, Studio217 has quickly become a trusted partner for businesses looking to harness the power of AI without the complexity.</p>
            </div>
            <div className="about-image">
              ✨
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