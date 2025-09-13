import { motion } from 'framer-motion'
import { Github, ExternalLink, Calendar } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 'social-n',
      title: 'Social Network App',
      description: 'A full-stack Facebook-like social networking application. Developed a feature-rich social network supporting authentication, profiles, followers, posts, groups, real-time chat (WebSockets), and notifications. The system was fully containerized with Docker for smooth deployment of frontend and backend services.',
      techStack: ['Go', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Docker', 'SQLite'],
      role_label: ['Team Leader', 'Integration Engineer'],
      role_description: ['Led a 6-person team, bridging frontend and backend workflows.', 'Bridged Go backend and Vue.js frontend communication'],
      features: [
        'Implemented session & cookie-based authentication with bcrypt encryption.',
        'Integrated real-time chat and group messaging using Gorilla WebSocket.',
        'Designed and migrated relational database schemas with golang-migrate.',
        'Containerized services into separate Docker images for frontend & backend.',
      ],
      githubUrl: 'https://github.com/talaamm/Social-Network-March2025/',
      demoUrl: 'https://socialnetwork-demo.vercel.app',
      // image: '/project-socialnetwork.jpg',
      date: 'February 2025'
    },
    {
      id: 'mini-framework',
      title: 'Custom JavaScript Mini Framework + TodoMVC',
      description: 'Built a lightweight JavaScript framework from scratch implementing DOM abstraction, routing, state management, and custom event handling. To demonstrate its functionality, developed a TodoMVC application entirely on top of this framework. The project also included full documentation and usage examples.',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      role_label: ['Framework Developer'],
      role_description: [
        'Designed and implemented the framework core (virtual DOM, routing, state management, and custom event system).',
      ],
      features: [
        'Abstracted and manipulated the DOM using a virtual DOM-like structure.',
        'Implemented client-side routing synced with URL state.',
        'Built a lightweight state management system for app-wide data consistency.',
        'Developed a custom event handling mechanism without relying on addEventListener.',
        'Created a fully functional TodoMVC demo powered by the framework.',
      ],
      githubUrl: 'https://github.com/talaamm/mini-js-framework',
      demoUrl: 'https://talaamm.github.io/mini-js-framework/p',
      // image: '/project-miniframework.jpg',
      date: 'March 2025'
    },
    {
      id: '0-shell',
      title: '0-Shell: Minimalist Unix Shell in Rust',
      description: 'Developed a lightweight, Unix-like shell from scratch in Rust, capable of executing essential commands (ls, cd, pwd, echo, cat, cp, mv, rm, mkdir). Built without external shell utilities, the project reinforced system-level programming concepts including process management, filesystem operations, and system call handling.',
      techStack: ['Rust'],
      role_label: ['Core Engine Developer'],
      role_description: [
        'Implemented the core engine of the shell, including REPL loop, command parser, and dispatcher.',
        'Designed a minimal but safe parser supporting quoted strings, flags extraction, and multiple spacing edge cases.',
        'Built the command dispatcher mapping user input to built-in shell commands, with graceful error handling for unknown commands.',
        'Maintained shell state (current working directory, running flag) ensuring correct behavior of built-ins like cd.',
        'Enhanced echo command for reliable testing of the REPL loop.'
      ],
      features: [
        'Executed built-in Unix-like commands without external binaries.',
        'Supported ls flags (-l, -a, -F) and rm recursive deletion.',
        'Handled Ctrl+D gracefully for shell exit.',
        'Implemented proper prompt behavior and input parsing.',
        'Bonus: added usability features like custom error messages and directory-aware prompts.',
      ],
      githubUrl: 'https://github.com/talaamm/zero-shell',
      // image: '/project-0shell.jpg',
      date: 'September 2025'
    },
    {
      id: 'dog-classifier',
      title: 'Dog Breed Image Classifier',
      description: 'Applied Python skills to build an image classification system for a citywide dog show. Leveraged pretrained CNN models (AlexNet, VGG, ResNet) to identify whether uploaded images were dogs, and if so, classify the breed. Compared accuracy and runtime performance across models to determine the best fit for the application.',
      techStack: ['Python', 'Deep Learning (CNNs)', 'ImageNet'],
      role_label: ['Python Developer'],
      role_description: [
        'Integrated pretrained CNN architectures for classification.',
        'Wrote evaluation scripts to compare accuracy, runtime, and misclassification cases.',
        'Automated dataset preprocessing and results reporting.'
      ],
      features: [
        'Classified images as dog vs. not-dog using CNN models.',
        'Identified specific dog breeds from the ImageNet-trained models.',
        'Benchmarked AlexNet, VGG, and ResNet architectures for accuracy and runtime trade-offs.',
        'Handled visually similar breeds (e.g., Beagle vs. Walker Hound) with precision testing.',
      ],
      githubUrl: 'https://github.com/talaamm/Image-Classifier-Udacity', // replace with your repo if available
      // image: '/project-dogclassifier.jpg',
      date: 'September 2025'
    },
  ]

  const otherProjects = [
    {
      id: 'fps-game',
      title: 'Multiplayer FPS Game ',
      techstack:['Rust'],
      githubUrl: 'https://github.com/talaamm/multiplayer-fps'
    },
    {
      id: 'gitea to github',
      title: 'Gitea To GitHub Script',
      techstack:['Shell' , 'PowerShell' , 'Batch'],
      githubUrl: 'https://github.com/talaamm/gitea-to-github'
    },
    {
      id: 'ascii-art',
      title: 'Ascii Art Web',
      techstack:['Go' , 'Docker' , 'HTML' , 'CSS'],
      githubUrl: 'https://github.com/talaamm/Web-Docker-AsciiArt_March2024'
    },
    {
      id: 'math-skills',
      title: 'Math Skills',
      techstack:['Go'],
      githubUrl: 'https://github.com/talaamm/math-skills_April2024'
    },
    {
      id: 'localhost',
      title: 'LocalHost - Rust Server',
      techstack:['Rust'],
      githubUrl: 'https://github.com/talaamm/localhost'
    },
    {
      id: 'library',
      title: 'Online Library Website',
      techstack:['HTML' , 'CSS' , 'JavaScript'],
      githubUrl: 'https://github.com/talaamm/Library-Website-2020'
    },
    {
      id: 'inv',
      title: 'Investigate a Data Set',
      techstack:['Python'],
      githubUrl: 'https://github.com/talaamm/Investigate-a-Data-Set_Udacity_Nov2024'
    },
    
    {
      id: 'gt',
      title: 'Groupie Tracker',
      techstack:['Go' , 'HTML' , 'CSS' , 'Docker'],
      githubUrl: 'https://github.com/talaamm/groupie-tracker_April2024'
    },
    {
      id: 'fg',
      title: 'Filler Game',
      techstack:['Rust'],
      githubUrl: 'https://github.com/talaamm/Filler-Game-May2025'
    },
    {
      id: 'fg',
      title: 'Smart Road',
      techstack:['Rust'],
      githubUrl: 'https://github.com/talaamm/Smart-Road-May2025'
    },
    {
      id: 'fg',
      title: 'ATM Management System',
      techstack:['C'],
      githubUrl: 'https://github.com/talaamm/ATM-managemnet-system-June2025'
    },
    {
      id: 'fg',
      title: 'BookStore System',
      techstack:['C'],
      githubUrl: 'https://github.com/talaamm/BookStore-bzu-June2025'
    },
    {
      id: 'fg',
      title: 'Duck Hunt Game',
      techstack:['JavaScript' , 'HTML' , 'CSS'],
      githubUrl: 'https://github.com/talaamm/make-your-game'
    },
    {
      id: 'fg',
      title: 'Graphql-01',
      techstack:['JavaScript' , 'HTML' , 'CSS'],
      githubUrl: 'https://github.com/talaamm/graphql-01'
    },

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

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-date">
                    <Calendar size={16} />
                    {project.date}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Role Section */}
                <div className="project-section">
                  <div className="section-header">
                    <h4>My Role</h4>
                  </div>
                  <div className="role-content">
                    <div className="role-split">
                      {project.role_label && project.role_description && project.role_label.map((label, index) => (
                        <div key={index} className="role-item">
                          <span className="role-label">{label}</span>
                          <span className="role-description">{project.role_description[index]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Tasks/Features Section */}
                {project.features && (
                  <div className="project-section">
                    <div className="section-header">
                      <h4>Features</h4>
                    </div>
                    <ul className="features-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* {project.challenges && (
                  <div className="project-section">
                    <div className="section-header">
                      <span className="section-icon">🎯</span>
                      <h4>Key Challenges</h4>
                    </div>
                    <p className="challenges-text">{project.challenges}</p>
                  </div>
                )} */}

                {/* Tech Stack Section */}
                <div className="project-tech">
                  <strong>Tech Stack:</strong>
                  <div className="tech-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Section */}
        <motion.section
          className="section mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h2>Other Projects</h2>
            <p className="section-subtitle">
              Additional projects and experiments from my GitHub repositories.
            </p>
          </div>

          <div className="other-projects-grid">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="other-project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <h3 className="other-project-title">{project.title}</h3>
                <div className="other-project-tech">
                  <div className="other-tech-tags">
                    {project.techstack.map((tech) => (
                      <span key={tech} className="other-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.section>
    </div>
  )
}

export default Projects
