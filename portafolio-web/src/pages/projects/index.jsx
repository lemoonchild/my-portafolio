import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'

import './index.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'The Cozy Whiskers',
      date: 'March 2024',
      descriptionEn:
        'A management system for "The Cozy Whiskers" cat café, enhancing service efficiency and customer satisfaction through streamlined operations. Developed the intuitive user interface as the Front End developer.',
      technologies: ['React', 'Vite', 'NodeJS', 'CSS', 'PostgreSQL'],
      imageUrl: 'src/assets/gif/tcw.gif',
      link: 'https://the-cozy-whiskers.vercel.app',
      link2: 'https://github.com/lemoonchild/the-cozy-whiskers.git',
    },
    {
      id: 2,
      title: 'Testing Calculator',
      date: 'May 2024',
      descriptionEn:
        'A demonstration calculator for software testing with Vitest and Storybook, focusing on functionality testing and UI component reliability. Managed setup and documentation of test processes',
      technologies: ['Vite', 'React', 'Vitest', 'Jest'],
      imageUrl: 'src/assets/gif/calc.gif',
      link: 'https://calculator-project-gilt.vercel.app/',
      link2: 'https://github.com/lemoonchild/calculator-testing.git',
    },
    {
      id: 3,
      title: 'The Evangelion Blog',
      date: 'April 2024',
      descriptionEn:
        'An interactive blog for "Evangelion" fans, developed to enhance community engagement with features for reading and managing posts. Handled full-stack development, deployed on Vercel.',
      technologies: ['React', 'Vite', 'CSS', 'NodeJS', 'PostgreSQL'],
      imageUrl: 'src/assets/gif/evablog.gif',
      link: 'https://my-evangelion-blog.vercel.app/blog',
      link2: 'https://github.com/lemoonchild/my-portafolio.git',
    },
  ]

  return (
    <div className="projects-content">
      {projects.map((project) => (
        <div key={project.id} className={`project-card size-${project.id}`}>
          <img src={project.imageUrl} alt={project.title} />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p className="date">{project.date}</p>
            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech">
                  {tech}
                </span>
              ))}
            </div>
            <p className="description">{project.descriptionEn}</p>

            <div className="button-group">
              <a className="link-important" href={project.link}>
                <TbWorld style={{ marginRight: '8px' }} /> See Project
              </a>
              <a className="link" href={project.link2}>
                <FaGithub style={{ marginRight: '8px' }} /> Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
