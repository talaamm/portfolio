import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Code, GraduationCap } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: 'teaching',
      title: 'Coding & Robotics Instructor',
      company: 'Tech Academy',
      location: 'Remote',
      period: '2023-01 - Present',
      description: 'Teaching programming fundamentals and robotics to students aged 12-18. Developed curriculum and hands-on projects.',
      achievements: [
        'Taught 200+ students across multiple cohorts',
        'Developed interactive coding curriculum',
        'Mentored students in robotics competitions',
        'Achieved 95% student satisfaction rate'
      ],
      skills: ['Teaching', 'Curriculum Development', 'Python', 'Arduino', 'Robotics']
    },
    {
      type: 'freelance',
      title: 'Full-Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2022-06 - Present',
      description: 'Building custom web applications and providing technical consulting for startups and small businesses.',
      achievements: [
        'Delivered 15+ successful projects',
        'Increased client revenue by 40% through automation',
        'Built scalable e-commerce solutions',
        'Provided technical mentorship to junior developers'
      ],
      skills: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      type: 'internship',
      title: 'Software Engineering Intern',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      period: '2022-06 - 2022-12',
      description: 'Worked on microservices architecture and API development. Collaborated with senior engineers on production systems.',
      achievements: [
        'Contributed to 3 major product features',
        'Optimized API response times by 60%',
        'Participated in code reviews and testing',
        'Presented technical solutions to stakeholders'
      ],
      skills: ['Go', 'Kubernetes', 'gRPC', 'Redis', 'Git']
    },
    {
      type: 'hackathon',
      title: 'Hackathon Winner',
      company: 'TechHack 2023',
      location: 'Virtual',
      period: '2023-03',
      description: 'Led a team of 4 developers to build an AI-powered learning platform in 48 hours.',
      achievements: [
        'Won 1st place out of 50+ teams',
        'Built MVP with AI integration',
        'Secured $10k in funding',
        'Featured in tech publications'
      ],
      skills: ['AI/ML', 'React', 'Python', 'Team Leadership', 'Rapid Prototyping']
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'teaching': return <GraduationCap size={20} />
      case 'freelance': return <Code size={20} />
      case 'internship': return <Users size={20} />
      case 'hackathon': return <Code size={20} />
      default: return <Code size={20} />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'teaching': return 'var(--primary)'
      case 'freelance': return 'var(--secondary)'
      case 'internship': return 'var(--accent)'
      case 'hackathon': return '#10b981'
      default: return 'var(--primary)'
    }
  }

  return (
    <div className="container">
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <h1>Experience</h1>
          <p className="section-subtitle">
            A diverse range of experiences in teaching, development, and innovation.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-type" style={{ color: getTypeColor(exp.type) }}>
                    {getTypeIcon(exp.type)}
                    <span>{exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}</span>
                  </div>
                  <div className="experience-period">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <h3>{exp.title}</h3>
                <div className="experience-company">
                  <span className="company-name">{exp.company}</span>
                  <div className="company-location">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-skills">
                  <h4>Technologies Used:</h4>
                  <div className="skills-tags">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Experience
