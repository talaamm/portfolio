import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAME } from '../config/constants'

// interface QuickLinkItem {
//   href: string
//   icon: React.ComponentType<{ size?: number }>
//   label: string
// }

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [forceMobile, setForceMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLUListElement>(null)
  const brandRef = useRef<HTMLAnchorElement>(null)
  const navWidthRef = useRef<number>(0)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/education', label: 'Education' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/experience', label: 'Experience' },
    // { path: '/volunteering', label: 'Volunteering' },
    { path: '/recommendations', label: 'Recommendations' },
    { path: '/blog', label: 'Blog' },
    { path: '/languages', label: 'Languages' },
    { path: '/contact', label: 'Contact' },
  ]

  // const quickLinks: QuickLinkItem[] = [
  //   { href: RESUME_URL, icon: FileText, label: 'Resume' },
  //   { href: GITHUB_URL, icon: Github, label: 'GitHub' },
  //   { href: LINKEDIN_URL, icon: Linkedin, label: 'LinkedIn' },
  //   { href: `mailto:${EMAIL}`, icon: Mail, label: 'Email' },
  // ]

  // const showQuickLinks = import.meta.env.DEV;

  useEffect(() => {
    const measureAndToggle = () => {
      const containerWidth = containerRef.current?.clientWidth ?? 0
      const brandWidth = brandRef.current?.offsetWidth ?? 0
      const measuredNavWidth = navRef.current?.scrollWidth ?? navRef.current?.getBoundingClientRect().width ?? 0
      if (measuredNavWidth > 0) {
        navWidthRef.current = measuredNavWidth
      }
      const navWidth = measuredNavWidth || navWidthRef.current
      const horizontalPaddingAndGaps = 48 // small buffer for paddings/gaps
      const needed = brandWidth + navWidth + horizontalPaddingAndGaps
      setForceMobile(needed > containerWidth)
    }

    measureAndToggle()

    const handleResize = () => measureAndToggle()
    window.addEventListener('resize', handleResize)

    let ro: ResizeObserver | null = null
    if ('ResizeObserver' in window && containerRef.current) {
      ro = new ResizeObserver(measureAndToggle)
      ro.observe(containerRef.current)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (ro && containerRef.current) ro.disconnect()
    }
  }, [location.pathname])

  return (
    <nav className="navbar">
      <div className={`navbar-content ${forceMobile ? 'force-mobile' : ''}`} ref={containerRef}>
        <Link to="/" className="navbar-brand" ref={brandRef}>
          {NAME}
        </Link>

        <ul className="navbar-nav" ref={navRef}>
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

        {/* {{showQuickLinks && (
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
        )}} */}

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" style={forceMobile ? { display: 'block' } : undefined}>
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
          {/* {{showQuickLinks && (
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
          )}} */}
        </div>
      )}
    </nav>
  )
}

export default Navbar
