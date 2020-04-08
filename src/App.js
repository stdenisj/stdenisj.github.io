import React from 'react';
import Navigation from './components/Navigation'
import SplashPage from './components/SplashPage'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <SplashPage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
