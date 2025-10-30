import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import GlobalProvider from './state/globalProvider';

import About from './pages/About';
import Admin from './pages/Admin'
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        {/* Browser Router shows up as Router from using Browser Router as Router and must be parent */}
        <div className="app">
          <NavBar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/404" element={<Error />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;