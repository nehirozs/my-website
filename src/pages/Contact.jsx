import mailLogo from '../logos/mail.png'
import githubLogo from '../logos/github.png'
import linkedinLogo from '../logos/linkedin.png'

export default function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title} className="section-title">Get in Touch</h1>
      
      <p style={styles.intro}>
        If you'd like to talk about computer science, projects, or potential opportunities, feel free to reach out.
      </p>

      <div style={styles.contactMethods}>
  <a 
    href="https://github.com/nehirozs"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.contactCardLink}
  >
    <div style={styles.contactCard}>
      <img src={githubLogo} alt="GitHub" style={styles.contactLogo} />
      <h3 style={styles.methodTitle}>GitHub</h3>
      <span style={styles.contactText}>
        github.com/nehirozs
      </span>
    </div>
  </a>

  <a 
    href="https://linkedin.com/in/nehirozsunar"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.contactCardLink}
  >
    <div style={styles.contactCard}>
      <img src={linkedinLogo} alt="LinkedIn" style={styles.contactLogo} />
      <h3 style={styles.methodTitle}>LinkedIn</h3>
      <span style={styles.contactText}>
        linkedin.com/in/nehirozsunar
      </span>
    </div>
  </a>

  <a 
    href="mailto:nehir.ozsunar@mail.mcgill.ca"
    style={styles.contactCardLink}
  >
    <div style={styles.contactCard}>
      <img src={mailLogo} alt="Email" style={styles.contactLogo} />
      <h3 style={styles.methodTitle}>Email</h3>
      <span style={styles.contactText}>
        nehir.ozsunar@mail.mcgill.ca
      </span>
    </div>
  </a>
</div>

      <div style={styles.additionalInfo}>
        <p style={styles.note}>
          Currently based in Montreal, QC · Open to internship opportunities for Summer 2026
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    paddingTop: '4rem',
    paddingBottom: '6rem',
  },
  title: {
    fontSize: '3.5rem',
    fontFamily: 'var(--font-display)',
    marginBottom: '3rem',
  },
  intro: {
    fontSize: '1.15rem',
    lineHeight: 1.7,
    maxWidth: '100%',
    marginBottom: '3rem',
  },
  contactMethods: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    marginBottom: '3rem',
    flexWrap: 'wrap',
  },
  contactCardLink: {
    textDecoration: 'none',
    flex: '1',
    minWidth: '200px',
    display: 'block',
  },
  contactCard: {
    padding: '2rem 1.5rem',
    background: '#14171c',
    borderRadius: '14px',
    boxShadow: '0 8px 32px rgba(199, 163, 77, 0.25), 0 4px 16px rgba(199, 163, 77, 0.15)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  contactLogo: {
    width: '64px',
    height: '64px',
    objectFit: 'contain',
    marginBottom: '1rem',
    borderRadius: '8px',
  },
  methodTitle: {
    fontSize: '1.2rem',
    fontFamily: 'Playfair Display, serif',
    marginBottom: '0.75rem',
    margin: 0,
  },
  contactText: {
    fontSize: '0.95rem',
    color: '#c7a34d',
    display: 'block',
  },
  additionalInfo: {
    padding: '2rem',
    background: '#14171c',
    borderRadius: '14px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  note: {
    fontSize: '0.95rem',
    margin: 0,
  },
};