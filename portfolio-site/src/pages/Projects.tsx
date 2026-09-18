import { motion } from 'framer-motion'
import { Github, ExternalLink, Calendar } from 'lucide-react'

const Projects = () => {
  const projects = [
  {
  id: 'cpu-scheduler',
  title: 'CPU Scheduler Visualizer',
  description: 'An interactive CPU scheduling simulator that visualizes how processes are selected, executed, and interrupted over time. Implements classic scheduling algorithms and calculates key performance metrics, making operating-system scheduling concepts easier to understand through visual simulation.',
  techStack: ['Go', 'Vue / Javascript'],
  role_label: ['Systems Programming', 'Simulation Developer'],
  role_description: [
    'Designed and implemented the scheduling simulation engine and algorithm logic.',
    'Built an interactive visualization for process execution, CPU activity, and scheduling metrics.'
  ],
  features: [
    'Implemented FCFS, SJF, SRTF, Round Robin, and Priority scheduling algorithms.',
    'Visualized process execution using interactive Gantt charts and CPU timelines.',
    'Calculated waiting time, turnaround time, response time, and other scheduling metrics.',
    'Supported multiple CPUs, CPU bursts, and I/O operations to simulate more realistic workloads.',
    'Migrated the original scheduling implementation from C to Go and developed a browser-based interface.'
  ],
  githubUrl: 'https://github.com/talaamm/CPU-Scheduler-Visualizer',
  demoUrl: 'https://cpu-scheduler-visualizer-kce3.onrender.com',
  date: 'JUNE 2026'
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
      ],
      githubUrl: 'https://github.com/talaamm/zero-shell',
      // image: '/project-0shell.jpg',
      date: 'September 2025'
    },
  ]

  const otherProjects = [
    // {
    //   id: 'fps-game',
    //   title: 'Multiplayer FPS Game ',
    //   techstack:['Rust'],
    //   githubUrl: 'https://github.com/talaamm/multiplayer-fps'
    // },
    // SOCIAL NETWORK ADD IT 
    {  // used by ~20 people solved a real problem
      id: 'gitea to github',
      title: 'Gitea To GitHub Script',
      description : "solved a problem", // 1 sentence description
      techstack:['Shell' , 'PowerShell' , 'Batch'],
      githubUrl: 'https://github.com/talaamm/gitea-to-github'
    },
    {
      id: 'ascii-art',
      title: 'Ascii Art Web',
      techstack:['Go' , 'Docker' , 'HTML' , 'CSS'],
      githubUrl: 'https://github.com/talaamm/Web-Docker-AsciiArt_March2024',
      demourl: 'https://web-docker-asciiart-march2024.onrender.com'
    },
    // {
    //   id: 'math-skills',
    //   title: 'Math Skills',
    //   techstack:['Go'],
    //   githubUrl: 'https://github.com/talaamm/math-skills_April2024'
    // },
    // {
    //   id: 'localhost',
    //   title: 'LocalHost - Rust Server',
    //   techstack:['Rust'],
    //   githubUrl: 'https://github.com/talaamm/localhost'
    // },
    // {
    //   id: 'library',
    //   title: 'Online Library Website',
    //   techstack:['HTML' , 'CSS' , 'JavaScript'],
    //   githubUrl: 'https://github.com/talaamm/Library-Website-2020',
    //   demourl: 'https://talaamm.github.io/Library-Website-2020/home%20page.html'
    // },
    {
      id: 'inv',
      title: 'Investigate a Data Set', // i hate this project i just did it to see if i like data analysis
      techstack:['Python'],
      githubUrl: 'https://github.com/talaamm/Investigate-a-Data-Set_Udacity_Nov2024'
    },
    {
      id: 'go-rel',
      title: 'Go Reloaded',
      techstack:['Go'],
      githubUrl: 'https://github.com/talaamm/go-reloaded_Oct2023'
    },
    
    {
      id: 'gt',
      title: 'Groupie Tracker', // love it!
      techstack:['Go' , 'HTML' , 'CSS' , 'Docker'],
      githubUrl: 'https://github.com/talaamm/groupie-tracker_April2024',
      demourl:'https://groupie-tracker-x4fz.onrender.com/'
    },
    {
      id: 'fg',
      title: 'Filler Game',
      techstack:['Rust'],
      githubUrl: 'https://github.com/talaamm/Filler-Game-May2025',
      demourl: 'https://cosmic-grid-filler.lovable.app/'
    },
    {
      id: 'fg',
      title: 'ATM Management System',
      techstack:['C'],
      githubUrl: 'https://github.com/talaamm/ATM-managemnet-system-June2025'
    },
    {
      id: 'fg',
      title: 'BookStore System', // univ project
      techstack:['C'],
      githubUrl: 'https://github.com/talaamm/BookStore-bzu-June2025'
    },
    {
      id: 'fg',
      title: 'Duck Hunt Game',
      techstack:['JavaScript' , 'HTML' , 'CSS'],
      githubUrl: 'https://github.com/talaamm/make-your-game',
      demourl: 'https://talaamm.github.io/make-your-game_Nov2024/'
    },
    {
      id: 'fg',
      title: 'Graphql-01', // provides marks and rank naalysis for adam's students
      techstack:['JavaScript' , 'HTML' , 'CSS'],
      githubUrl: 'https://github.com/talaamm/graphql-01',
      demourl: 'https://noorhalabi911.github.io/graphql-01/' // works only for students
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
          Hands-on work in systems programming, full-stack development, and real-time applications.
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

                <div className="project-link">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Github size={16} />
                    View On GitHub
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
                <div className="section-subtitle">{project.description}</div>
                <div className="other-project-tech">
                  <div className="other-tech-tags">
                    {project.techstack.map((tech) => (
                      <span key={tech} className="other-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              
                  {project.demourl ? (
                      <div className="project-links">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <Github size={16} />
                      </a>
                    <a
                      href={project.demourl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <ExternalLink size={16} />
                    </a> 
                  </div>): (   <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={16} />
                  View on GitHub
                </a>)}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.section>
    </div>
  )
}

export default Projects
