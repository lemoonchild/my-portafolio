import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Portafolio from './pages/portafolio/index'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/portafolio-madeline-castro" />} />
        <Route path="/portafolio-madeline-castro" element={<Portafolio />} />
      </Routes>
    </Router>
  )
}

export default App
