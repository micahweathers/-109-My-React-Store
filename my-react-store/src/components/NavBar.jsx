import './NavBar.css';
import { useState } from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <img src="/images/navbar-punk.png" alt="Punk Store" className="navbar-background" />
            <div className="navbar-container">
                <div className="navbar-brand">
                    {/* Logo area - can add text or small logo here if needed */}
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
                            <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#catalog" className="nav-link" onClick={toggleMenu}>Catalog</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;