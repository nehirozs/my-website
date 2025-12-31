import mailLogo from '../logos/mail.png'
import githubLogo from '../logos/github.png'
import linkedinLogo from '../logos/linkedin.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [introRef, introVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.1 });
  const [infoRef, infoVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.2 });
  
  return (
    <div style={styles.container}>
      <h1 
        ref={titleRef}
        style={{
          ...styles.title,
          ...(titleVisible ? styles.animateVisible : styles.animateHidden)
        }}
        className="section-title"
      >
        Get in Touch
      </h1>
      
      <p 
        ref={introRef}
        style={{
          ...styles.intro,
          ...(introVisible ? styles.animateVisible : styles.animateHidden)
        }}
      >
        If you'd like to talk about computer science, projects, or potential opportunities, feel free to reach out.
      </p>

      <div style={styles.contactMethods}>
        <ContactCard 
          href="https://github.com/nehirozs"
          logo={githubLogo}
          title="GitHub"
          text="github.com/nehirozs"
          index={0}
        />
        <ContactCard 
          href="https://linkedin.com/in/nehirozsunar"
          logo={linkedinLogo}
          title="LinkedIn"
          text="linkedin.com/in/nehirozsunar"
          index={1}
        />
        <ContactCard 
          href="mailto:nehir.ozsunar@mail.mcgill.ca"
          logo={mailLogo}
          title="Email"
          text="nehir.ozsunar@mail.mcgill.ca"
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
  container: {
    paddingTop: '5rem',
    paddingBottom: '7rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontFamily: 'var(--font-display)',
    marginBottom: '3.5rem',
  },
  intro: {
    fontSize: '1.15rem',
    lineHeight: 1.75,
    maxWidth: '100%',
    marginBottom: '4rem',
    color: 'var(--text-muted)',
  },
  contactMethods: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2.5rem',
    marginBottom: '4rem',
    flexWrap: 'wrap',
  },
  contactCardLink: {
    textDecoration: 'none',
    flex: '1',
    minWidth: '200px',
    display: 'block',
  },
  contactCard: {
    padding: '2.5rem 2rem',
    background: 'linear-gradient(135deg, rgba(35, 38, 45, 0.95) 0%, rgba(30, 33, 40, 0.9) 100%)',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25), 0 2px 6px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid rgba(212, 179, 102, 0.2)',
    position: 'relative',
    overflow: 'hidden',
  },
  contactLogo: {
    width: '72px',
    height: '72px',
    objectFit: 'contain',
    marginBottom: '1.25rem',
    borderRadius: '12px',
    padding: '0',
    background: 'transparent',
    border: '1px solid rgba(212, 179, 102, 0.15)',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    overflow: 'hidden',
    filter: 'brightness(0.95)',
  },
  methodTitle: {
    fontSize: '1.25rem',
    fontFamily: 'var(--font-display)',
    marginBottom: '0.875rem',
    margin: 0,
    color: 'var(--text-main)',
    fontWeight: 600,
  },
  contactText: {
    fontSize: '0.975rem',
    color: 'var(--gold)',
    display: 'block',
    letterSpacing: '0.02em',
  },
  additionalInfo: {
    padding: '2.5rem',
    background: 'linear-gradient(135deg, rgba(35, 38, 45, 0.95) 0%, rgba(30, 33, 40, 0.9) 100%)',
    borderRadius: '16px',
    textAlign: 'center',
    maxWidth: '650px',
    margin: '0 auto',
    border: '1px solid rgba(212, 179, 102, 0.2)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
  },
  note: {
    fontSize: '0.95rem',
    margin: 0,
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
function ContactCard({ href, logo, title, text, index }) {
  const [cardRef, cardVisible] = useScrollAnimation({ 
    threshold: 0.1, 
    delay: index * 0.1 
  });
  
  const isExternal = href.startsWith('http');
  
  return (
    <a 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
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
        <span style={styles.contactText}>{text}</span>
      </div>
    </a>
  );
}