import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Our Store</h1>
        <p className="subtitle">Where Punk Meets Personality</p>
      </div>

      <div className="about-content">
        <section className="story-section">
          <h2>Our Story</h2>
          <p>
            Welcome to our unique collection of punk-inspired figurines! We started with a simple idea: 
            everyday objects deserve personality and attitude. Our fruits aren't just fruits - they're 
            rebels with a cause. Our collectibles aren't just cute - they're characters with stories.
          </p>
          <p>
            Each piece in our collection is carefully curated to bring joy, humor, and a touch of 
            rebellion to your space. Whether you're a collector or just looking for that perfect 
            conversation starter, we've got something special for you.
          </p>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <div className="mission-cards">
            <div className="mission-card">
              <div className="icon">🎨</div>
              <h3>Unique Designs</h3>
              <p>Every figurine is one-of-a-kind with its own attitude and style</p>
            </div>
            <div className="mission-card">
              <div className="icon">💪</div>
              <h3>Quality First</h3>
              <p>We ensure each piece meets our high standards of craftsmanship</p>
            </div>
            <div className="mission-card">
              <div className="icon">❤️</div>
              <h3>Customer Love</h3>
              <p>Your satisfaction and joy are what drive us forward</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>What We Stand For</h2>
          <ul className="values-list">
            <li>✨ <strong>Creativity:</strong> We celebrate unique, bold designs that stand out</li>
            <li>🌟 <strong>Authenticity:</strong> Real personality in every piece</li>
            <li>🎯 <strong>Quality:</strong> Only the best makes it to our collection</li>
            <li>🤝 <strong>Community:</strong> Building a family of collectors and enthusiasts</li>
          </ul>
        </section>

        <section className="contact-section">
          <h2>Get in Touch</h2>
          <p>Have questions or want to learn more? We'd love to hear from you!</p>
          <div className="contact-info">
            <p>📧 Email: hello@punkstore.com</p>
            <p>📱 Phone: (555) 123-4567</p>
            <p>📍 Location: Chicago, IL</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;