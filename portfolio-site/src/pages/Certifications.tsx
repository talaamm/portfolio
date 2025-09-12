import { motion } from 'framer-motion'
import { ExternalLink, Award, Calendar } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Element of AI for Business',
      issuer: 'Minna Learn',
      date: 'August 2025',
      verifyUrl: 'https://courses.minnalearn.com/certificate/ar/elements-of-ai-for-business/c16b935b-cc79-4631-8a74-e811a5e816bf',
      logo: 'https://www.vaia.be/files/partners-organisers/_1200x590_crop_center-center_none/Logo-MinnaLearn.svg',
      description: 'Learned Fundemnetals and Concepts in AI'
    },
    {
      title: 'Certificate of Completion',
      issuer: 'HackerRank',
      date: 'May 2025',
      verifyUrl: 'https://www.hackerrank.com/certificates/8f3224ab3c0f',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png',
      description: 'Passed the HackerRank skill certification test for Golang'
    },
    {
      title: 'Git & GitHub Workshop',
      issuer: 'Microsoft Learn Student Ambassadors',
      date: 'October 2024',
      verifyUrl: 'https://drive.google.com/file/d/1psfZL1huy_dywDbY5nrlM8Ks0f3TI1ik/view',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Kubernetes-logo.svg',
      description: 'Certified in Kubernetes cluster administration, troubleshooting, and application lifecycle management.'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023-07',
      credentialId: 'META-REACT-2023-004',
      verifyUrl: 'https://coursera.org/verify',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      description: 'Advanced React development skills including hooks, context, and performance optimization.'
    },
    {
      title: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: '2023-05',
      credentialId: 'NODEJS-2023-005',
      verifyUrl: 'https://openjsf.org/certification',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      description: 'Expertise in building scalable server-side applications with Node.js and npm ecosystem.'
    }
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
          <h1>Certifications</h1>
          <p className="section-subtitle">
            Professional certifications that validate my expertise in modern technologies and cloud platforms.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              className="certification-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="cert-header">
                <div className="cert-logo">
                  {typeof cert.logo === 'string' && (cert.logo.startsWith('http://') || cert.logo.startsWith('https://')) ? (
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`} 
                      style={{ width: '50px', height: '50px', objectFit: 'contain' }} 
                    />
                  ) : (
                    <span>{cert.logo}</span>
                  )}
                </div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
              
              <p className="cert-description">{cert.description}</p>
              
              <div className="cert-meta">
                <div className="cert-date">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
                <div className="cert-id">
                  <Award size={16} />
                  <span>{cert.credentialId}</span>
                </div>
              </div>
              
              <a 
                href={cert.verifyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="verify-link"
              >
                <ExternalLink size={16} />
                Verify Credential
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Certifications
