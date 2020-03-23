import React from 'react';
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
