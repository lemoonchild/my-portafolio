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
        date="March 2024 - April 2024"
        iconStyle={{ background: '#B6BBC4', color: '#161a30' }}
        icon={<FaCat />}
      >
        <h3 className="vertical-timeline-element-title">Front End Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">The Cozy Whiskers</h4>
        <p className="content-text">
          Developed a management system for "The Cozy Whiskers," a cat café, utilizing technologies
          such as React, Vite, Node.js, PostgreSQL, and JavaScript, deployed on Vercel. This system
          empowers restaurant employees to create invoices, manage and review orders, and
          efficiently track occupied tables. The project significantly optimized restaurant
          operations, enhancing service efficiency and customer satisfaction. Took on the role of
          Front End developer, focusing on crafting a user-friendly and intuitive interface for the
          system, ensuring a seamless experience for users.
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
          Created a blog project focused on the anime "Evangelion." Users can engage with various
          functionalities such as reading, creating, updating, and deleting posts based on their
          permissions. The project aimed to enhance the interaction within the Evangelion fan
          community through an appealing interface and real-time interaction features. Took on the
          roles of both Front End and Back End developer, overseeing the entire site's creation
          process.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="September 2023 - Present"
        iconStyle={{ background: '#B6BBC4', color: '#161a30' }}
        icon={<FaBriefcaseMedical />}
      >
        <h3 className="vertical-timeline-element-title">Front end Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Sanitas Project</h4>

        <p className="content-text">
          Developed a project for Universidad del Valle de Guatemala focused on managing medical
          records and collecting students' medical data. The system streamlines the process of
          recording patients' medical history, symptoms, and recommendations during consultations
          with healthcare professionals. As a Full Stack Developer, contributed to both Front End
          and Back End development, ensuring efficient data management and user-friendly interface
          for healthcare providers.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Experience
