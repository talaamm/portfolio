import { motion } from 'framer-motion'
import { Linkedin, Quote, Star } from 'lucide-react'
import {LINKEDIN_URL} from '../config/constants'
const Recommendations = () => {
  const recommendations = [
    {
      name: 'Noor Halabi',
      title: 'Full-Stack Developer',
      // company: 'TechCorp',
      relationship: 'Colleague at Notre Dame University',
      text: 'I had the pleasure of working alongside Tala during our Full Stack Development program at the University of Notre Dame. From the very first project, it was clear that Tala brings an exceptional combination of technical skill, creativity, and leadership to every task. We collaborated closely on nearly every project, and I was consistently impressed by her ability to bridge the gap between frontend and backend development seamlessly. Beyond her technical expertise, Tala is a natural team leader. She communicates clearly, coordinates effectively, and always ensures that the team works cohesively toward shared goals. Her positive attitude, problem-solving mindset, and willingness to help others make it an absolute joy to work with her. I have no doubt that Tala will excel in any professional setting.',
      linkedinUrl: 'https://www.linkedin.com/in/noor-halabi/',
      rating: 5,
      // date: '2024-01-15'
    },
    {
      name: 'Amro Mahmoud Khweis',
      title: 'Full-Stack Developer',
      // company: 'StartupXYZ',
      relationship: 'Colleague at Notre Dame University',
      text: 'Over the past two years, I had the privilege of working closely with Tala, and I can confidently say she is one of the smartest and most supportive colleagues I’ve ever worked with. She approaches every challenge with curiosity and creativity, and she never hesitates to help her teammates succeed. Beyond her professional strengths, Tala brings positivity and warmth that make working with her an absolute joy. I highly recommend her to anyone fortunate enough to collaborate with her',
      linkedinUrl: 'https://www.linkedin.com/in/amro-khweis-96857b24a',
      rating: 5,
      // date: '2023-11-20'
    },
    // {
    //   name: 'Dr. Emily Rodriguez',
    //   title: 'Director of Education',
    //   company: 'Tech Academy',
    //   relationship: 'Supervisor',
    //   text: '[Your Name] is an exceptional instructor who brings passion and expertise to every class. Students consistently rate their courses highly, and many have gone on to successful tech careers. Their dedication to making technology accessible is inspiring.',
    //   linkedinUrl: 'https://linkedin.com/in/emily-rodriguez',
    //   rating: 5,
    //   date: '2023-10-05'
    // },
    // {
    //   name: 'David Kim',
    //   title: 'CTO',
    //   company: 'InnovateLab',
    //   relationship: 'Mentor',
    //   text: 'I\'ve had the privilege of mentoring [Your Name] and watching them grow into an outstanding developer. Their curiosity, work ethic, and commitment to continuous learning set them apart. They would be an asset to any team.',
    //   linkedinUrl: 'https://linkedin.com/in/david-kim',
    //   rating: 5,
    //   date: '2023-08-12'
    // },
    // {
    //   name: 'Lisa Thompson',
    //   title: 'Non-Profit Director',
    //   company: 'Community Tech Hub',
    //   relationship: 'Volunteer Partner',
    //   text: '[Your Name]\'s volunteer work with our organization has been transformative. They built a volunteer management system that streamlined our operations and helped us serve 50% more community members. Their technical skills and heart for service are unmatched.',
    //   linkedinUrl: 'https://linkedin.com/in/lisa-thompson',
    //   rating: 5,
    //   date: '2023-06-30'
    // }
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
          <p className="section-subtitle">
            What colleagues, clients, and mentors say about working with me.
          </p>
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
              
              <blockquote className="recommendation-text">
                "{rec.text}"
              </blockquote>
              
              <div className="recommendation-author">
                <div className="author-info">
                  <h4>{rec.name}</h4>
                  <p className="author-title">{rec.title}</p>
                  {/* {rec.company && <p className="author-company">{rec.company}</p>} */}
                  <p className="author-relationship">{rec.relationship}</p>
                </div>
                
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
