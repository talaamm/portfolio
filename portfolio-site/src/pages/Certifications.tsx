import { motion } from 'framer-motion'
import { ExternalLink, Award, Calendar } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Elements of AI for Business',
      issuer: 'Minna Learn',
      date: 'August 2025',
      // credentialId: 'MINNA-AI-2025-001',
      verifyUrl: 'https://courses.minnalearn.com/certificate/ar/elements-of-ai-for-business/c16b935b-cc79-4631-8a74-e811a5e816bf',
      logo: 'https://www.vaia.be/files/partners-organisers/_1200x590_crop_center-center_none/Logo-MinnaLearn.svg',
      description: 'Learned Fundemnetals and Concepts in AI'
    },
    {
      title: 'Certificate of Completion',
      issuer: 'HackerRank',
      date: 'May 2025',
      // credentialId: 'HR-GOLANG-2025-002',
      verifyUrl: 'https://www.hackerrank.com/certificates/8f3224ab3c0f',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png',
      description: 'Passed the HackerRank skill certification test for Golang'
    },
    {
      title: 'Git & GitHub Workshop',
      issuer: 'Microsoft Learn Student Ambassadors',
      date: 'October 2024',
      // credentialId: 'MS-GIT-2024-003',
      verifyUrl: 'https://drive.google.com/file/d/1psfZL1huy_dywDbY5nrlM8Ks0f3TI1ik/view',
      logo: 'https://tse4.mm.bing.net/th/id/OIP.yppTZbvHfMMjnURDgsRB8gHaGn?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Have done a workshop where we learned and discovered Git and GitHub, with Microsoft learn Ambassadors at Birzeit University'
    },
    {
      title: 'Java Programming Course',
      issuer: 'The Open University of Israel',
      date: 'November 2021',
      // credentialId: 'OUI-JAVA-2021-004',
      verifyUrl: 'https://drive.google.com/file/d/1_2rJO6Egg5m8Vy557xvW4QI0oJaIir9a/view',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Open_university_israel_logo.svg',
      description: 'Learned Java programming language and its concepts, solved some problems using it. Finished the course with a grade of 98%'
    },
  ]

  const additionalCertificates = [
    {
      title: 'Budget Management Certificate',
      issuer: 'Mati Jerusalem - Business Development Center',
      date: 'January 2023',
      // credentialId: 'ARC-FA-2024-001',
      verifyUrl: 'https://drive.google.com/file/d/1nC-_SsawJ9bPQ0V9aZpPgPYjoa62UVyn/view?usp=sharing',
      logo: 'https://www.nbn.org.il/jobboard/wp-content/uploads/2022/09/mati-jerusalem.jpg',
      description: 'Completed 12 hours course in budget management'
    },
    {
      title: 'Correct Financial Behaviour Certificate',
      issuer: 'Mati Jerusalem - Business Development Center',
      date: 'October 2021',
      // credentialId: 'ARC-FA-2024-001',
      verifyUrl: 'https://drive.google.com/file/d/1qljg_DoKbGHPi-3YFXFwtbCem1HjhrUw/view?usp=sharing',
      logo: 'https://www.nbn.org.il/jobboard/wp-content/uploads/2022/09/mati-jerusalem.jpg',
      description: 'Completed 12 hours course in learning the correct financial behaviour  as a student'
   },
    {
      title: 'Diplôme d\'Études en Langue Française (DELF B1)',
      issuer: 'Ministère de l\'Éducation nationale',
      date: 'August 2021',
      credentialId: '972008000714',
      verifyUrl: 'https://drive.google.com/file/d/1w9HQYYUD4GwYBwkKcTKCEdXyY2Eqjexg/view?usp=sharing',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tgLXMk1HDL4B8y0BJtUFRN6D8NrVs7W2ZmAMDU5b_rgSpPCr5ResKgaRaBTm7FB-hRc&usqp=CAU',
      description: 'Completed the Delf Dalf French exam level B1'
    },
    {
      title: 'ToBe Program',
      issuer: 'An Najah National University',
      date: 'August 2021',
      // credentialId: '972008000714',
      verifyUrl: 'https://drive.google.com/file/d/1APIxwFRIQhOjkfH8sH7bTXCAVFZRucmv/view?usp=sharing',
      logo: 'https://www-cdn.najah.edu/static/img/logo2021_en.png',
      description: 'Learned the fundementals of Research Skills, and web development. Completed a project to apply gained skills.'
    },
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
              // key={cert.credentialId}
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
                {/* <div className="cert-id">
                  <Award size={16} />
                  {/* <span>{cert.credentialId}</span> 
                </div> */}
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

        {/* Additional Certificates Section */}
        <motion.section 
          className="section mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h2>Additional Certificates</h2>
            <p className="section-subtitle">
              Other professional certifications and qualifications that complement my skill set.
            </p>
          </div>

          <div className="certifications-grid">
            {additionalCertificates.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                className="certification-card additional-cert"
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
                      <span style={{ fontSize: '2.5rem' }}>{cert.logo}</span>
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
                  {cert.credentialId && <div className="cert-id">
                    <Award size={16} />
                    <span>{cert.credentialId}</span>
                  </div>}
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
      </motion.section>
    </div>
  )
}

export default Certifications
