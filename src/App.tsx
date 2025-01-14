import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Presentation from './sections/Presentation'
import SkillsAndTechs from './sections/SkillsTechs'
import Contact from './sections/Contact'
import GoTopButton from './components/GoTopButton'

function App() {

  return (
    <div className='relative'>
      <Navbar />
      <Presentation />
      <SkillsAndTechs />
      <Contact />
      <GoTopButton />
    </div>
  )
}

export default App
