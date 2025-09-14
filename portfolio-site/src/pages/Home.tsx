import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Users, Eye, FileText, FolderOpen } from 'lucide-react'
import { NAME, AVATAR_PATH, RESUME_URL, GITHUB_URL, LINKEDIN_URL, DEVTO_URL, EMAIL } from '../config/constants'
import Counter from '../components/Counter'

const Home = () => {
  const techStack = [
    { name: 'Go', logo: 'https://www.nicepng.com/png/full/264-2641184_111-kb-png-golang-logo.png' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    {name: 'Rust', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png'},
    // { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { name: 'React Native', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    {name: 'Java', logo: 'https://img.icons8.com/color/512/java-coffee-cup-logo--v2.png'},
    { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'Docker', logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' },
    // { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
    {name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'},
    // {name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'},
    {name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'},
    {name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'},
    // {name: 'Sass', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg'},
    // {name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Bootstrap.svg'},
    // {name: 'Material UI', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Material-UI.svg'},
    // {name: 'Ant Design', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Material-UI.svg'},
    {name: 'C' , logo:'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png'},
    {name: 'Supabase', logo: 'https://img.icons8.com/fluent/512/supabase.png'},
 {name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png'},
 {name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'},
 {name: 'Jira', logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg'},
 {name: 'Cursor' , logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/cursor.png'},
 {name:'GitHub' , logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'}
//  {name: 'Confluence', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'},
//  {name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'},
//  {name: 'Trello', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'},
 
  ]

  // const featuredBlogs = [
  //   {
  //     title: "Building Scalable APIs with Go",
  //     url: "https://dev.to/yourusername/building-scalable-apis-with-go",
  //     views: "15.2k",
  //     date: "2024-01-15"
  //   },
  //   {
  //     title: "React Performance Optimization Tips",
  //     url: "https://dev.to/yourusername/react-performance-optimization-tips",
  //     views: "12.8k",
  //     date: "2024-02-03"
  //   },
  //   {
  //     title: "Database Design Best Practices",
  //     url: "https://dev.to/yourusername/database-design-best-practices",
  //     views: "9.5k",
  //     date: "2024-02-20"
  //   }
  // ]

  return (
    <div className="container">
      {/* Hero Section */}
      <motion.section 
        className="section text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <motion.div
            className="profile-photo mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img
              src={AVATAR_PATH}
              alt={NAME}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid var(--accent)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            />
          </motion.div>

          <h1>Hi, I'm {NAME}</h1>
          <p className="hero-subtitle">
          Computer Engineering student, Full-Stack Developer & Tech Writer passionate about building scalable applications and sharing knowledge with the developer community </p>

          <div className="hero-stats mb-8">
            <div className="stat-item">
              <FolderOpen size={24} />
              <span><Counter target={20} suffix="+ Projects" /></span>
            </div>
            <div className="stat-item">
              <Users size={24} />
              <span><Counter target={1400} suffix="+ Dev.to Followers" /></span>
            </div>
            <div className="stat-item">
              <Eye size={24} />
              <span><Counter target={2000} suffix="+ Blog Readers" /></span>
            </div>
          </div>

          <div className="hero-links">
            <a href={RESUME_URL} className="btn-primary" download>
              <FileText size={20} />
              Download Resume
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-secondary">
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-center mb-8">Tech Stack</h2>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="tech-logo">
                {typeof tech.logo === 'string' && (tech.logo.startsWith('http://') || tech.logo.startsWith('https://')) ? (
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`} 
                    style={{ width: '52px', height: '52px', objectFit: 'contain' }} 
                  />
                ) : (
                  <span>{tech.logo}</span>
                )}
              </div>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

     {/* { Featured Blog Posts
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-center mb-8">Featured Blog Posts</h2>
        {/* {<div className="grid grid-3">
          {/* {featuredBlogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              className="card blog-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3>{blog.title}</h3>
              <div className="blog-meta">
                <span className="blog-views">{blog.views} views</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              <a 
                href={blog.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="blog-link"
              >
                Read on Dev.to <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>}
      </motion.section>} */}

      {/* Quick Links */}
      <motion.section 
        className="section text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <h2 className="mb-8">Let's Connect</h2>
        <div className="social-links">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Github size={24} />
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
            LinkedIn
          </a>
          <a href={DEVTO_URL} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={24} />
            Dev.to
          </a>
          {/* <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer"></a> */}
          <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer">
            <Mail size={24} />
            Email
          </a>
        </div>
      </motion.section>
    </div>
  )
}

export default Home