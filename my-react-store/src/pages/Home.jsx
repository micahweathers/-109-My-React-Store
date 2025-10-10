import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Our Punk Store! 🎸</h1>
        <p className="tagline">Unique figurines with attitude</p>
        <Link to="/catalog">
          <button className="cta-button">Shop Now</button>
        </Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>🍊 Punk Fruits</h3>
          <p>Rebellious citrus with style</p>
        </div>
        <div className="feature-card">
          <h3>🧁 Collectibles</h3>
          <p>Unique cupcake characters</p>
        </div>
        <div className="feature-card">
          <h3>✨ Limited Edition</h3>
          <p>Handpicked designs</p>
        </div>
      </div>

      <div className="about-preview">
        <h2>Why Choose Us?</h2>
        <p>We bring you the most unique and edgy figurines that stand out from the crowd. Each piece tells a story!</p>
      </div>
    </div>
  );
}

export default Home;