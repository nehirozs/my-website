import singingPhoto from '../assets/singing.PNG'
import bshPhoto from '../assets/bshpic.jpg'
import balletPhoto from '../assets/ballet.JPG'

export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title} className="section-title gold">About</h1>
      </div>

      <div style={styles.content}>
        <p style={styles.paragraph}>
        I’m a third-year computer science student at McGill University, interested in how things are built and how our design choices shape the way people interact with them.
        </p>
        
        <p style={styles.paragraph}>
        Outside of CS, I’ve trained professionally in classical ballet and music for many years, and I continue to spend time on them alongside my studies.
        </p>
      </div>

      <div style={styles.photoSection}>
        <div style={styles.photoCard}>
          <img src={bshPhoto} alt="BSH Internship" style={styles.photo} />
        </div>
        <div style={styles.photoCard}>
          <img src={singingPhoto} alt="Performance" style={styles.photo} />
        </div>
        <div style={styles.photoCard}>
          <img src={balletPhoto} alt="Ballet" style={styles.photo} />
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    paddingTop: '4rem',
    paddingBottom: '6rem',
  },
  header: {
    marginBottom: '3rem',
  },
  title: {
    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
    fontFamily: 'var(--font-display)',
    marginBottom: '1rem',
  },
  content: {
    maxWidth: '100%',
    marginBottom: '3rem',
  },
  paragraph: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
    maxWidth: '100%',
  },
  photoSection: {
    display: 'flex',
    gap: '1.5rem',
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingBottom: '1rem',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(199, 163, 77, 0.3) var(--bg-main)',
  },
  photoCard: {
    background: 'var(--bg-soft)',
    borderRadius: '14px',
    overflow: 'hidden',
    minWidth: '400px',
    flexShrink: 0,
  },
  photo: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    display: 'block',
  },
};