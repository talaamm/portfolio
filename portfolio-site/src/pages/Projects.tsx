import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, ExternalLink, Calendar } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      role: 'Full-Stack Developer',
      challenges: 'Scaled to handle 10k+ concurrent users, implemented real-time inventory updates',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      demoUrl: 'https://ecommerce-demo.vercel.app',
      image: '/project-ecommerce.jpg',
      date: '2024-01'
    },
    {
      id: 'task-management-app',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and project tracking.',
      techStack: ['React', 'TypeScript', 'Go', 'WebSocket', 'Redis'],
      role: 'Backend Lead',
      challenges: 'Implemented real-time collaboration features and optimized database queries for large datasets',
      githubUrl: 'https://github.com/yourusername/task-manager',
      demoUrl: 'https://taskmanager-demo.netlify.app',
      image: '/project-taskmanager.jpg',
      date: '2023-11'
    },
    {
      id: 'ai-chatbot',
      title: 'AI-Powered Chatbot',
      description: 'Intelligent chatbot with natural language processing, context awareness, and multi-language support.',
      techStack: ['Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Docker'],
      role: 'AI/ML Engineer',
      challenges: 'Optimized response times and implemented context retention across conversations',
      githubUrl: 'https://github.com/yourusername/ai-chatbot',
      demoUrl: 'https://ai-chatbot-demo.herokuapp.com',
      image: '/project-chatbot.jpg',
      date: '2023-09'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization, custom reports, and export functionality.',
      techStack: ['React', 'D3.js', 'Node.js', 'MongoDB', 'AWS'],
      role: 'Frontend Developer',
      challenges: 'Handled large datasets visualization and implemented real-time data streaming',
      githubUrl: 'https://github.com/yourusername/analytics-dashboard',
      demoUrl: 'https://analytics-demo.vercel.app',
      image: '/project-analytics.jpg',
      date: '2023-07'
    },
    {
      id: 'mobile-app',
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.',
      techStack: ['React Native', 'Firebase', 'Redux', 'Expo', 'Google Maps API'],
      role: 'Mobile Developer',
      challenges: 'Optimized performance for low-end devices and implemented offline functionality',
      githubUrl: 'https://github.com/yourusername/fitness-app',
      demoUrl: 'https://fitness-app-demo.netlify.app',
      image: '/project-fitness.jpg',
      date: '2023-05'
    }
  ]

  return (
    <div className="container">
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <h1>Featured Projects</h1>
          <p className="section-subtitle">
            A showcase of my best work, highlighting technical challenges solved and impact created.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NzM4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg=='
                  }}
                />
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-date">
                    <Calendar size={16} />
                    {project.date}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-role">
                  <strong>Role:</strong> {project.role}
                </div>
                
                <div className="project-challenges">
                  <strong>Key Challenges:</strong> {project.challenges}
                </div>
                
                <div className="project-tech">
                  <strong>Tech Stack:</strong>
                  <div className="tech-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  <Link to={`/projects/${project.id}`} className="btn-primary">
                    View Details
                  </Link>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Projects
