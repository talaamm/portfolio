import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
// import { motion } from 'framer-motion'
import { Calendar, MapPin, Code, GraduationCap } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: 'teaching',
      title: 'Coding & Robotics Instructor',
      company: 'TechnoGeeks',
      location: 'On-site',
      period: 'March 2024 - December 2024',
      description: 'Teaching programming fundamentals and robotics to school students. Developed curriculum and hands-on projects. During fun activities, I was a VR activator, where students played games with VR Headsets.',
      achievements: [
        'Taught 500+ students across multiple cohorts and schools',
        // 'Developed interactive coding curriculum',
        'Mentored students in robotics competitions',
        'Achieved more than 95% student satisfaction rate'
      ],
      skills: ['Teaching', 'Curriculum Development', 'Python', 'Arduino', 'Robotics' , 'VR']
    },
  ]

  const getTypeIcon = (type: any) => {
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

  const volunteering = [
    {
      title: 'Coding Summer Camp - Tech Mentor and Team Leader',
      organization: 'Coding Academy of Jerusalem',
      period: 'June 2022 - July 2022',
      description: 'Led and mentored groups of students in an intensive summer camp focused on coding, robotics, and problem-solving. Designed and delivered interactive workshops on:Robotics, Coding fundamentals and hands-on programming, 3D Design with SketchUp, Problem-solving & logic including teaching students how to solve the Rubik\’s Cube, How to play Chess and other games that depend on logic.',
      // impact: 'Helped 50+ students from underserved communities learn programming and secure tech internships.',
      skills: ['Mentoring', 'Public Speaking', 'Community Building', 'Team Leading', 'Java'],
      hours: '80+ hours',
      location: 'On-site / Jerusalem'
    },
    {
      title: 'Data Collection Volunteer',
      organization: 'PALLAM Chatbot Project at BZU',
      period: 'March 2025 - April 2025',
      description: 'Assisted in building a specialized chatbot by collecting and organizing thousands of question-answer pairs to support the training of a fine-tuned large language model (LLM).',
      impact: 'Contributed to the creation of a cross-platform educational chatbot and API, improving accuracy and accessibility of knowledge for students and researchers.',
      skills: ['Data Collection', 'Research', 'Team Collaboration', 'Documentation'],
      hours: '40+ hours',
      location: 'Remote'
    },
    {
      title: 'Volunteer Hardware & Software Developer',
      organization: 'Rosary Sister\'s High School - NASA Competition Team',
      period: 'January 2022 - March 2022',
      description: 'Volunteered to design and build a demo tool for a student team competing in a NASA challenge. Developed an Arduino-based device with a light sensor to analyze leaf color and determine nutritional needs, displaying results on a screen.',
      impact: 'Enabled the team to demonstrate a functional prototype of their project for the competition, supporting their hands-on research and presentation.',
      skills: ['Arduino', 'Sensor Integration', 'Programming', 'Team Collaboration', 'Problem Solving'],
      hours: '30+ hours',
      location: 'On-site / Jerusalem'
    },
    {
      title: 'Mentor - Hour of Code Events',
      organization: "Rosary Sister's High School",
      period: 'Multiple Sessions',
      description: 'Mentored students in coding and computational thinking during Hour of Code events at school, guiding beginners through interactive programming exercises and fostering interest in technology.',
      impact: 'Helped over a lot of students gain hands-on experience with coding, inspiring interest in computer science and developing foundational programming skills.',
      skills: ['Mentoring', 'Teaching', 'Java', 'Problem Solving', 'Patience'],
      hours: '12+ hours',
      location: 'Hybrid / Jerusalem'
    },    
  ]

  // const totalImpact = {
  //   students: '250+',
  //   hours: '750+',
  //   projects: '15+',
  //   organizations: '8+'
  // }

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
          Shaping my journey from tech education to software engineering. Eager to take on new roles and internships that expand my knowledge, challenge my skills, and contribute to impactful projects..
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
      {/* <div className="container"> */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <h1>Volunteering & Community Impact</h1>
          <p className="section-subtitle">
          Passionate about giving back to the tech community, through mentoring, teaching, and contributing to impactful tech projects.
          </p>
        </div>
        {/* 
        {/* Impact Summary 
        <motion.div 
          className="impact-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="impact-stats">
            <div className="impact-stat">
              <Users size={32} />
              <div className="stat-content">
                <span className="stat-number">{totalImpact.students}</span>
                <span className="stat-label">Students Mentored</span>
              </div>
            </div>
            <div className="impact-stat">
              <Heart size={32} />
              <div className="stat-content">
                <span className="stat-number">{totalImpact.hours}</span>
                <span className="stat-label">Volunteer Hours</span>
              </div>
            </div>
            <div className="impact-stat">
              <Globe size={32} />
              <div className="stat-content">
                <span className="stat-number">{totalImpact.projects}</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
            <div className="impact-stat">
              <Award size={32} />
              <div className="stat-content">
                <span className="stat-number">{totalImpact.organizations}</span>
                <span className="stat-label">Organizations Helped</span>
              </div>
            </div>
          </div>
        </motion.div> */}

        <div className="volunteering-grid">
          {volunteering.map((volunteer, index) => (
            <motion.div
              key={index}
              className="volunteering-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="volunteer-header">
                <h3>{volunteer.title}</h3>
                <div className="volunteer-organization">{volunteer.organization}</div>
                <div className="volunteer-period">{volunteer.period}</div>
              </div>

              <p className="volunteer-description">{volunteer.description}</p>

              {volunteer.impact && (
                <div className="volunteer-impact">
                  <h4>Impact Created:</h4>
                  <p>{volunteer.impact}</p>
                </div>
              )}
              <div className="volunteer-details">
                <div className="detail-item">
                  <strong>Hours:</strong> {volunteer.hours}
                </div>
                <div className="detail-item">
                  <strong>Location:</strong> {volunteer.location}
                </div>
              </div>

              <div className="volunteer-skills">
                <h4>Skills Gained:</h4>
                <div className="skills-tags">
                  {volunteer.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
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
