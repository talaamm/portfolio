import { motion } from 'framer-motion'
import { Heart, Users, Globe, Award } from 'lucide-react'

const Volunteering = () => {
  const volunteering = [
    {
      title: 'Code for Good - Tech Mentor',
      organization: 'Code for Good Foundation',
      period: '2023-01 - Present',
      description: 'Mentoring underrepresented students in technology, providing coding workshops and career guidance.',
      impact: 'Helped 50+ students from underserved communities learn programming and secure tech internships.',
      skills: ['Mentoring', 'Public Speaking', 'Community Building', 'JavaScript', 'Python'],
      hours: '200+ hours',
      location: 'Remote & Local'
    },
    {
      title: 'Open Source Contributor',
      organization: 'Various Open Source Projects',
      period: '2022-06 - Present',
      description: 'Contributing to open source projects, fixing bugs, and adding new features to benefit the developer community.',
      impact: 'Contributed to 10+ projects with 500+ commits, helping thousands of developers worldwide.',
      skills: ['Git', 'Code Review', 'Documentation', 'Go', 'React', 'Testing'],
      hours: '300+ hours',
      location: 'Global'
    },
    {
      title: 'STEM Education Volunteer',
      organization: 'Local School District',
      period: '2022-09 - 2023-06',
      description: 'Teaching robotics and programming to elementary and middle school students during after-school programs.',
      impact: 'Introduced 200+ students to STEM fields, with 30% expressing interest in pursuing tech careers.',
      skills: ['Teaching', 'Robotics', 'Arduino', 'Scratch', 'Event Planning'],
      hours: '150+ hours',
      location: 'Local Schools'
    },
    {
      title: 'Tech for Social Good',
      organization: 'Non-Profit Tech Alliance',
      period: '2023-03 - Present',
      description: 'Building web applications and digital tools for non-profit organizations to improve their operations.',
      impact: 'Developed 5 digital solutions that improved efficiency for 3 non-profits, serving 1000+ beneficiaries.',
      skills: ['Web Development', 'Database Design', 'User Research', 'Project Management'],
      hours: '100+ hours',
      location: 'Remote'
    }
  ]

  const totalImpact = {
    students: '250+',
    hours: '750+',
    projects: '15+',
    organizations: '8+'
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
          <h1>Volunteering & Community Impact</h1>
          <p className="section-subtitle">
            Giving back to the community through technology education and open source contributions.
          </p>
        </div>

        {/* Impact Summary */}
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
        </motion.div>

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
              
              <div className="volunteer-impact">
                <h4>Impact Created:</h4>
                <p>{volunteer.impact}</p>
              </div>
              
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

export default Volunteering
