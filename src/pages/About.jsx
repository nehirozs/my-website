import singingPhoto from '../assets/singing.png'
import bshPhoto from '../assets/bshpic.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [para1Ref, para1Visible] = useScrollAnimation({ threshold: 0.1, delay: 0.1 });
  const [para2Ref, para2Visible] = useScrollAnimation({ threshold: 0.1, delay: 0.2 });
  const [volunteerTitleRef, volunteerTitleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [interdisciplinaryCardRef, interdisciplinaryCardVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.1 });
  const [volunteerCardRef, volunteerCardVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.2 });

  return (
    <div style={styles.root}>
      <header style={styles.header}>
        <h1
          ref={titleRef}
          style={{
            ...styles.title,
            ...(titleVisible ? styles.animateVisible : styles.animateHidden)
          }}
          className="gold"
        >
          About
        </h1>
        <p
          style={{
            ...styles.sub,
            ...(para1Visible ? styles.animateVisible : styles.animateHidden)
          }}
        >
          A bit about my background and what I do outside of code.
        </p>
        <div style={styles.headerLine} />
      </header>

      <div style={styles.content}>
        <p
          ref={para1Ref}
          style={{
            ...styles.paragraph,
            ...(para1Visible ? styles.animateVisible : styles.animateHidden)
          }}
        >
          I'm a third-year computer science student at McGill University, interested in how things are built and how our design choices shape the way people interact with them.
        </p>

        <p
          ref={para2Ref}
          style={{
            ...styles.paragraph,
            ...(para2Visible ? styles.animateVisible : styles.animateHidden)
          }}
        >
          Outside of CS, I've trained professionally in classical ballet and music for many years, and I continue to spend time on them alongside my studies.
        </p>
      </div>

      <div style={styles.photoSectionWrapper}>
        <div style={styles.photoSection} className="photo-section">
          <PhotoCard src={bshPhoto} alt="BSH Internship" index={0} />
          <PhotoCard src={singingPhoto} alt="Performance" index={1} />
        </div>
      </div>

      <div style={styles.volunteerSection}>
        <h2
          ref={volunteerTitleRef}
          style={{
            ...styles.volunteerTitle,
            ...(volunteerTitleVisible ? styles.animateVisible : styles.animateHidden)
          }}
        >
          Extracurriculars
        </h2>

        <div
          ref={interdisciplinaryCardRef}
          style={{
            ...styles.volunteerCard,
            ...(interdisciplinaryCardVisible ? styles.animateVisible : styles.animateHidden)
          }}
        >
          <h3 style={styles.cardTitle}>Interdisciplinary Background</h3>
          <p style={styles.cardParagraph}>
            My background includes professional classical ballet training (18+ years), a conservatory diploma from Mimar Sinan Fine Arts University, and ongoing training with Les Grands Ballets Canadiens.
          </p>
          <p style={{ ...styles.cardParagraph, marginTop: '1.25rem' }}>
            Alongside dance, I enjoy playing the piano, violin, and singing.
          </p>
        </div>

        <div
          ref={volunteerCardRef}
          style={{
            ...styles.volunteerCard,
            ...(volunteerCardVisible ? styles.animateVisible : styles.animateHidden),
            marginTop: 'var(--space-md)'
          }}
        >
          <div style={styles.volunteerHeader}>
            <h3 style={styles.cardTitle}>Robert College Community Involvement Projects (CIP)</h3>
            <span style={styles.volunteerPeriod}>2019 – 2021</span>
          </div>
          <p style={styles.volunteerRole}>Volunteer Educator & Project Director</p>
          <p style={styles.cardParagraph}>
            Designed and led 3 cross-cultural education initiatives for 150+ students across 4 countries.
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  root: {
    minHeight: '60vh',
    color: 'var(--text-main)',
    fontFamily: 'var(--font-body)',
    paddingTop: 'var(--space-lg)',
    paddingBottom: 'var(--space-xl)',
  },
  header: {
    paddingBottom: 'var(--space-md)',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
    fontWeight: 600,
    lineHeight: 1.1,
    marginBottom: '0.5rem',
  },
  sub: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    lineHeight: 1.6,
    marginBottom: 'var(--space-md)',
  },
  headerLine: {
    height: 1,
    background: 'rgba(255,255,255,0.08)',
  },
  content: {
    maxWidth: '100%',
    marginBottom: 'var(--space-md)',
  },
  paragraph: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    marginBottom: '1.25rem',
    color: 'var(--text-muted)',
  },
  photoSectionWrapper: {
    marginBottom: 'var(--space-lg)',
  },
  photoSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.25rem',
    width: '100%',
  },
  photoCard: {
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    border: '1px solid rgba(255,255,255,0.08)',
    transition: 'all 0.25s ease',
  },
  photo: {
    width: '100%',
    height: 220,
    objectFit: 'cover',
    display: 'block',
  },
  volunteerSection: {
    marginTop: 'var(--space-lg)',
  },
  volunteerTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
    fontWeight: 600,
    marginBottom: 'var(--space-md)',
    color: 'var(--text-main)',
  },
  volunteerCard: {
    padding: '2rem 1.75rem',
    borderRadius: 8,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.02)',
    transition: 'all 0.25s ease',
  },
  volunteerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    fontWeight: 600,
    margin: 0,
    color: 'var(--text-main)',
  },
  cardParagraph: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    lineHeight: 1.75,
    margin: 0,
    maxWidth: '100%',
  },
  volunteerPeriod: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.08em',
  },
  volunteerRole: {
    fontSize: '0.85rem',
    fontStyle: 'italic',
    marginBottom: '1rem',
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

// Photo Card Component
function PhotoCard({ src, alt, index }) {
  const [photoRef, photoVisible] = useScrollAnimation({ 
    threshold: 0.1, 
    delay: index * 0.1 
  });
  
  return (
    <div 
      ref={photoRef}
      style={{
        ...styles.photoCard,
        ...(photoVisible ? styles.animateVisible : styles.animateHidden)
      }}
      className="photo-card"
    >
      <img src={src} alt={alt} style={styles.photo} />
    </div>
  );
}