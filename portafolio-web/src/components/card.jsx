import React from 'react'
import './card.css'

function Card({ frontContent, items, icon }) {
  return (
    <div className="card">
      <div className="front">
        {icon}
        <h3>{frontContent.title}</h3>
      </div>
      <div className="back">
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card
