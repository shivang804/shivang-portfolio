import React from 'react'
import '../styles/About.css'
function About() {
  return (
   <section id = "about">
    <h2>About Me</h2>
    <img src='SHIVANGphoto.jpg' alt = "SHIVANG" className='avatar' />
    <p>Hi, I'm SHIVANG. I'm a Software Developer with a passion for building web applications.</p>
    <p>
        <a href='https://github.com/shivang804' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <a href='https://www.linkedin.com/in/shivang-741b781aa/' target='_blank' rel='noopener noreferrer'>linkedin</a>
    </p>
   </section>
  )
}

export default About