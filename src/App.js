import React from 'react';
import SalesForecasting from './components/SalesForecasting';
import MatrixBackground from './components/MatrixBackground';
import Header from './components/Header';
import ResumeDownload from './components/ResumeDownload';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <MatrixBackground />
      <Header />
      <ResumeDownload />
      <About />
      <Projects />
      <SalesForecasting />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;