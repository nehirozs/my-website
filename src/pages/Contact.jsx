import mailLogo from '../logos/mail.png'
import githubLogo from '../logos/github.png'
import linkedinLogo from '../logos/linkedin.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [infoRef, infoVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.1 });

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
          Get in Touch
        </h1>
        <p
          style={{
            ...styles.sub,
            ...(titleVisible ? styles.animateVisible : styles.animateHidden)
          }}
        >
          If you'd like to talk about computer science, projects, or potential opportunities, feel free to reach out.
        </p>
        <div style={styles.headerLine} />
      </header>

      <div style={styles.contactMethods}>
        <ContactCard
          href="https://github.com/nehirozs"
          logo={githubLogo}
          title="GitHub"
          index={0}
        />
        <ContactCard
          href="https://www.linkedin.com/in/nehirozsunar"
          logo={linkedinLogo}
          title="LinkedIn"
          index={1}
        />
        <ContactCard
          href="mailto:nehir.ozsunar@mail.mcgill.ca"
          logo={mailLogo}
          title="Email"
          index={2}
        />
      </div>

      <div
        ref={infoRef}
        style={{
          ...styles.additionalInfo,
          ...(infoVisible ? styles.animateVisible : styles.animateHidden)
        }}
      >
        <p style={styles.note}>
          Currently based in Montreal, QC · Open to internship opportunities for Summer 2026
        </p>
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
    marginBottom: 'var(--space-lg)',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
    fontWeight: 600,
    lineHeight: 1.1,
    marginBottom: 'var(--space-sm)',
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
    marginTop: 'var(--space-md)',
  },
  contactMethods: {
    display: 'flex',
    flexDirection: 'row',
    gap: 'var(--space-lg)',
    marginBottom: 'var(--space-xl)',
    flexWrap: 'wrap',
  },
  contactCardLink: {
    textDecoration: 'none',
    flex: '1',
    minWidth: '200px',
    display: 'block',
  },
  contactCard: {
    padding: 'var(--space-lg) var(--space-md)',
    borderRadius: 8,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.02)',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    gap: 'var(--space-sm)',
  },
  contactLogo: {
    width: '56px',
    height: '56px',
    objectFit: 'contain',
    borderRadius: 8,
    padding: 0,
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.08)',
    transition: 'transform 0.25s ease, filter 0.25s ease',
    overflow: 'hidden',
    filter: 'brightness(0.95)',
    flexShrink: 0,
  },
  methodTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    fontWeight: 600,
    margin: 0,
    color: 'var(--text-main)',
  },
  additionalInfo: {
    padding: 'var(--space-lg) var(--space-md)',
    borderRadius: 8,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.02)',
    textAlign: 'center',
    width: '100%',
    transition: 'all 0.25s ease',
  },
  note: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    margin: 0,
    lineHeight: 1.6,
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

// Contact Card Component
function ContactCard({ href, logo, title, index }) {
  const [cardRef, cardVisible] = useScrollAnimation({
    threshold: 0.1,
    delay: index * 0.1
  });

  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={styles.contactCardLink}
    >
      <div
        ref={cardRef}
        style={{
          ...styles.contactCard,
          ...(cardVisible ? styles.animateVisible : styles.animateHidden)
        }}
        className="contact-card"
      >
        <img src={logo} alt={title} style={styles.contactLogo} />
        <h3 style={styles.methodTitle}>{title}</h3>
      </div>
    </a>
  );
}