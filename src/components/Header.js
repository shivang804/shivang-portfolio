import React from 'react'
import '../styles/Header.css'
function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#education'>Education</a></li>
                <li><a href='#hobbies'>Hobbies</a></li>
                <li><a href='mailto:sharmashivang804@gmail.com'>Contact</a></li>
                <li><a href='/resume.pdf' downloada>Resume</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header