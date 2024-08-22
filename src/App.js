import React from 'react';
import Header from './components/Header';
import About from './components/About';
import './App.css';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Skills />
     <Hobbies />
     <Education />
     <Experience />
     <Projects />
     <Footer />
    </div>
  );
}

export default App;
