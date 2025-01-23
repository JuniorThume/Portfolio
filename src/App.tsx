import './App.css'
import Navbar from './components/Navbar'
import Presentation from './sections/Presentation'
import SkillsAndTechs from './sections/SkillsTechs'
import Contact from './sections/Contact'
import GoTopButton from './components/GoTopButton'
import About from './sections/About'
import Projects from './sections/Projects'

function App() {

  return (
    <div className='relative gap-2'>
      <Navbar />
      <Presentation />
      <About/>
      <SkillsAndTechs />
      <Projects />
      <Contact />
      <GoTopButton />
    </div>
  )
}

export default App
