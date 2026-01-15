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
import threeageLogo from '../assets/3age.jpeg'
import gameCircleLogo from '../assets/gamecircle.jpeg'
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
      period: 'August 2023 - April 2027 (expected)',
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
    <div style={styles.container}>
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
          className="section-title gold"
        >
          Experience
        </h2>
        
        <div style={styles.experienceGrid}>
          <ExperienceCard 
            logo={threeageLogo}
            alt="3age"
            logoStyle={styles.expLogo}
            role="AI & Software Development Intern"
            company="3age - Sabancı University Inovent"
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
          className="section-title gold"
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
          className="section-title gold"
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
  container: {
    paddingTop: '3rem',
    paddingBottom: '5rem',
  },
  
  // ===== HERO SECTION =====
  hero: {
    display: 'flex',
    gap: '6rem',
    alignItems: 'center',
    padding: '8rem 0',
    marginBottom: '2rem',
  },
  heroContent: {
    maxWidth: '650px',
    flex: 1,
  },
  greeting: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    fontWeight: 300,
    display: 'block',
    marginBottom: '1.25rem',
    opacity: 0.9,
  },
  name: {
    marginBottom: '1.5rem',
    filter: 'drop-shadow(0 8px 24px rgba(212, 179, 102, 0.7)) drop-shadow(0 4px 12px rgba(212, 179, 102, 0.5))',
  },
  subtitle: {
    fontSize: '1.65rem',
    fontWeight: 400,
    marginBottom: '2.25rem',
    fontFamily: 'var(--font-body)',
    color: 'var(--text-main)',
    letterSpacing: '-0.01em',
  },
  bio: {
    fontSize: '1.1rem',
    lineHeight: 1.7,
    color: 'var(--text-muted)',
    letterSpacing: '0.01em',
  },
  profileImageWrapper: {
    flex: '0 0 320px',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(212, 179, 102, 0.3), 0 4px 16px rgba(212, 179, 102, 0.25), 0 0 40px rgba(212, 179, 102, 0.15)',
    border: '2px solid rgba(212, 179, 102, 0.25)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // EXPERIENCE SECTION
  experienceSection: {
    padding: '8rem 0',
  },
  sectionTitle: {
    marginBottom: '4rem',
  },
  experienceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
  },
  experienceCard: {
    padding: '3rem 2.5rem',
    background: 'linear-gradient(135deg, rgba(35, 38, 45, 0.95) 0%, rgba(30, 33, 40, 0.9) 100%)',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: '1px solid rgba(212, 179, 102, 0.2)',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
  },
  expLogo: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
    marginBottom: '1.5rem',
    borderRadius: '12px',
    padding: '0',
    background: 'transparent',
    border: '1px solid rgba(212, 179, 102, 0.15)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  },
  expRole: {
    fontSize: '1.2rem',
    marginBottom: '0.6rem',
    fontWeight: 600,
    color: 'var(--text-main)',
  },
  expCompany: {
    fontSize: '1rem',
    marginBottom: '0.6rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  expPeriod: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.02em',
  },
  expPeriodRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  expCurrentBadge: {
    padding: '0.35rem 0.85rem',
    background: 'linear-gradient(135deg, rgba(212, 179, 102, 0.25) 0%, rgba(212, 179, 102, 0.2) 100%)',
    borderRadius: '6px',
    fontSize: '0.7rem',
    color: 'var(--gold)',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    border: '1px solid rgba(212, 179, 102, 0.35)',
    boxShadow: '0 2px 8px rgba(212, 179, 102, 0.25)',
  },
  
  //  SKILLS SECTION 
  skillsSection: {
    padding: '8rem 0',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '1.5rem',
  },
  skillBox: {
    padding: '2rem 1.25rem',
    background: 'linear-gradient(135deg, rgba(35, 38, 45, 0.95) 0%, rgba(30, 33, 40, 0.9) 100%)',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.875rem',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: '1px solid rgba(212, 179, 102, 0.2)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25), 0 2px 6px rgba(0, 0, 0, 0.15)',
    position: 'relative',
  },
  skillLogo: {
    width: '64px',
    height: '64px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
    filter: 'brightness(0.95)',
  },
  skillName: {
    fontSize: '0.875rem',
    fontWeight: 500,
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: 'var(--text-main)',
  },
  
  // EDUCATION SECTION
  educationSection: {
    padding: '8rem 0',
  },
  educationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
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