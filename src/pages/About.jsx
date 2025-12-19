import singingPhoto from '../assets/singing.png'
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
          I'm a third-year computer science student at McGill University, interested in how things are built and how our design choices shape the way people interact with them.
        </p>
        
        <p style={styles.paragraph}>
          Outside of CS, I've trained professionally in classical ballet and music for many years, and I continue to spend time on them alongside my studies.
        </p>
      </div>
    
      <div style={styles.photoSection} className="photo-section">
        <div style={styles.photoCard} className="photo-card">
          <img src={bshPhoto} alt="BSH Internship" style={styles.photo} />
        </div>
        <div style={styles.photoCard} className="photo-card">
          <img src={singingPhoto} alt="Performance" style={styles.photo} />
        </div>
        <div style={styles.photoCard} className="photo-card">
          <img src={balletPhoto} alt="Ballet" style={styles.photo} />
        </div>
      </div>

      {/* Volunteer Section */}
      <div style={styles.volunteerSection}>
        <h2 style={styles.volunteerTitle}>Community Engagement</h2>
        
        <div style={styles.volunteerCard}>
          <div style={styles.volunteerHeader}>
            <h3 style={styles.projectName}>Robert College Community Involvement Projects (CIP)</h3>
            <span style={styles.volunteerPeriod}>2019 - 2021</span>
          </div>
          <p style={styles.volunteerRole}>Volunteer Educator & Project Director</p>
          
          <ul style={styles.projectList}>
            <li style={styles.projectItem}>
              <strong>Proverb Workshop (2021):</strong> Led online workshops for migrant students (ages 10–15) from Syria, Turkey, Lebanon, and Estonia to exchange cultural proverbs; contributed to a published collection promoting intercultural understanding.
            </li>
            <li style={styles.projectItem}>
              <strong>Manyas United (2021):</strong> Taught environmental awareness through art and English lessons in virtual sessions for primary school students; collaborated with a multidisciplinary instructor team.
            </li>
            <li style={styles.projectItem}>
              <strong>Esenyurt CIP (2019):</strong> Designed murals for a mixed Turkish–Syrian primary school and organized creative workshops in music, drama, and drawing to support student engagement.
            </li>
          </ul>
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
    borderRadius: '14px',
    overflow: 'hidden',
    minWidth: '400px',
    flexShrink: 0,
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    display: 'block',
  },
  caption: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '0.75rem',
    color: '#e6e9ef',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    background: 'rgba(13, 15, 18, 0.7)',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    backdropFilter: 'blur(8px)',
  },
  volunteerSection: {
    marginTop: '5rem',
  },
  volunteerTitle: {
    fontSize: '2rem',
    fontFamily: 'var(--font-display)',
    marginBottom: '2rem',
    color: 'var(--text-main)',
  },
  volunteerCard: {
    background: 'var(--bg-soft)',
    padding: '2.5rem',
    borderRadius: '14px',
  },
  volunteerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  projectName: {
    fontSize: '1.3rem',
    fontFamily: 'var(--font-display)',
    margin: 0,
  },
  volunteerPeriod: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
  },
  volunteerRole: {
    fontSize: '1rem',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
    color: 'var(--text-muted)',
  },
  projectList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  projectItem: {
    marginBottom: '1.25rem',
    lineHeight: 1.7,
    fontSize: '0.95rem',
  },
};