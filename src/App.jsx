import { Link, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 4rem',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(16, 22, 31, 0.6)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    flexWrap: 'wrap',
    gap: '1rem', 
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
    transition: 'opacity 0.2s ease',
  },
  logoIcon: {
    color: 'var(--gold)',
    fontSize: '1.3rem',
  },
  logoText: {
    letterSpacing: '0.02em',
  },
  navLinks: {
    display: 'flex',
    gap: '2.5rem',
    flexWrap: 'wrap',
  },
  navLink: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    fontWeight: 400,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    padding: '0.5rem 0',
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
  },
  footer: {
    padding: '4rem 4rem 3rem',
    marginTop: 'auto',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    fontSize: '0.85rem',
  },
  footerLink: {
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  footerDivider: {
    color: 'var(--text-muted)',
    opacity: 0.3,
  },
};
export default function App() {
  const location = useLocation();
  
  return (
    <div style={styles.container}>
      <ScrollToTop />  {}
      
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}>★</span>
          <span style={styles.logoText}>Nehir Özsunar</span>
        </Link>
        
        <div style={styles.navLinks}>
          <Link 
            to="/" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/' ? styles.navLinkActive : {})
            }}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/about' ? styles.navLinkActive : {})
            }}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/contact' ? styles.navLinkActive : {})
            }}
          >
            Contact
          </Link>
        </div>
      </nav>

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
            href="https://linkedin.com/in/nehirozsunar" 
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