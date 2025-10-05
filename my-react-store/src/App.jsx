import NavBar from './components/NavBar'
import Footer from './components/Footer'
import QuantityPicker from './components/QntyPicker'
import Catalog from './pages/Catalog'
import './App.css'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Catalog />
      <Footer />
    </div>
  )
}

export default App