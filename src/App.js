import React from 'react';
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
