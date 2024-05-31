import React from 'react'
import Card from '../../components/card'
import { GrCertificate } from 'react-icons/gr'
import { FaMedal } from 'react-icons/fa6'
import { GiMuscleFat } from 'react-icons/gi'

import './index.css'

export function AboutMe() {
  return (
    <div className="aboutme">
      <div className="first">
        <div className="description-me">
          <h1>Who am I?</h1>
          <p className="general">
            My name is Madeline, better known as lemoonchild ✨, a passionate
            <span> student of Computer Science & IT engineering</span> at UVG. My fascination with
            interface design and strategy games has led me to explore the world of web programming.
          </p>
          <p className="general">
            I take pride in my ability to create intuitive and functional interfaces, guided by the
            belief that <span> a good interface shouldn't raise questions.</span> In addition to my
            commitment to technological development, I'm also an enthusiast of cats, video games,
            coffee, and Studio Ghibli movies.
          </p>
        </div>
        <img src="/assets/img/me2.png" alt="" />
      </div>
    </div>
  )
}

export function Achievements() {
  const achievementsData = [
    {
      frontContent: { title: 'Certificates' },
      items: [
        'Microsoft Office Excel® 2016',
        'Microsoft Office PowerPoint® 2016',
        'Microsoft Office Word 2016',
        'Microsoft Office Word 2016 Expert',
        'Creation of servers with AWS (Amazon Web Services)',
      ],
      icon: <GrCertificate className="icon-size" />,
    },
    {
      frontContent: { title: 'Tae Kwon Do' },
      items: ['Green belt with blue stripe', '1 silver medal', '1 gold medal'],
      icon: <GiMuscleFat className="icon-size" />,
    },
    {
      frontContent: { title: 'Recognitions' },
      items: [
        'Distinguished Student Diploma 2022',
        'Distinguished Student Diploma 2023',
        'Perseverance Academic Medal (2017-2021)',
        'Walt Whitman Medal for Academic Effort (2021)',
      ],
      icon: <FaMedal className="icon-size" />,
    },
  ]
  return (
    <div className="cards-container">
      {achievementsData.map((data, index) => (
        <Card key={index} frontContent={data.frontContent} items={data.items} icon={data.icon} />
      ))}
    </div>
  )
}
