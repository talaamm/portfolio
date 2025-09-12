import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Certifications from './pages/Certifications'
import Experience from './pages/Experience'
import Volunteering from './pages/Volunteering'
import Recommendations from './pages/Recommendations'
import Blog from './pages/Blog'
import LanguageSkills from './pages/LanguageSkills'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/volunteering" element={<Volunteering />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/languages" element={<LanguageSkills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
