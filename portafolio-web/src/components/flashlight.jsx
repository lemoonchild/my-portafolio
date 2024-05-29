import React, { useState, useRef } from 'react'
import './flashlight.css'

function FlashlightEffect({ children }) {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const lightSize = rect.width * 0.1
    const x = e.clientX - rect.left - lightSize / 2
    const y = e.clientY - rect.top - lightSize / 2
    setHoverPosition({ x, y })
  }
  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <div
      className="main-div-card-with-animation"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {children}
      <div
        className="light"
        style={{
          left: `${hoverPosition.x}px`,
          top: `${hoverPosition.y}px`,
          zIndex: 2,
          opacity: isHovering ? '1' : '0',
        }}
      />
    </div>
  )
}

export default FlashlightEffect
