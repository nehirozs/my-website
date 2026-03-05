import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import Background from './components/Background'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function App() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menuOpen]);
  
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <div style={styles.container}>
      <Background />
      <ScrollToTop />
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}>★</span>
          <span style={styles.logoText}>Nehir Özsunar</span>
        </Link>
        
        {/* Desktop: direct links */}
        <div className="nav-links-desktop" style={styles.navLinksDesktop}>
          {navItems.map(({ to, label }) => (
            <Link
              to={to}
              style={{
                ...styles.navLink,
                ...(location.pathname === to ? styles.navLinkActive : {}),
              }}
              className="nav-link"
            >
              {label}
            </Link>
          ))}
        </div>
        
        {/* Mobile: menu tab + dropdown */}
        <div className="nav-menu-mobile" style={styles.menuWrapper} ref={menuRef}>
          <button
            type="button"
            className={`menu-tab-btn ${menuOpen ? 'menu-tab-open' : ''}`}
            style={{
              ...styles.menuTab,
              ...(menuOpen ? styles.menuTabActive : {}),
            }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-haspopup="true"
            aria-label="Toggle menu"
          >
            <span style={styles.menuTabLabel}>Menu</span>
            <span style={{ ...styles.menuArrow, transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} aria-hidden>▾</span>
          </button>
          
          {menuOpen && (
            <div style={styles.dropdown} className="nav-dropdown">
              {navItems.map(({ to, label }, i) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    ...styles.dropdownLink,
                    ...(location.pathname === to ? styles.dropdownLinkActive : {}),
                    animationDelay: `${i * 40}ms`,
                  }}
                  className={`nav-dropdown-link ${location.pathname === to ? 'nav-dropdown-link-active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {location.pathname === to && <span className="nav-dropdown-dot" />}
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main 
        style={styles.main}
        className={isTransitioning ? 'page-transition-enter' : 'page-transition-enter-active'}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <a 
            href="https://github.com/nehirozs" 
            style={styles.footerLink}
          >
            GitHub
          </a>
          <span style={styles.footerDivider}>•</span>
          <a 
            href="https://www.linkedin.com/in/nehirozsunar" 
            style={styles.footerLink}
          >
            LinkedIn
          </a>
          <span style={styles.footerDivider}>•</span>
          <a 
            href="mailto:nehir.ozsunar@mail.mcgill.ca" 
            style={styles.footerLink}
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 1,
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 4rem',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(26, 29, 36, 0.9)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(212, 179, 102, 0.15)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.1rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    color: 'var(--text-main)',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  logoIcon: {
    color: 'var(--gold)',
    fontSize: '1.3rem',
  },
  logoText: {
    letterSpacing: '0.02em',
  },
  navLinksDesktop: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
  },
  navLink: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    fontWeight: 400,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '0.5rem 0',
    position: 'relative',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  menuWrapper: {
    position: 'relative',
  },
  menuTab: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.6rem 1.25rem',
    fontFamily: 'var(--font-display)',
    fontSize: '0.8rem',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  menuTabLabel: {
    letterSpacing: 'inherit',
  },
  menuTabActive: {
    borderColor: 'rgba(212, 179, 102, 0.4)',
    color: 'var(--gold)',
    background: 'rgba(212, 179, 102, 0.1)',
    boxShadow: '0 4px 16px rgba(212, 179, 102, 0.15), 0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  menuArrow: {
    fontSize: '0.55rem',
    opacity: 0.9,
    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '0.6rem',
    minWidth: '160px',
    padding: '0.5rem 0',
    background: 'rgba(22, 24, 30, 0.97)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(212, 179, 102, 0.2)',
    borderRadius: 10,
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    overflow: 'hidden',
  },
  dropdownLink: {
    color: 'var(--text-muted)',
    fontSize: '0.85rem',
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '0.7rem 1.5rem 0.7rem 1.75rem',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  dropdownLinkActive: {
    color: 'var(--gold)',
  },
  navLinkActive: {
    color: 'var(--gold)',
  },
  main: {
    flex: 1,
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '0 4rem',
    position: 'relative',
    zIndex: 1,
  },
  footer: {
    padding: '5rem 4rem 4rem',
    marginTop: 'auto',
    borderTop: '1px solid rgba(212, 179, 102, 0.15)',
    background: 'linear-gradient(180deg, transparent 0%, rgba(26, 29, 36, 0.4) 100%)',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    fontSize: '0.9rem',
  },
  footerLink: {
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '0.5rem 0',
    letterSpacing: '0.02em',
  },
  footerDivider: {
    color: 'rgba(212, 179, 102, 0.4)',
    fontSize: '0.9rem',
  },

};