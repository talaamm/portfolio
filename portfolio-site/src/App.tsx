import { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
// import ProjectDetail from './pages/ProjectDetail'
import Certifications from './pages/Certifications'
import Experience from './pages/Experience'
// import Volunteering from './pages/Volunteering'
import Recommendations from './pages/Recommendations'
import Blog from './pages/Blog'
import LanguageSkills from './pages/LanguageSkills'
import Education from './pages/Education'
import Contact from './pages/Contact'
import './App.css'

const VALID_PATHS = ['/', '/projects', '/certifications', '/experience', '/recommendations', '/blog', '/languages', '/education', '/contact']

function App() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const redirectPath = searchParams.get('redirect')

  useEffect(() => {
    if (redirectPath && redirectPath.startsWith('/') && !redirectPath.includes('..')) {
      const path = redirectPath.replace(/\?.*$/, '').split('?')[0]
      if (VALID_PATHS.includes(path)) {
        setSearchParams({}, { replace: true })
        navigate(path, { replace: true })
      }
    }
  }, [navigate, redirectPath, setSearchParams])

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/volunteering" element={<Volunteering />} /> */}
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/languages" element={<LanguageSkills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
