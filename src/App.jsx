import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <h1>Welcome to my online store!</h1>
        <p>Discover amazing products at incredible prices.</p>
      </main>
      <Footer />
    </div>
  )
}

export default App