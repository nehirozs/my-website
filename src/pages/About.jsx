import { useState, useEffect, useRef } from 'react'
import singingPhoto from '../assets/singing.png'
import bshPhoto from '../assets/bshpic.jpg'
// import balletPhoto from '../assets/ballet.JPG' // Commented out - kept for future use
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [para1Ref, para1Visible] = useScrollAnimation({ threshold: 0.1, delay: 0.1 });
  const [para2Ref, para2Visible] = useScrollAnimation({ threshold: 0.1, delay: 0.2 });
  const [volunteerTitleRef, volunteerTitleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [interdisciplinaryCardRef, interdisciplinaryCardVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.1 });
  const [volunteerCardRef, volunteerCardVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.2 });
  
  const [activeIndex, setActiveIndex] = useState(0);
  const photoSectionRef = useRef(null);
  const photos = [bshPhoto, singingPhoto]; // balletPhoto removed - kept commented above for future use
  
  useEffect(() => {
    const photoSection = photoSectionRef.current;
    if (!photoSection) return;
    
    const handleScroll = () => {
      const scrollLeft = photoSection.scrollLeft;
      const cardWidth = photoSection.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, photos.length - 1));
    };
    
    photoSection.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      photoSection.removeEventListener('scroll', handleScroll);
    };
  }, [photos.length]);
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 
          ref={titleRef}
          style={{
            ...styles.title,
            ...(titleVisible ? styles.animateVisible : styles.animateHidden)
          }}
          className="section-title gold"
        >
          About
        </h1>
      </div>

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
        <div 
          ref={photoSectionRef}
          style={styles.photoSection} 
          className="photo-section"
        >
          <PhotoCard src={bshPhoto} alt="BSH Internship" index={0} />
          <PhotoCard src={singingPhoto} alt="Performance" index={1} />
          {/* <PhotoCard src={balletPhoto} alt="Ballet" index={2} /> */} {/* Commented out - kept for future use */}
        </div>
        <div className="photo-pagination">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`photo-dot ${index === activeIndex ? 'photo-dot-active' : ''}`}
              onClick={() => {
                const photoSection = photoSectionRef.current;
                if (photoSection) {
                  const cardWidth = photoSection.offsetWidth;
                  photoSection.scrollTo({
                    left: cardWidth * index,
                    behavior: 'smooth'
                  });
                }
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Volunteer Section */}
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
          <h3 style={styles.projectName}>Interdisciplinary Background</h3>
          <p style={{...styles.paragraph, marginTop: '1.5rem', marginBottom: 0}}>
            My background includes professional classical ballet training (18+ years), a conservatory diploma from Mimar Sinan Fine Arts University, and ongoing training with Les Grands Ballets Canadiens.
          </p>
          <p style={{...styles.paragraph, marginTop: '1.75rem', marginBottom: 0}}>
            Alongside dance, I enjoy playing the piano, violin, and singing.
          </p>
        </div>
        
        <div 
          ref={volunteerCardRef}
          style={{
            ...styles.volunteerCard,
            ...(volunteerCardVisible ? styles.animateVisible : styles.animateHidden),
            marginTop: '2rem'
          }}
        >
          <div style={styles.volunteerHeader}>
            <h3 style={styles.projectName}>Robert College Community Involvement Projects (CIP)</h3>
            <span style={styles.volunteerPeriod}>2019 - 2021</span>
          </div>
          <p style={styles.volunteerRole}>Volunteer Educator & Project Director</p>
          
          <p style={{...styles.paragraph, marginTop: '1.5rem', marginBottom: 0}}>
            Designed and led 3 cross-cultural education initiatives for 150+ students across 4 countries
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    paddingTop: '5rem',
    paddingBottom: '7rem',
  },
  header: {
    marginBottom: '3.5rem',
  },
  title: {
    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
    fontFamily: 'var(--font-display)',
    marginBottom: '1rem',
  },
  content: {
    maxWidth: '100%',
    marginBottom: '4rem',
  },
  paragraph: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    marginBottom: '1.75rem',
    maxWidth: '100%',
    color: 'var(--text-muted)',
  },
  photoSectionWrapper: {
    marginBottom: '4rem',
  },
  photoSection: {
    display: 'flex',
    gap: '2rem',
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingBottom: '1.5rem',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(212, 179, 102, 0.4) var(--bg-main)',
  },
  photoCard: {
    borderRadius: '16px',
    overflow: 'hidden',
    minWidth: '420px',
    flexShrink: 0,
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(212, 179, 102, 0.15)',
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
    background: 'rgba(26, 29, 36, 0.75)',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    backdropFilter: 'blur(8px)',
  },
  volunteerSection: {
    marginTop: '6rem',
  },
  volunteerTitle: {
    fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
    fontFamily: 'var(--font-display)',
    marginBottom: '2.5rem',
    color: 'var(--text-main)',
  },
  volunteerCard: {
    background: 'linear-gradient(135deg, rgba(35, 38, 45, 0.95) 0%, rgba(30, 33, 40, 0.9) 100%)',
    padding: '3rem',
    borderRadius: '16px',
    border: '1px solid rgba(212, 179, 102, 0.2)',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
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
    fontSize: '1.35rem',
    fontFamily: 'var(--font-display)',
    margin: 0,
    color: 'var(--text-main)',
    fontWeight: 600,
  },
  volunteerPeriod: {
    fontSize: '0.925rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.02em',
  },
  volunteerRole: {
    fontSize: '1.05rem',
    fontStyle: 'italic',
    marginBottom: '1.75rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.01em',
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