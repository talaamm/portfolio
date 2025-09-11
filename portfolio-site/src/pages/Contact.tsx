import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react'
import { GITHUB_URL, LINKEDIN_URL, DEVTO_URL } from '../config/constants'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        "service_07pcigp",
        "template_ozeyocr", // You need to create a template in EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "OgFsKoR-z0TMHcXUT"
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('EmailJS error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tala.aunv@gmail.com',
      link: 'mailto:tala.aunv@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+972 522335226',
      link: 'tel:+972522335226'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'East Jerusalem',
      link: 'https://maps.google.com/?q=East+Jerusalem'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: GITHUB_URL,
      description: 'View my code and projects'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: LINKEDIN_URL,
      description: 'Connect professionally'
    },
    {
      icon: ExternalLink,
      name: 'Dev.to',
      url: DEVTO_URL,
      description: 'Read my articles'
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
          <h1>Get In Touch</h1>
          <p className="section-subtitle">
            I'm always interested in new opportunities, collaborations, and meaningful conversations about technology.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="card">
              <h2>Send me a message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    ❌ Something went wrong. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="card">
              <h2>Contact Information</h2>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-info-item"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <info.icon size={24} />
                    <div className="contact-info-content">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card">
              <h2>Connect with me</h2>
              <div className="social-links-list">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item"
                  >
                    <social.icon size={24} />
                    <div className="social-link-content">
                      <h4>{social.name}</h4>
                      <p>{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card">
              <h2>Response Time</h2>
              <p>I typically respond to messages within 24 hours. For urgent matters, feel free to call or text.</p>
              <div className="response-time">
                <div className="time-item">
                  <strong>Email:</strong> Within 24 hours
                </div>
                <div className="time-item">
                  <strong>LinkedIn:</strong> Within 12 hours
                </div>
                <div className="time-item">
                  <strong>Phone:</strong> Same day
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact