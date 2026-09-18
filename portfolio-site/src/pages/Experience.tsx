import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
// import { motion } from 'framer-motion'
import { Calendar, MapPin, Code, GraduationCap } from 'lucide-react'

const Experience = () => {
  const experiences = [
       {
      type: 'Contract',
      title: 'Full-Stack Developer',
      company: 'Proofessional Security App',
      location: 'Remote',
      period: 'August 2026 - Present',
      description: 'Designed and developed a production employee time-tracking application from the ground up for a company managing 50+ employees. Responsible for the application\'s architecture, implementation, database design, core features, testing, and deployment process, collaborating with a development partner during deployment.',
      achievements: [
'Designed and developed the application end-to-end using Flutter and Supabase.',
'Implemented employee authentication, GPS-based check-in/out, work-session tracking, workplace management, and administrative controls.',
'Built dashboards and reporting functionality for monitoring employee work hours and generating monthly reports.',
'Prepared the application for Android and iOS deployment and worked through the production deployment process collaboratively.',
'Built the system around the operational requirements of a real company and its 50+ employees.',
],
      skills: ['Flutter', 'Supabase', 'Mobile Development', 'GPS']
    },
    {
      type: 'freelance',
      title: 'Technical Writer',
      company: 'Independent / DEV Community',
      location: 'Remote',
      period: 'July 2025 - Present',
      description: 'Publish technical articles on software engineering, system design, programming concepts, and developer workflows. Break down complex topics into structured, beginner-friendly explanations and share insights from projects, competitions, and interviews.',
      achievements: [
        'Published multiple in-depth technical articles for a global developer audience',
        'Explained complex concepts in accessible and structured ways',
        'Engaged with readers through comments, feedback, and discussions'
      ],
      skills: ['Technical Writing', 'Software Engineering', 'System Design', 'Developer Education', 'Communication']
    },
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
      title: 'Software Developer',
      organization: 'Jerusalem Spikers App',
      period: 'May 2026 - June 2026',
      description: 'Contributed to a real-world app by developing a functional support system that allows users to submit inquiries directly through the app\'s support page, and assisted with deployment-related work.',
      impact: 'Designed and developed the support page and its user-facing form. Implemented form submission and automated delivery of support requests to the team\'s support email. Integrated the feature into the existing application and user experience.',
      skills: ['Technical Evaluation', 'Mentoring'],
      hours: '12',
      location: 'Remote'
    },

    {
      title: 'DEV Challenge Judge',
      organization: 'Forem / DEV Community',
      period: 'Feb 2026 - May 2026',
      description: 'Assess technical project submissions for DEV Community challenges, evaluating whether projects meet the challenge requirements and function as intended.',
      impact: 'Reviewed project submissions against challenge requirements and evaluation criteria. Verified that required functionality and project components were present. Tested projects from a user\'s perspective to assess whether they worked as expected. Evaluated overall completeness, presentation, and adherence to the challenge brief.',
      skills: ['Technical Evaluation', 'Mentoring'],
      hours: '-',
      location: 'Remote'
    },
    {
      title: 'Data Collection Volunteer',
      organization: 'PALLAM Chatbot Project at BZU',
      period: 'March 2025 - April 2025',
      description: 'Contributed to collecting, organizing, and preparing 500+ question-answer pairs used to support the development of a specialized educational chatbot.',
      impact: 'Contributed to the creation of a cross-platform educational chatbot and API, improving accuracy and accessibility of knowledge for students and researchers.',
      skills: ['Data Collection', 'Research', 'Team Collaboration', 'Documentation'],
      hours: '40+ hours',
      location: 'Remote'
    },
    {
      title: 'Coding Summer Camp - Tech Mentor and Team Leader',
      organization: 'Coding Academy of Jerusalem',
      period: 'June 2022 - July 2022',
      description: 'Led and mentored groups of students in an intensive summer camp focused on coding, robotics, and problem-solving. Designed and delivered interactive workshops on: Robotics, Coding fundamentals and hands-on programming, 3D Design with SketchUp, Problem-solving & logic, including teaching students how to solve a 3*3*3 Rubik\’s Cube, how to play Chess, and other games that develops their logic.',
      // impact: 'Helped 50+ students from underserved communities learn programming and secure tech internships.',
      skills: ['Mentoring', 'Public Speaking', 'Community Building', 'Team Leading', 'Java'],
      hours: '80+ hours',
      location: 'On-site / Jerusalem'
    },
 
    {
      title: 'Hardware & Software Developer Volunteer',
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
      period: 'Multiple Sessions during 2021',
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
          Shaping my journey through teaching, community contributions, and hands-on software engineering experience.          </p>
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
                  <h4>Gained Skills:</h4>
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
          <h1>Volunteering & Community Contributions</h1>
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
