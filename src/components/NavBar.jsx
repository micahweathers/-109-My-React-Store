import { Link } from 'react-router-dom';
import './NavBar.css';
import { useState, useContext } from 'react';
import GlobalContext from '../state/GlobalContext.js';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const user = useContext(GlobalContext).user;
    const cart = useContext(GlobalContext).cart;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Calculate total cart items
    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <nav className="navbar">
            <img src="/images/navbar-punk.png" alt="Punk Store" className="navbar-background" />
            <div className="navbar-container">
                <div className="navbar-brand">
                    <div className="user-welcome">
                        <span className="welcome-text">Welcome, {user.name}!</span>
                        {getTotalItems() > 0 && (
                            <span className="cart-badge">{getTotalItems()}</span>
                        )}
                    </div>
                </div>

                {/* Menu Toggle Button */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/catalog" className="nav-link" onClick={closeMenu}>Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;