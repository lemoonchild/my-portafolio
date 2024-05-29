import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaCat, FaBriefcaseMedical } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'
import './index.css'

const Experience = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="January 2024- Present"
        iconStyle={{ background: '#B6BBC4', color: '#161a30' }}
        icon={<FaBriefcaseMedical />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Sanitas Project</h4>
        <p className="content-text">
          Engineered a medical record management system for Universidad del Valle de Guatemala.
          Enhanced data collection and processing for patient history, symptoms, and healthcare
          recommendations, focusing on a seamless interface for both students and medical staff.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2024 - April 2024"
        iconStyle={{ background: '#B6BBC4', color: '#161a30' }}
        icon={<FaCat />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">The Cozy Whiskers</h4>
        <p className="content-text">
          Developed a comprehensive management system for "The Cozy Whiskers," a cat café. Utilized
          React, Vite, Node.js, and PostgreSQL, focusing on an intuitive user interface and backend
          logic to streamline operations, improve service efficiency, and enhance customer
          satisfaction.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="April 2024 - May 2024"
        iconStyle={{ background: '#B6BBC4', color: '#161a30' }}
        icon={<MdComputer />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">The Evangelion Blog</h4>
        <p className="content-text">
          Created an interactive blog for "Evangelion" anime enthusiasts. Designed to foster
          community interaction, the platform features functionalities for creating, reading,
          updating, and deleting content, while ensuring secure user access and real-time
          communication.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Experience
