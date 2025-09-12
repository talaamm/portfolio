import { motion } from 'framer-motion'
import { Globe, MessageCircle, BookOpen, Star } from 'lucide-react'

const LanguageSkills = () => {
  const languages = [
    {
      id: 'english',
      name: 'English',
      proficiency: 95,
      level: 'Native',
      flag: '🇺🇸',
      description: 'Native speaker with excellent communication skills'
    },
    {
      id: 'spanish',
      name: 'Spanish',
      proficiency: 90,
      level: 'Fluent',
      flag: '🇪🇸',
      description: 'Fluent in both written and spoken Spanish'
    },
    {
      id: 'french',
      name: 'French',
      proficiency: 75,
      level: 'Advanced',
      flag: '🇫🇷',
      description: 'Advanced conversational and business French'
    },
    {
      id: 'german',
      name: 'German',
      proficiency: 60,
      level: 'Intermediate',
      flag: '🇩🇪',
      description: 'Intermediate level with good reading comprehension'
    },
    {
      id: 'japanese',
      name: 'Japanese',
      proficiency: 40,
      level: 'Beginner',
      flag: '🇯🇵',
      description: 'Basic conversational Japanese, learning Kanji'
    },
    {
      id: 'mandarin',
      name: 'Mandarin',
      proficiency: 30,
      level: 'Beginner',
      flag: '🇨🇳',
      description: 'Learning basic phrases and pronunciation'
    }
  ]

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return '#10b981' // Green
    if (proficiency >= 70) return '#3b82f6' // Blue
    if (proficiency >= 50) return '#f59e0b' // Yellow
    return '#ef4444' // Red
  }

  const getProficiencyStars = (proficiency: number) => {
    const stars = []
    const filledStars = Math.floor(proficiency / 20)
    const hasHalfStar = proficiency % 20 >= 10

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push('full')
      } else if (i === filledStars && hasHalfStar) {
        stars.push('half')
      } else {
        stars.push('empty')
      }
    }
    return stars
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
          <h1>Language Skills</h1>
          <p className="section-subtitle">
            My multilingual journey and proficiency levels across different languages.
          </p>
        </div>

        {/* Language Stats */}
        <motion.div 
          className="language-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <Globe className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">{languages.length}</div>
                <div className="stat-label">Languages</div>
              </div>
            </div>
            <div className="stat-card">
              <MessageCircle className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">{languages.filter(lang => lang.proficiency >= 70).length}</div>
                <div className="stat-label">Fluent</div>
              </div>
            </div>
            <div className="stat-card">
              <BookOpen className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">{languages.filter(lang => lang.proficiency < 70).length}</div>
                <div className="stat-label">Learning</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Languages Grid */}
        <div className="languages-grid">
          {languages.map((language, index) => (
            <motion.div
              key={language.id}
              className="language-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="language-header">
                <div className="language-flag">{language.flag}</div>
                <div className="language-info">
                  <h3 className="language-name">{language.name}</h3>
                  <span className="language-level">{language.level}</span>
                </div>
              </div>

              <p className="language-description">{language.description}</p>

              {/* Proficiency Bar */}
              <div className="proficiency-section">
                <div className="proficiency-header">
                  <span>Proficiency</span>
                  <span className="proficiency-percentage">{language.proficiency}%</span>
                </div>
                <div className="proficiency-bar">
                  <motion.div
                    className="proficiency-fill"
                    style={{ backgroundColor: getProficiencyColor(language.proficiency) }}
                    initial={{ width: 0 }}
                    animate={{ width: `${language.proficiency}%` }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div className="star-rating">
                {getProficiencyStars(language.proficiency).map((star, starIndex) => (
                  <Star
                    key={starIndex}
                    size={20}
                    className={`star ${star}`}
                    fill={star === 'full' ? '#fbbf24' : star === 'half' ? '#fbbf24' : 'none'}
                    style={{
                      color: star === 'empty' ? '#d1d5db' : '#fbbf24',
                      clipPath: star === 'half' ? 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' : 'none'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Journey */}
        <motion.div 
          className="learning-journey"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2>My Language Learning Journey</h2>
          <p className="journey-description">
            I believe that learning languages opens doors to new cultures, perspectives, and opportunities. 
            Each language I learn helps me connect with people from different backgrounds and understand 
            the world from diverse viewpoints. Currently, I'm focusing on improving my Japanese and 
            Mandarin skills while maintaining my fluency in other languages.
          </p>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default LanguageSkills
