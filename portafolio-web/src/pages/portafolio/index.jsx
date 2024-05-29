import React, { useState } from 'react'
import Button from '../../components/button'
import Navbar from '../../components/navBar'
import Experience from '../experience'
import './index.css'

const Portafolio = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/nahomy-castro-cc-ti-uvg', '_blank')
  }

  const handleResumeClick = () => {
    window.open(
      'https://drive.google.com/file/d/10OBMaeRS_UMNPCJi8B3skGs0sxmXGpvB/view?usp=sharing',
      '_blank',
    )
  }

  const handleGithubClick = () => {
    window.open('https://github.com/lemoonchild', '_blank')
  }

  const [activeSection, setActiveSection] = useState('experience')

  return (
    <div className="portafolio">
      <div className="content">
        <div className="header">
          <div className="my_info">
            <h1>Hey, I'm Madeline Castro</h1>
            <p>Front end developer and designer</p>
          </div>
          <div className="socials">
            <Button text="Resume" onClick={handleResumeClick} />
            <Button text="LinkedIn" onClick={handleLinkedInClick} />
            <Button text="Github" onClick={handleGithubClick} />
          </div>
        </div>

        <div className="phrase">
          <h1>Turning ideas into interactive realities.</h1>
          <p>Computer Science & IT student at Universidad del Valle de Guatemala</p>
        </div>

        <div className="nav_bar">
          <Navbar setActiveSection={setActiveSection} />
        </div>
        <div className="sections">
          {activeSection === 'experience' && (
            <div className="experience">
              <div className="sections-title">
                <h2>My academic experience</h2>
                <p className="section-subtitle">What I have done so far...</p>
              </div>

              <div className="my-experience">
                <Experience />
              </div>
            </div>
          )}
          {activeSection === 'aboutme' && (
            <div className="aboutme">
              <div className="sections-title">
                <h2>About me</h2>
                <p>Detailed information about personal info...</p>
              </div>
            </div>
          )}
          {activeSection === 'projects' && (
            <div className="projects">
              <div className="sections-title">
                <h2>My projects</h2>
                <p>Detailed information about personal info...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portafolio
