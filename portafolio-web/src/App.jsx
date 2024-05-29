import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Portafolio from './pages/portafolio/index'
import FlashlightEffect from './components/flashlight'
import './App.css'

function App() {
  return (
    <Router>
      <FlashlightEffect />
      <Routes>
        <Route path="/" element={<Navigate replace to="/portafolio-madeline-castro" />} />
        <Route
          path="/portafolio-madeline-castro"
          element={
            <FlashlightEffect>
              <Portafolio />
            </FlashlightEffect>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
