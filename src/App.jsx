import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import CV from './pages/CV.jsx'
import Portfolio from './pages/Portfolio.jsx'
import NotFound from './pages/NotFound.jsx'

function EasterModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>GG. Du hittade påskägget. Respekt 🤝</h2>
        <p>Från en elit till en annan.</p>
        <button onClick={onClose}>Stäng</button>
      </div>
    </div>
  )
}

function App() {
  const [isDark, setIsDark] = useState(false)
  const [showEasterModal, setShowEasterModal] = useState(false)

  useEffect(() => {
    let keys = ''
    const handleKey = (e) => {
      keys += e.key
      if (keys.includes('1337')) {
        setShowEasterModal(true)
        keys = ''
      }
      if (keys.length > 10) keys = keys.slice(-10)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const handleEasterEgg = () => {
    const next = !isDark
    setIsDark(next)
    document.body.classList.toggle('dark-mode', next)
  }

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-mig" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer onEasterEgg={handleEasterEgg} />
      {showEasterModal && <EasterModal onClose={() => setShowEasterModal(false)} />}
    </>
  )
}

export default App
