import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Users, Eye, FileText } from 'lucide-react'

const Home = () => {
  const techStack = [
    { name: 'Go', logo: '🐹' },
    { name: 'JavaScript', logo: '🟨' },
    { name: 'TypeScript', logo: '🔷' },
    { name: 'React', logo: '⚛️' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'SQL', logo: '🗄️' },
    { name: 'Python', logo: '🐍' },
    { name: 'Docker', logo: '🐳' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Git', logo: '📦' },
  ]

  const featuredBlogs = [
    {
      title: "Building Scalable APIs with Go",
      url: "https://dev.to/yourusername/building-scalable-apis-with-go",
      views: "15.2k",
      date: "2024-01-15"
    },
    {
      title: "React Performance Optimization Tips",
      url: "https://dev.to/yourusername/react-performance-optimization-tips",
      views: "12.8k",
      date: "2024-02-03"
    },
    {
      title: "Database Design Best Practices",
      url: "https://dev.to/yourusername/database-design-best-practices",
      views: "9.5k",
      date: "2024-02-20"
    }
  ]

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
              src="/placeholder-avatar.jpg"
              alt="Your Name"
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

          <h1>Hi, I'm Your Name</h1>
          <p className="hero-subtitle">
            Full-Stack Developer & Tech Writer passionate about building scalable applications 
            and sharing knowledge with the developer community.
          </p>

          <div className="hero-stats mb-8">
            <div className="stat-item">
              <Users size={24} />
              <span>1,400+ Dev.to Followers</span>
            </div>
            <div className="stat-item">
              <Eye size={24} />
              <span>2,000+ Blog Readers</span>
            </div>
          </div>

          <div className="hero-links">
            <a href="/resume.pdf" className="btn-primary">
              <FileText size={20} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
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
              <div className="tech-logo">{tech.logo}</div>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Blog Posts */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-center mb-8">Featured Blog Posts</h2>
        <div className="grid grid-3">
          {featuredBlogs.map((blog, index) => (
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
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section 
        className="section text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <h2 className="mb-8">Let's Connect</h2>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
            LinkedIn
          </a>
          <a href="https://dev.to/yourusername" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={24} />
            Dev.to
          </a>
          <a href="mailto:your.email@example.com">
            <Mail size={24} />
            Email
          </a>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
