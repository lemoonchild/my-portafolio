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
      descriptionEn: 'A management system for a restaurant.',
      technologies: ['React', 'Vite', 'NodeJS', 'CSS', 'PostgreSQL'],
      imageUrl: 'src/assets/img/tcw.png',
      link: 'https://the-cozy-whiskers.vercel.app',
      link2: 'https://github.com/lemoonchild/the-cozy-whiskers.git',
    },
    {
      id: 2,
      title: 'Testing Calculator',
      date: 'May 2024',
      descriptionEn: 'A calculator to demonstrate software testing.',
      technologies: ['Vite', 'React', 'Vitest', 'Jest'],
      imageUrl: 'src/assets/img/calculator.png',
      link: 'https://calculator-project-gilt.vercel.app/calculator',
      link2: 'https://github.com/lemoonchild/calculator-testing.git',
    },
    {
      id: 3,
      title: 'The Evangelion Blog',
      date: 'April 2024',
      descriptionEn: 'A blog dedicated to Evangelion.',
      technologies: ['React', 'Vite', 'CSS', 'NodeJS', 'PostgreSQL'],
      imageUrl: 'src/assets/img/evablog.png',
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
            <p>{project.date}</p>
            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech">
                  {tech}
                </span>
              ))}
            </div>
            <p>{project.descriptionEn}</p>

            <div className="button-group">
              <a className="link-important" href={project.link}>
                <TbWorld />
                See Project
              </a>
              <a className="link" href={project.link2}>
                <FaGithub />
                Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
