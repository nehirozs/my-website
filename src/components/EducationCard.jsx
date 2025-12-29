import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function EducationCard({ logo, schoolName, period, description, index = 0 }) {
  const [cardRef, cardVisible] = useScrollAnimation({ 
    threshold: 0.1, 
    delay: index * 0.1 
  });
  
  return (
    <div 
      ref={cardRef}
      style={{
        ...styles.card,
        ...(cardVisible ? styles.animateVisible : styles.animateHidden)
      }}
    >
      <div style={styles.logoColumn}>
        <div style={styles.logoContainer}>
          <img src={logo} alt={schoolName} style={styles.logo} />
        </div>
      </div>
      <div style={styles.contentColumn}>
        <h4 style={styles.schoolName}>{schoolName}</h4>
        <div style={styles.periodWrapper}>
          <span style={styles.period}>{period}</span>
        </div>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: 'grid',
    gridTemplateColumns: '72px 1fr',
    gap: '1.25rem',
    padding: '2.5rem',
    background: 'linear-gradient(135deg, var(--bg-soft) 0%, rgba(20, 23, 28, 0.95) 100%)',
    borderRadius: '16px',
    border: '1px solid rgba(199, 163, 77, 0.15)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  logoColumn: {
    width: '72px',
    flexShrink: 0,
  },
  logoContainer: {
    width: '72px',
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    padding: '0',
    background: 'transparent',
    border: '1px solid rgba(199, 163, 77, 0.1)',
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    background: 'transparent',
  },
  contentColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  schoolName: {
    fontSize: '1.1rem',
    margin: 0,
    fontWeight: 600,
    fontFamily: 'var(--font-display)',
    color: 'var(--text-main)',
    letterSpacing: '-0.01em',
  },
  periodWrapper: {
    margin: 0,
  },
  period: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.02em',
  },
  description: {
    fontSize: '0.9rem',
    lineHeight: 1.6,
    margin: 0,
    color: 'var(--text-muted)',
  },
  animateHidden: {
    opacity: 0,
    transform: 'translateY(25px)',
    transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  animateVisible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

