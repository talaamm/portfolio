import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Linkedin, Mail, FileText, Menu, X } from 'lucide-react'
import { NAME, GITHUB_URL, LINKEDIN_URL, EMAIL, RESUME_URL } from '../config/constants'

interface QuickLinkItem {
  href: string
  icon: (props: { size?: number }) => JSX.Element
  label: string
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/experience', label: 'Experience' },
    { path: '/volunteering', label: 'Volunteering' },
    { path: '/recommendations', label: 'Recommendations' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  const quickLinks: QuickLinkItem[] = [
    { href: RESUME_URL, icon: FileText, label: 'Resume' },
    { href: GITHUB_URL, icon: Github, label: 'GitHub' },
    { href: LINKEDIN_URL, icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${EMAIL}`, icon: Mail, label: 'Email' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          {NAME}
        </Link>

        <ul className="navbar-nav">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-links">
          {quickLinks.map((link: QuickLinkItem) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              title={link.label}
            >
              <link.icon size={16} />
              <span className="hidden-mobile">{link.label}</span>
            </a>
          ))}
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-links">
            {quickLinks.map((link: QuickLinkItem) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <link.icon size={16} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
