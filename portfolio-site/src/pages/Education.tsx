import { motion } from 'framer-motion'
import { GraduationCap, Award, Trophy, Star, BookOpen, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      id: 'bachelor',
      level: 'Bachelor Degree',
      institution: 'Birzeit University',
      degree: 'Bachelor of Science in Computer Science',
      location: 'Birzeit, Palestine',
      startDate: '2021',
      endDate: '2025',
      status: 'In Progress',
      gpa: '3.8/4.0',
      achievements: [
        {
          title: 'Honor\'s List',
          description: 'Dean\'s List for 2 consecutive semesters',
          icon: '🏆',
          highlight: '2x Consecutive',
          color: '#fbbf24'
        },
        {
          title: 'Calculus Excellence',
          description: 'Achieved 99% in Advanced Calculus',
          icon: '📊',
          highlight: '99% Grade',
          color: '#10b981'
        },
        {
          title: 'Academic Excellence',
          description: 'Consistently high performance across all subjects',
          icon: '⭐',
          highlight: 'Top Performer',
          color: '#3b82f6'
        }
      ],
      description: 'Pursuing a comprehensive Computer Science degree with focus on software engineering, algorithms, and modern development practices.',
      logo: '🎓'
    },
    {
      id: 'high-school',
      level: 'High School',
      institution: 'Al-Iman Secondary School',
      degree: 'Tawjihi (Palestinian General Secondary Education)',
      location: 'Jerusalem, Palestine',
      startDate: '2017',
      endDate: '2021',
      status: 'Completed',
      gpa: '98.5/100',
      achievements: [
        {
          title: 'School Valedictorian',
          description: 'Highest grade in the entire school',
          icon: '🥇',
          highlight: '1st Place',
          color: '#fbbf24'
        },
        {
          title: 'District Excellence',
          description: 'Second highest grade in Jerusalem District',
          icon: '🥈',
          highlight: '2nd District',
          color: '#6b7280'
        },
        {
          title: 'National Recognition',
          description: 'Third highest grade across Palestine',
          icon: '🥉',
          highlight: '3rd National',
          color: '#cd7c2f'
        },
        {
          title: 'International Standing',
          description: 'Third highest grade worldwide',
          icon: '🌍',
          highlight: '3rd Global',
          color: '#8b5cf6'
        }
      ],
      description: 'Outstanding academic performance in the Palestinian Tawjihi examination, achieving top rankings both nationally and internationally.',
      logo: '🏫'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return '#10b981'
      case 'In Progress':
        return '#3b82f6'
      default:
        return '#6b7280'
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
          <h1>Education</h1>
          <p className="section-subtitle">
            My academic journey and outstanding achievements throughout my educational career.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              className="education-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Education Header */}
              <div className="education-header">
                <div className="education-logo">
                  <span style={{ fontSize: '3rem' }}>{education.logo}</span>
                </div>
                <div className="education-info">
                  <div className="education-level">{education.level}</div>
                  <h2 className="education-institution">{education.institution}</h2>
                  <h3 className="education-degree">{education.degree}</h3>
                  <div className="education-meta">
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{education.location}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{education.startDate} - {education.endDate}</span>
                    </div>
                    <div className="meta-item">
                      <BookOpen size={16} />
                      <span>GPA: {education.gpa}</span>
                    </div>
                    <div className="meta-item">
                      <div 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(education.status) }}
                      >
                        {education.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Description */}
              <p className="education-description">{education.description}</p>

              {/* Achievements Section */}
              <div className="achievements-section">
                <h4 className="achievements-title">
                  <Trophy size={20} />
                  Key Achievements
                </h4>
                <div className="achievements-grid">
                  {education.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      className="achievement-card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.2 + achievementIndex * 0.1 + 0.3, 
                        duration: 0.4 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="achievement-icon">
                        <span style={{ fontSize: '2rem' }}>{achievement.icon}</span>
                      </div>
                      <div className="achievement-content">
                        <h5 className="achievement-title">{achievement.title}</h5>
                        <p className="achievement-description">{achievement.description}</p>
                        <div 
                          className="achievement-highlight"
                          style={{ backgroundColor: achievement.color }}
                        >
                          {achievement.highlight}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Summary */}
        <motion.div 
          className="academic-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2>Academic Excellence Summary</h2>
          <div className="summary-stats">
            <div className="summary-stat">
              <GraduationCap className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">2</div>
                <div className="stat-label">Education Levels</div>
              </div>
            </div>
            <div className="summary-stat">
              <Trophy className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">7</div>
                <div className="stat-label">Major Achievements</div>
              </div>
            </div>
            <div className="summary-stat">
              <Star className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">98.5%</div>
                <div className="stat-label">High School GPA</div>
              </div>
            </div>
            <div className="summary-stat">
              <Award className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">3.8</div>
                <div className="stat-label">University GPA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Education
