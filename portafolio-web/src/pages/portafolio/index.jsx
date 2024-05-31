import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Button from '../../components/button'
import Navbar from '../../components/navBar'
import Experience from '../experience'
import SkillCards from '../habilites'
import Projects from '../projects'
import { Achievements, AboutMe } from '../aboutme'
import { ContactForm } from '../contactme'
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

  const variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
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
          <p>Computer Science & IT student at Universidad del Valle de Guatemala 💫</p>
        </div>

        <div className="nav_bar">
          <Navbar setActiveSection={setActiveSection} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="sections">
              {activeSection === 'experience' && (
                <div className="experience">
                  <div className="sections-title">
                    <h2>My academic experience</h2>
                    <p className="section-subtitle">What I have done so far...</p>
                  </div>

                  <Experience />

                  <div className="sections-title">
                    <h2>Habilities Learned</h2>
                    <p className="section-subtitle">
                      In my journey through the world of web development, I have gained experience
                      and skills in various technologies. My tech stack includes:
                    </p>
                  </div>

                  <SkillCards />
                </div>
              )}
              {activeSection === 'aboutme' && (
                <div className="aboutme">
                  <div className="sections-title">
                    <h2>About me</h2>
                    <p className="section-subtitle"> Learn more about the developer!</p>
                  </div>
                  <AboutMe />

                  <div className="sections-title">
                    <h2>Achievements</h2>
                    <p className="section-subtitle">
                      Each achievement is a testament to determination, perseverance, and the
                      relentless pursuit of excellence. Here are some of my most notable
                      accomplishments:
                    </p>
                  </div>
                  <Achievements />

                  <div className="sections-title">
                    <h2>Let's get in touch!</h2>
                    <p className="section-subtitle">
                      If you're interested, please fill the next form
                    </p>
                  </div>
                  <ContactForm />
                </div>
              )}
              {activeSection === 'projects' && (
                <div className="projects">
                  <div className="sections-title">
                    <h2>My projects</h2>
                    <p className="section-subtitle">Explore my year of innovation and creation!</p>
                  </div>
                  <Projects />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Portafolio
