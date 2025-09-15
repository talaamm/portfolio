import { motion } from 'framer-motion'
import { Linkedin, Quote, Star } from 'lucide-react'
import {LINKEDIN_URL} from '../config/constants'
const Recommendations = () => {
  // const getAvatarFromLinkedIn = (linkedinUrl: string) =>
  //   `https://media.ilicdn.com/dms/image/${encodeURIComponent(linkedinUrl)}`
  const recommendations = [
    {
      name: 'Noor Halabi',
      title: 'Full-Stack Developer',
      getAvatarFromLinkedIn:'https://media.licdn.com/dms/image/v2/D5603AQE_b_rYS2C0Zg/profile-displayphoto-crop_800_800/B56Ziyr6UfHcAQ-/0/1755344512950?e=1760572800&v=beta&t=wbWgeezRG-QpA4KNHckEwlPBNDNRUB-CtaMLv7FtBeQ',
      // company: 'TechCorp',
      relationship: 'Colleague at Notre Dame University',
      text: 'I had the pleasure of working alongside Tala during our Full Stack Development program at the University of Notre Dame. From the very first project, it was clear that Tala brings an exceptional combination of technical skill, creativity, and leadership to every task. We collaborated closely on nearly every project, and I was consistently impressed by her ability to bridge the gap between frontend and backend development seamlessly. Beyond her technical expertise, Tala is a natural team leader. She communicates clearly, coordinates effectively, and always ensures that the team works cohesively toward shared goals. Her positive attitude, problem-solving mindset, and willingness to help others make it an absolute joy to work with her. I have no doubt that Tala will excel in any professional setting.',
      linkedinUrl: 'https://www.linkedin.com/in/noor-halabi/',
      rating: 5,
      // date: '2024-01-15'
    },
    {
      name: 'Mohammad Salah',
      title: 'TechnoGeeks Founder & CEO',
      getAvatarFromLinkedIn:'https://media.licdn.com/dms/image/v2/C4D03AQHWj1PAJHn-1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1595193526898?e=1760572800&v=beta&t=Dk8QQdbQMqhYBEY1Zkia5a_PTx5ae-zOY7d4ZWQU09M',
      company: 'TechnoGeeks',
      relationship: 'Former Employer & Manager',
      text: 'I had the pleasure of managing and working directly with Tala Amm, and I can confidently say that she is one of the most talented and dedicated young professionals I have met. Beyond her technical expertise, Tala stands out for her professionalism, commitment, and teamwork. She consistently showed initiative, took ownership of her tasks, and was always eager to go the extra mile to ensure high-quality outcomes. What impressed me the most is her ability to combine technical depth with clear communication, making her an asset in both individual and collaborative environments. I strongly recommend Tala for any part-time junior roles, internships, or remote opportunities. She has the potential to grow into an outstanding engineer and will bring value, energy, and innovation to any team she joins.',
      linkedinUrl: 'https://www.linkedin.com/in/mohammadsalahtech',
      rating: 5,
      // date: '2024-01-15'
    },
    
    {
      name: 'Amro Mahmoud Khweis',
      title: 'Full-Stack Developer',
      getAvatarFromLinkedIn:'https://media.licdn.com/dms/image/v2/D4E35AQFi7P4UCV9JIg/profile-framedphoto-shrink_800_800/B4EZdaIZVtHYAk-/0/1749563840162?e=1758549600&v=beta&t=LPDT54w20DkFnY1nTi_hm5b3vGeL2-u9zD1UfICzvXI',
      // company: 'StartupXYZ',
      relationship: 'Colleague at Notre Dame University',
      text: 'Over the past two years, I had the privilege of working closely with Tala, and I can confidently say she is one of the smartest and most supportive colleagues I’ve ever worked with. She approaches every challenge with curiosity and creativity, and she never hesitates to help her teammates succeed. Beyond her professional strengths, Tala brings positivity and warmth that make working with her an absolute joy. I highly recommend her to anyone fortunate enough to collaborate with her',
      linkedinUrl: 'https://www.linkedin.com/in/amro-khweis-96857b24a',
      rating: 5,
      // date: '2023-11-20'
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        fill={i < rating ? '#fbbf24' : '#e5e7eb'} 
        color={i < rating ? '#fbbf24' : '#e5e7eb'} 
      />
    ))
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
          <h1>Recommendations</h1>
          {/* <p className="section-subtitle">
            What colleagues, clients, and mentors say about working with me.
          </p> */}
        </div>

        <div className="recommendations-grid">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              className="recommendation-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="recommendation-header">
                <Quote size={24} className="quote-icon" />
                <div className="rating">
                  {renderStars(rec.rating)}
                </div>
              </div>

              <div className="author-row" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <img
                  src={rec.getAvatarFromLinkedIn}
                  alt={rec.name}
                  className="author-avatar"
                />
                <div>
                  <h4 style={{ margin: 0 }}>{rec.name}</h4>
                  <p className="author-title" style={{ margin: 0 }}>{rec.title}</p>
                  {rec.relationship && (
                    <p className="author-relationship" style={{ margin: 0 }}>{rec.relationship}</p>
                  )}
                </div>
              </div>
              
              <blockquote className="recommendation-text">
                "{rec.text}"
              </blockquote>
              
              <div className="recommendation-author">
                <div className="author-info" />
                
                <div className="recommendation-actions">
                  <a 
                    href={rec.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <Linkedin size={20} />
                    View on LinkedIn
                  </a>
                  {/* <div className="recommendation-date">
                    {new Date(rec.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="recommendations-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="card text-center">
            <h3>Want to see more recommendations?</h3>
            <p>Connect with me on LinkedIn to view additional testimonials and endorsements.</p>
            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Linkedin size={20} />
              View LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Recommendations
