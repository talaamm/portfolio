import { motion } from 'framer-motion'
import { GraduationCap, Award, Trophy, Star, BookOpen, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      id: 'bachelor',
      level: 'Bachelor Degree',
      institution: 'Birzeit University',
      degree: 'Bachelor of Engineering in Computer Engineering',
      location: 'Birzeit City',
      startDate: '2024',
      endDate: '2028',
      status: 'In Progress',
      gpa: '89/100',
      achievements: [
        {
          title: 'Honor\'s List',
          description: 'Honor\'s List and Academic Excellence scholarship for 2 consecutive semesters so far',
          icon: '🏆',
          highlight: '2x Consecutive',
          color: '#fbbf24'
        },
        {
          title: 'Calculus Excellence',
          description: 'Achieved 99% in the Calculus Course',
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
      description: 'Pursuing a Computer Engineering degree with focus on software engineering, algorithms, and modern development practices.',
      logo: 'https://upload.wikimedia.org/wikipedia/ar/thumb/1/16/Birzeit_University_logo.svg/1280px-Birzeit_University_logo.svg.png'
    },
    {
      id: 'certificate',
      level: 'Certificate',
      institution: 'Notre Dame University x 01-Talent',
      degree: 'Adam Coding & Beyond Program: Full-stack Development',
      location: 'Jerusalem',
      startDate: 'January 2024',
      endDate: 'December 2025',
      status: 'In Progress',
      gpa: 'A+',
      achievements: [
        {
          title: 'Honor\'s List',
          description: 'Academic Excellence scholarship for 3 consecutive semesters',
          icon: '🏆',
          highlight: '3x Consecutive',
          color: '#fbbf24'
        },
        {
          title: 'Networking Hero',
          description: 'Built strong professional connections with IT mentors and industry professionals while still a student, expanding my network and gaining early exposure to practical work experience.',
          icon: '👥',
          highlight: 'STRONG CONNECTIONS',
          color: '#fbbf24'
        },
        {
          title: 'Academic Excellence',
          description: 'Consistently high performance across all subjects',
          icon: '⭐',
          highlight: 'Top Performer',
          color: '#3b82f6'
        }
      ],
      description: 'Enrolled in a comprehensive coding and professional development program that combines technical training with mentorship. The program connected me with multiple experienced IT mentors, providing insights into real-world work environments and guidance on building a career in technology.',
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGVx9FXWENtIw/company-logo_200_200/company-logo_200_200/0/1734096794786/notre_dame_international_jerusalem_logo?e=2147483647&v=beta&t=QCkMEwPTF7WMIC-MfUjjZi8vujBjgU4fWu5fwhcciBg'
    },
    {
      id: 'high-school',
      level: 'High School',
      institution: 'Rosary Sister\'s High School',
      degree: 'Tawjihi (General Second Secondary Education - Scientific Stream)',
      location: 'Jerusalem',
      startDate: '2009',
      endDate: '2023',
      status: 'Completed',
      gpa: '99.4/100',
      achievements: [
        {
          title: 'Mathmatics Contest Winner',
          description: 'First place in a Mathmatics competiton 2016',
          icon: '🏆',
          highlight: 'Golden Cup',
          color: '#fbbf24',
          url: 'https://drive.google.com/file/d/1tJ7_cpjikqAceJup9-CnRutVDY1dotDr/view?usp=sharing',
        },
        {
          title: 'General Knowledge Contest',
          description: 'Third place in a General Knowledge Contest at Al-Iman schools - 2019',
          icon: '🥉',
          highlight: 'Curious Mind',
          color: '#8b5cf6',
          url: 'https://drive.google.com/file/d/1RXnnp5E3KqYnkpM0La6wt2cFmM49uJUE/view?usp=sharing',
        },
        {
          title: 'School Valedictorian',
          description: 'Highest grade in the entire school - Tawjihi Scientific Stream',
          icon: '🥇',
          highlight: '1st Place',
          url: 'https://drive.google.com/file/d/1odS4x_k6on6QQpXbSxFgBK0SQylgK3Rp/view?usp=sharing',
          color: '#fbbf24'
        },
        {
          title: 'District Excellence',
          description: 'Second highest grade in Jerusalem District - Tawjihi Scientific Stream',
          icon: '🥈',
          highlight: '2nd District',
          color: '#6b7280'
        },
        {
          title: 'National & International Standing',
          description: 'Third highest grade across the countrey and worldwide - Tawjihi Scientific Stream',
          icon: '🥉',
          highlight: '3rd Global',
          color: '#cd7c2f'
        },
        {
          title: 'Model United Nations Participant',
          description: 'Participated in two MUN conferences during high school, engaging in debate, diplomacy, and public speaking.',
          icon: '🕊️',
          highlight: 'Active Debater',
          url: 'https://drive.google.com/file/d/1w3useTWBZd7p5lz6ZCLT0cKQnAxuhcu9/view?usp=sharing',
          url2: 'https://drive.google.com/file/d/1JiJROeOyK6SF_Uefh8Nw47fCEZWxBUUm/view?usp=sharing',
          color: '#3b82f6'
        },
      ],
      description: "Completed the Tawjihi Scientific Stream at Rosary Sister's High School with outstanding academic performance, achieving top rankings locally, nationally, and internationally. Recognized for excellence in mathematics, general knowledge, and overall academic performance, including serving as valedictorian. Actively participated in extracurricular activities such as Model United Nations, developing skills in debate, diplomacy, and public speaking. Demonstrated a strong combination of curiosity, leadership, and dedication throughout my high school years.",
      logo: 'https://th.bing.com/th/id/R.e92f340f2dbe7e5c3e4d0ea06cfc4136?rik=zOlCyuZiOM1Bww&riu=http%3a%2f%2fwww.rosaryshs-j.com%2fwp-content%2fuploads%2f2017%2f10%2fLogo-v2.png&ehk=7WG1CnsLq7E1IXnB4YQkUtwgXd55ZMtQZtb5DSIejps%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
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
                  {typeof education.logo === 'string' && (education.logo.startsWith('http://') || education.logo.startsWith('https://')) ? (
                    <img
                      src={education.logo}
                      alt={`${education.institution} logo`}
                      style={{ width: '52px', height: '52px', objectFit: 'contain' }}
                    />
                  ) : (
                    <span>{education.logo}</span>
                  )}
                  {/* <span style={{ fontSize: '3rem' }}>{education.logo}</span> */}
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
                      <div className="achievement-urls">
                        {achievement.url && (
                          <a
                            href={achievement.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="post-link-small"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        {achievement.url2 && (
                          <a
                            href={achievement.url2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="post-link-small"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>

                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
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
        </motion.div>*/}
      </motion.section>
    </div>
  )
}

export default Education
