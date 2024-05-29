import React, { useState } from 'react'
import './navBar.css'

const Navbar = ({ setActiveSection }) => {
  const [activeButton, setActiveButton] = useState('experience') // Estado para seguir el botón activo

  const updateIndicator = (section, offset) => {
    setActiveSection(section)
    setActiveButton(section) // Actualiza el estado del botón activo
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <button
          className={`nav-button ${activeButton === 'experience' ? 'active' : ''}`}
          onClick={() => updateIndicator('experience', '0%')}
        >
          Experience
        </button>
        <button
          className={`nav-button ${activeButton === 'aboutme' ? 'active' : ''}`}
          onClick={() => updateIndicator('aboutme', '33.33%')}
        >
          About me
        </button>
        <button
          className={`nav-button ${activeButton === 'projects' ? 'active' : ''}`}
          onClick={() => updateIndicator('projects', '66.66%')}
        >
          Projects
        </button>
        <div
          className="nav-indicator"
          style={{
            left: `${
              activeButton === 'experience' ? 0 : activeButton === 'aboutme' ? 33.33 : 66.66
            }%`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Navbar
