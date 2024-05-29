import React, { useState } from 'react'
import './button2.css' // Asegúrate de que el archivo CSS está correctamente vinculado

const Button2 = ({ text }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <button
      id="unique-bubble-button"
      className={`button-2 ${isActive ? 'bubble-active' : ''}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button2
