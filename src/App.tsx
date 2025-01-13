import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Presentation from './sections/Presentation'
import SkillsAndTechs from './sections/SkillsTechs'
import Contact from './sections/Contact'

function App() {

  return (
    <div>
      <Navbar />
      <Presentation />
      <SkillsAndTechs />
      <Contact/>
    </div>
  )
}

export default App
