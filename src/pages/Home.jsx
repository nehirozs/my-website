import pythonLogo from '../logos/python.png'
import javaLogo from '../logos/java.png'
import cLogo from '../logos/c.png'
import ocamlLogo from '../logos/ocaml.png'
import bashLogo from '../logos/bash.png'
import mipsLogo from '../logos/asm.jpg'
import javascriptLogo from '../logos/js.png'
import sqlLogo from '../logos/sql.png'
import gitLogo from '../logos/git.png'
import linuxLogo from '../logos/linux.png'
import logisimLogo from '../logos/logisim.png'
import reactLogo from '../logos/react.png'
import profilePic from '../assets/profile.jpg'
import bshLogo from '../assets/bsh.jpg'
import sucoolLogo from '../assets/sucool.png'
import gameCircleLogo from '../assets/gamecircle.png'
import mcgillLogo from '../assets/mcgill.svg'
import mimarSinanLogo from '../assets/msgsu.jpg'
import robertCollegeLogo from '../assets/robert.png'
import ScrollConstellation from '../components/ScrollConstellation'
import EducationCard from '../components/EducationCard'
import { useScrollAnimation } from '../hooks/useScrollAnimation'


export default function Home() {
  const [greetingRef, greetingVisible] = useScrollAnimation({ threshold: 0.1, delay: 0 });
  const [nameRef, nameVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.1 });
  const [subtitleRef, subtitleVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.2 });
  const [bioRef, bioVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.3 });
  const [profileRef, profileVisible] = useScrollAnimation({ threshold: 0.1, delay: 0.2 });
  const [expTitleRef, expTitleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [skillsTitleRef, skillsTitleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [eduTitleRef, eduTitleVisible] = useScrollAnimation({ threshold: 0.1 });
  const educationData = [
    {
      logo: mcgillLogo,
      schoolName: 'McGill University',
      period: 'August 2023 - April 2027',
      description: 'Relevant coursework includes Algorithm Design, Algorithms and Data Structures, Programming Challenges, Programming Languages & Paradigms, Computer Systems, Circuit Design, Introduction to Digital Audio, Economics Statistics, Microeconomics, Macroeconomics',
      summary: 'Currently in third year • Relevant coursework: Algorithms, Data Structures, Systems, Digital Audio, Micro/Macroeconomics…',
      degreeLine: 'BSc in Computer Science (AI Concentration) — Minor in Economics',
      coursework: 'Algorithm Design, Algorithms & Data Structures, Programming Challenges, Programming Languages & Paradigms, Computer Systems, Circuit Design, Introduction to Digital Audio, Economics Statistics, Microeconomics, Macroeconomics'
    },
    {
      logo: robertCollegeLogo,
      schoolName: 'Robert College of Istanbul',
      period: '2018 - 2023',
      description: 'High School Diploma'
    },
    {
      logo: mimarSinanLogo,
      schoolName: 'Mimar Sinan Fine Arts University',
      period: '2020 - 2022',
      description: 'Conservatory program, part time enrollment during high school'
    }
  ];

  return (
    <div style={styles.root}>
      {/* Hero Section */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroContent}>
          <span 
            ref={greetingRef}
            style={{
              ...styles.greeting,
              ...(greetingVisible ? styles.animateVisible : styles.animateHidden)
            }}
          >
            Hello, I'm
          </span>
          <h1 
            ref={nameRef}
            style={{
              ...styles.name,
              ...(nameVisible ? styles.animateVisible : styles.animateHidden)
            }}
            className="gold"
          >
            Nehir Özsunar
          </h1>
          <h2 
            ref={subtitleRef}
            style={{
              ...styles.subtitle,
              ...(subtitleVisible ? styles.animateVisible : styles.animateHidden)
            }}
          >
            Computer Science student at McGill University
          </h2>
          <p 
            ref={bioRef}
            style={{
              ...styles.bio,
              ...(bioVisible ? styles.animateVisible : styles.animateHidden)
            }}
          >
            Third-year student · Expected graduation April 2027
          </p>
        </div>
        
        <div 
          ref={profileRef}
          style={{
            ...styles.profileImageWrapper,
            ...(profileVisible ? styles.animateVisible : styles.animateHidden)
          }}
        >
          <img 
            src={profilePic} 
            alt="Nehir Özsunar" 
            style={styles.profileImage}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.experienceSection}>
        <h2
          ref={expTitleRef}
          style={{
            ...styles.sectionTitle,
            ...(expTitleVisible ? styles.animateVisible : styles.animateHidden)
          }}
          className="gold"
        >
          Experience
        </h2>
        
        <div style={styles.experienceGrid}>
          <ExperienceCard 
            logo={sucoolLogo}
            alt="SUCool"
            logoStyle={styles.expLogo}
            role="AI & Software Development Intern"
            company="3AGE - Sabancı University Start-up Company League"
            period="Current"
            badge="Active"
            index={0}
          />
          <ExperienceCard 
            logo={bshLogo}
            alt="BSH Hausgeräte"
            logoStyle={styles.expLogo}
            role="Robotics Automation Intern"
            company="BSH Hausgeräte"
            period="Summer 2024"
            index={1}
          />
          <ExperienceCard 
            logo={gameCircleLogo}
            alt="The Game Circle"
            logoStyle={styles.expLogo}
            role="Game Development Intern"
            company="The Game Circle"
            period="2022"
            index={2}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.skillsSection}>
        <h2
          ref={skillsTitleRef}
          style={{
            ...styles.sectionTitle,
            ...(skillsTitleVisible ? styles.animateVisible : styles.animateHidden)
          }}
          className="gold"
        >
          Technical Skills
        </h2>
        
        <div style={styles.skillsGrid}>
          {[
            { name: 'Python', logo: pythonLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'C', logo: cLogo },
            { name: 'OCaml', logo: ocamlLogo },
            { name: 'Bash', logo: bashLogo },
            { name: 'MIPS', logo: mipsLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'SQL', logo: sqlLogo },
            { name: 'Git', logo: gitLogo },
            { name: 'Linux/Unix', logo: linuxLogo },
            { name: 'Logisim', logo: logisimLogo },
            { name: 'React', logo: reactLogo },
          ].map((skill, index) => {
            const [skillRef, skillVisible] = useScrollAnimation({ 
              threshold: 0.1, 
              delay: index * 0.05 
            });
            return (
              <div 
                key={index} 
                ref={skillRef}
                style={{
                  ...styles.skillBox,
                  ...(skillVisible ? styles.animateVisible : styles.animateHidden)
                }}
              >
                <img src={skill.logo} alt={skill.name} style={styles.skillLogo} />
                <div style={styles.skillName}>{skill.name}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={styles.educationSection}>
        <h2
          ref={eduTitleRef}
          style={{
            ...styles.sectionTitle,
            ...(eduTitleVisible ? styles.animateVisible : styles.animateHidden)
          }}
          className="gold"
        >
          Education
        </h2>
        
        <div style={styles.educationList}>
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              logo={education.logo}
              schoolName={education.schoolName}
              period={education.period}
              description={education.description}
              summary={education.summary}
              coursework={education.coursework}
              degreeLine={education.degreeLine}
              index={index}
            />
          ))}
        </div>
      </section>

      <ScrollConstellation />
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

  // ===== HERO SECTION =====
  hero: {
    display: 'flex',
    gap: 'var(--space-xl)',
    alignItems: 'center',
    padding: 'var(--space-section) 0',
    marginBottom: 'var(--space-lg)',
  },
  heroContent: {
    flex: 1,
  },
  greeting: {
    color: 'var(--text-muted)',
    fontSize: '0.7rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: 'var(--space-sm)',
  },
  name: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
    fontWeight: 600,
    lineHeight: 1.1,
    marginBottom: 'var(--space-sm)',
  },
  subtitle: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
    fontWeight: 400,
    marginBottom: 'var(--space-md)',
    fontFamily: 'var(--font-body)',
    color: 'var(--text-main)',
    letterSpacing: '-0.01em',
  },
  bio: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: 'var(--text-muted)',
  },
  profileImageWrapper: {
    flex: '0 0 320px',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    border: '1px solid rgba(255,255,255,0.08)',
    transition: 'all 0.25s ease',
  },
  
  // EXPERIENCE SECTION
  experienceSection: {
    padding: 'var(--space-section) 0',
  },
  sectionTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
    fontWeight: 600,
    marginBottom: 'var(--space-lg)',
    color: 'var(--text-main)',
  },
  experienceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'var(--space-md)',
  },
  experienceCard: {
    padding: 'var(--space-lg) var(--space-md)',
    borderRadius: 8,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.02)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
  },
  expLogo: {
    width: '120px',
    height: '120px',
    objectFit: 'contain',
    marginBottom: 'var(--space-sm)',
    borderRadius: 8,
    padding: 0,
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.08)',
    transition: 'all 0.25s ease',
    overflow: 'hidden',
  },
  expRole: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    marginBottom: 'var(--space-xs)',
    fontWeight: 600,
    color: 'var(--text-main)',
  },
  expCompany: {
    fontSize: '0.9rem',
    marginBottom: 'var(--space-xs)',
    color: 'var(--text-muted)',
  },
  expPeriod: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.02em',
  },
  expPeriodRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-sm)',
  },
  expCurrentBadge: {
    padding: '0.3rem 0.75rem',
    borderRadius: 4,
    fontSize: '0.65rem',
    color: 'var(--gold)',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    border: '1px solid rgba(212, 179, 102, 0.3)',
    background: 'rgba(212, 179, 102, 0.08)',
  },
  
  // SKILLS SECTION
  skillsSection: {
    padding: 'var(--space-section) 0',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
    gap: 'var(--space-sm)',
  },
  skillBox: {
    padding: 'var(--space-md) var(--space-sm)',
    borderRadius: 8,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.02)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--space-sm)',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    position: 'relative',
  },
  skillLogo: {
    width: '56px',
    height: '56px',
    objectFit: 'contain',
    transition: 'transform 0.25s ease',
    filter: 'brightness(0.95)',
  },
  skillName: {
    fontSize: '0.85rem',
    fontWeight: 500,
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: 'var(--text-main)',
  },

  // EDUCATION SECTION
  educationSection: {
    padding: 'var(--space-section) 0',
  },
  educationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-lg)',
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

// Experience Card Component
function ExperienceCard({ logo, alt, logoStyle, role, company, period, badge, index }) {
  const [cardRef, cardVisible] = useScrollAnimation({ 
    threshold: 0.1, 
    delay: index * 0.1 
  });
  
  return (
    <div 
      ref={cardRef}
      style={{
        ...styles.experienceCard,
        ...(cardVisible ? styles.animateVisible : styles.animateHidden)
      }}
    >
      <img src={logo} alt={alt} style={logoStyle} />
      <h3 style={styles.expRole}>{role}</h3>
      <p style={styles.expCompany}>{company}</p>
      {badge ? (
        <div style={styles.expPeriodRow}>
          <span style={styles.expPeriod}>{period}</span>
          <span style={styles.expCurrentBadge}>{badge}</span>
        </div>
      ) : (
        <p style={styles.expPeriod}>{period}</p>
      )}
    </div>
  );
}