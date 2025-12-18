import { useState, useEffect } from 'react';

export default function ScrollConstellation() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const sectionElements = sections.map(section => {
        const element = document.getElementById(section.id);
        if (element) {
          return {
            id: section.id,
            top: element.offsetTop,
            bottom: element.offsetTop + element.offsetHeight,
          };
        }
        return null;
      }).filter(Boolean);

      const active = sectionElements.findIndex(
        section => scrollPosition >= section.top && scrollPosition < section.bottom
      );
      
      if (active !== -1) {
        setActiveSection(active);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isMobile) {
      setIsOpen(false);
    }
  };

  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            ...styles.mobileButton,
            ...(isOpen ? styles.mobileButtonOpen : {}),
          }}
          aria-label="Navigation menu"
        >
          <span style={styles.starGlow}>★</span>
        </button>
        
        {isOpen && (
          <div style={styles.mobileMenu}>
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  ...styles.mobileMenuItem,
                  ...(activeSection === index ? styles.mobileMenuItemActive : {}),
                }}
              >
                <span style={styles.mobileStar}>★</span>
                <span style={styles.mobileLabel}>{section.label}</span>
              </button>
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <nav style={styles.constellation}>
      <svg style={styles.svg} viewBox="0 0 100 400">
        {sections.slice(0, -1).map((_, index) => (
          <line
            key={`line-${index}`}
            x1="50"
            y1={50 + index * 90}
            x2="50"
            y2={140 + index * 90}
            stroke="rgba(199, 163, 77, 0.2)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {sections.map((section, index) => (
  <div key={section.id} style={styles.starContainer}>
    <button
      onClick={() => scrollToSection(section.id)}
      style={{
        ...styles.starButton,
        ...(activeSection === index ? styles.starButtonActive : {}),
        fontSize: activeSection === index ? '1rem' : '1rem',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.3)';
        e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(199, 163, 77, 0.8))';
      }}
      onMouseLeave={(e) => {
        if (activeSection !== index) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.filter = 'drop-shadow(0 0 4px rgba(199, 163, 77, 0.3))';
        }
      }}
      aria-label={`Go to ${section.label}`}
    >
      {activeSection === index ? '★' : '•'}
    </button>
    <span
      style={{
        ...styles.label,
        ...(activeSection === index ? styles.labelActive : {}),
      }}
    >
      {section.label}
    </span>
  </div>
))}
    </nav>
  );
}

const styles = {
  constellation: {
    position: 'fixed',
    right: '2rem',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '10rem',
  },

  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  starContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  starButton: {
    background: 'transparent',
    border: 'none',
    color: '#c7a34d',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 0 4px rgba(199, 163, 77, 0.3))',
    padding: 0,
    width: '24px', 
    height: '24px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  starButtonActive: {
    transform: 'scale(1.4)',
    filter: 'drop-shadow(0 0 12px rgba(199, 163, 77, 0.8))',
  },
  label: {
    position: 'absolute',
    right: '2.5rem',
    fontSize: '0.75rem',
    color: '#a3a8b3',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  },
  labelActive: {
    opacity: 1,
  },
  mobileButton: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    background: 'rgba(20, 23, 28, 0.9)',
    border: '1px solid rgba(199, 163, 77, 0.3)',
    borderRadius: '50%',
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 1001,
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  mobileButtonOpen: {
    transform: 'rotate(180deg)',
  },
  starGlow: {
    color: '#c7a34d',
    fontSize: '1.5rem',
    filter: 'drop-shadow(0 0 8px rgba(199, 163, 77, 0.6))',
  },
  mobileMenu: {
    position: 'fixed',
    bottom: '5rem',
    right: '2rem',
    background: 'rgba(20, 23, 28, 0.95)',
    border: '1px solid rgba(199, 163, 77, 0.3)',
    borderRadius: '14px',
    padding: '1rem',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    backdropFilter: 'blur(10px)',
  },
  mobileMenuItem: {
    background: 'transparent',
    border: 'none',
    color: '#a3a8b3',
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.9rem',
    textAlign: 'left',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
  },
  mobileMenuItemActive: {
    background: 'rgba(199, 163, 77, 0.1)',
    color: '#c7a34d',
  },
  mobileStar: {
    fontSize: '1rem',
    color: '#c7a34d',
  },
  mobileLabel: {
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    fontSize: '0.75rem',
  },
};