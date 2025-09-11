import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Github, ExternalLink, Calendar, ArrowLeft, Users, Clock } from 'lucide-react'

const ProjectDetail = () => {
  useParams()
  
  // In a real app, you'd fetch this data based on the ID
  const project = {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A comprehensive full-stack e-commerce solution built with modern technologies, featuring payment integration, inventory management, and a powerful admin dashboard.',
    longDescription: `This project represents a complete e-commerce ecosystem designed to handle high-traffic scenarios while maintaining excellent user experience. The platform includes customer-facing storefront, admin management system, and robust backend APIs.

Key features include real-time inventory tracking, secure payment processing, order management, customer accounts, product reviews, and comprehensive analytics. The system is designed to scale horizontally and can handle thousands of concurrent users.`,
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker', 'Redis', 'AWS S3'],
    role: 'Full-Stack Developer & Project Lead',
    challenges: 'Scaled to handle 10k+ concurrent users, implemented real-time inventory updates, optimized database queries for sub-second response times',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    image: '/project-ecommerce.jpg',
    date: '2024-01',
    duration: '6 months',
    teamSize: '4 developers',
    features: [
      'User authentication and authorization',
      'Product catalog with advanced filtering',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Order management system',
      'Admin dashboard for inventory',
      'Real-time notifications',
      'Responsive design for all devices'
    ],
    screenshots: [
      '/screenshot-1.jpg',
      '/screenshot-2.jpg',
      '/screenshot-3.jpg'
    ]
  }

  return (
    <div className="container">
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="project-detail-header">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          
          <div className="project-hero">
            <div className="project-hero-content">
              <h1>{project.title}</h1>
              <p className="project-subtitle">{project.description}</p>
              
              <div className="project-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{project.duration}</span>
                </div>
                <div className="meta-item">
                  <Users size={16} />
                  <span>{project.teamSize}</span>
                </div>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
            
            <div className="project-hero-image">
              <img 
                src={project.image} 
                alt={project.title}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NzM4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg=='
                }}
              />
            </div>
          </div>
        </div>

        <div className="project-detail-content">
          <div className="project-detail-grid">
            <div className="project-detail-main">
              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2>About This Project</h2>
                <p>{project.longDescription}</p>
              </motion.div>

              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2>Key Features</h2>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h2>Technical Challenges</h2>
                <p>{project.challenges}</p>
              </motion.div>
            </div>

            <div className="project-detail-sidebar">
              <motion.div 
                className="card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3>Tech Stack</h3>
                <div className="tech-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h3>My Role</h3>
                <p>{project.role}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ProjectDetail
