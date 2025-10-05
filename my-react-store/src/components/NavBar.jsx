import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <h1>My Online Store</h1>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/src/pages/catalog.html" className="nav-link">Catalog</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar