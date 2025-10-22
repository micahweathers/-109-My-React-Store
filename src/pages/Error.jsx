import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
  return (
    <div className='error'>
      <div className="error-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p className="error-message">Looks like this page went punk and disappeared!</p>
        <Link to="/" className="home-button">
          <img src="/images/rock-and-roll.png" alt="rock" className="button-icon" />
          Back to Home
          <img src="/images/rock-and-roll.png" alt="rock" className="button-icon flip" />
        </Link>
        <div className="suggested-links">
          <p>Maybe try one of these:</p>
          <div className="link-buttons">
            <Link to="/catalog" className="suggest-btn">Browse Catalog</Link>
            <Link to="/about" className="suggest-btn">Learn About Us</Link>
            <Link to="/contact" className="suggest-btn">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error