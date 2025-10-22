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
              <div className="icon"><img src="/images/painting.gif" className="icons"/></div>
              <h3>Unique Designs</h3>
              <p>Every figurine is one-of-a-kind with its own attitude and style</p>
            </div>
            <div className="mission-card">
              <div className="icon"><img src="/images/quality-control.gif" className="icons"/></div>
              <h3>Quality First</h3>
              <p>We ensure each piece meets our high standards of craftsmanship</p>
            </div>
            <div className="mission-card">
              <div className="icon"><img src="/images/kpop.gif" className="icons"/></div>
              <h3>Customer Love</h3>
              <p>Your satisfaction and joy are what drive us forward</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>What We Stand For</h2>
          <ul className="values-list">
            <li><img src="/images/sparkling.png" className="values-icon"/> <strong>Creativity:</strong> We celebrate unique, bold designs that stand out</li>
            <li><img src="/images/quality-control.png" className="values-icon"/> <strong>Authenticity:</strong> Real personality in every piece</li>
            <li><img src="/images/bullseye.png" className="values-icon"/> <strong>Quality:</strong> Only the best makes it to our collection</li>
            <li><img src="/images/community.png" className="values-icon"/> <strong>Community:</strong> Building a family of collectors and enthusiasts</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default About;