import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './index.css'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import { SiKotlin, SiNpm, SiPostgresql, SiFigma, SiJson, SiVite } from 'react-icons/si'

const Category = ({ title, children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const tiltX = (x - 0.5) * 50
    const tiltY = (y - 0.5) * 40
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tilt.y,
        rotateY: tilt.x,
        transition: { type: 'spring', stiffness: 100 },
      }}
      className="skills-category"
    >
      <h2>{title}</h2>
      <ul>{children}</ul>
    </motion.div>
  )
}

const SkillCards = () => {
  return (
    <div className="skills-container">
      <Category title="Frontend">
        <li>
          <FaHtml5 />
          <span> HTML</span>
        </li>
        <li>
          <FaCss3Alt />
          <span> CSS</span>
        </li>
        <li>
          <FaJsSquare />
          <span> JavaScript</span>
        </li>
        <li>
          <FaReact />
          <span> React</span>
        </li>
      </Category>
      <Category title="Backend">
        <li>
          <FaNodeJs />
          <span> NodeJS</span>
        </li>
        <li>
          <FaPython />
          <span> Python</span>
        </li>
        <li>
          <FaJava />
          <span> Java</span>
        </li>
        <li>
          <SiKotlin />
          <span> Kotlin</span>
        </li>
      </Category>
      <Category title="Tools and Libraries">
        <li>
          <SiVite />
          <span> Vite</span>
        </li>
        <li>
          <SiNpm />
          <span> npm</span>
        </li>
        <li>
          <SiJson />
          <span> JSON</span>
        </li>
      </Category>
      <Category title="Others">
        <li>
          <FaGitAlt />
          <span> Git</span>
        </li>
        <li>
          <FaGithub />
          <span> GitHub</span>
        </li>
        <li>
          <SiPostgresql />
          <span> PostgreSQL</span>
        </li>
        <li>
          <SiFigma />
          <span> Figma</span>
        </li>
      </Category>
    </div>
  )
}

export default SkillCards
