import { motion } from 'framer-motion'
import { ExternalLink, Award, Calendar } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Google Cloud Associate Engineer',
      issuer: 'Google Cloud',
      date: '2024-01',
      credentialId: 'GCP-ACE-2024-001',
      verifyUrl: 'https://www.credential.net/verify',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png',
      description: 'Demonstrated expertise in deploying, monitoring, and maintaining applications on Google Cloud Platform.'
    },
    {
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023-11',
      credentialId: 'AWS-SAA-2023-002',
      verifyUrl: 'https://aws.amazon.com/verification',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      description: 'Proven ability to design distributed systems on AWS with high availability and scalability.'
    },
    {
      title: 'Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023-09',
      credentialId: 'CKA-2023-003',
      verifyUrl: 'https://cncf.io/certification/verify',
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
