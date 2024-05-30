import React from 'react'
import './index.css'

export function ContactForm() {
  return (
    <div className="form-container">
      <form action="https://formspree.io/f/xvoejgog" method="POST">
        <h2>Contact Me</h2>
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          name="email" // Importante usar el atributo 'name' para que Formspree lo reconozca
          id="email"
          required
        />
        <label htmlFor="message">Your Message:</label>
        <textarea
          name="message" // Importante usar el atributo 'name' para que Formspree lo reconozca
          id="message"
          required
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
    </div>
  )
}
