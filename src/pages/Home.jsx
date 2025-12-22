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


export default function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.greeting}>Hello, I'm</span>
          <h1 style={styles.name} className="gold">Nehir Özsunar</h1>
          <h2 style={styles.subtitle}>Computer Science student at McGill University</h2>
          <p style={styles.bio}>
            Third-year student · Expected graduation Fall 2026
          </p>
        </div>
        
        <div style={styles.profileImageWrapper}>
          <img 
            src={profilePic} 
            alt="Nehir Özsunar" 
            style={styles.profileImage}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.experienceSection}>
        <h2 style={styles.sectionTitle} className="section-title gold">Experience</h2>
        
        <div style={styles.experienceGrid}>
  <div style={styles.experienceCard}>
    <img src={threeageLogo} alt="3age" style={styles.expLogo} />
    <h3 style={styles.expRole}>AI & Software Development Intern</h3>
    <p style={styles.expCompany}>3age</p>
    <div style={styles.expPeriodRow}>
      <span style={styles.expPeriod}>Current</span>
      <span style={styles.expCurrentBadge}>Active</span>
    </div>
  </div>

  <div style={styles.experienceCard}>
    <img src={bshLogo} alt="BSH Hausgeräte" style={styles.expLogo} />
    <h3 style={styles.expRole}>Robotics Automation Intern</h3>
    <p style={styles.expCompany}>BSH Hausgeräte</p>
    <p style={styles.expPeriod}>July - August 2024</p>
  </div>

  <div style={styles.experienceCard}>
    <img src={gameCircleLogo} alt="The Game Circle" style={styles.expLogo} />
    <h3 style={styles.expRole}>Game Development Intern</h3>
    <p style={styles.expCompany}>The Game Circle</p>
    <p style={styles.expPeriod}>June 2022</p>
  </div>
</div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.skillsSection}>
        <h2 style={styles.sectionTitle} className="section-title gold">Technical Skills</h2>
        
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
          ].map((skill, index) => (
            <div key={index} style={styles.skillBox}>
              <img src={skill.logo} alt={skill.name} style={styles.skillLogo} />
              <div style={styles.skillName}>{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={styles.educationSection}>
        <h2 style={styles.sectionTitle} className="section-title gold">Education</h2>
        
        <div style={styles.educationCard} className="education-card">
  <div style={styles.educationHeader}>
  <img src={mcgillLogo} alt="McGill University" style={styles.mcgillLogo} />
  <div style={styles.educationHeaderText}>
      <h3 style={styles.degree}>McGill University</h3>
      <span style={styles.educationPeriod}>
        August 2023 – December 2026 (expected)
      </span>
    </div>
  </div>

      <div style={styles.schoolRow} className="education-degree-row">
        <p style={styles.school}>BSc in Computer Science</p>
        <div style={styles.educationDetails}>
          <span style={styles.educationBadge}>AI Concentration</span>
          <span style={styles.educationBadge}>Minor in Economics</span>
        </div>
      </div>
      <p className="coursework-summary" style={styles.courseworkSummary}>
        Relevant coursework in algorithms, systems, programming languages, and economics.
      </p>
      <p className="coursework-full" style={styles.courseworkFull}>
        Third year • Relevant coursework includes Algorithm Design, Algorithms and Data Structures, Programming Challenges, 
        Programming Languages & Paradigms, Computer Systems, Circuit Design, Introduction to Digital Audio, Economics Statistics, Microeconomics, Macroeconomics.
      </p>
    </div>

        <div style={styles.additionalEducation}>
        <div style={styles.additionalEducationItem}>
          <div style={styles.additionalSchoolRow}>
            <img src={robertCollegeLogo} alt="Robert College of Istanbul" style={styles.additionalSchoolLogo} />
            <h4 style={styles.additionalSchool}>Robert College of Istanbul</h4>
          </div>
          <div style={styles.additionalPeriodWrapper}>
            <span style={styles.additionalPeriod}>2018 - 2023</span>
          </div>
          <p style={styles.additionalDetail}>
            High School Diploma
          </p>
        </div>

        <div style={styles.additionalEducationItem}>
          <div style={styles.additionalSchoolRow}>
            <img src={mimarSinanLogo} alt="Mimar Sinan Fine Arts University" style={styles.additionalSchoolLogo} />
            <h4 style={styles.additionalSchool}>Mimar Sinan Fine Arts University</h4>
          </div>
          <div style={styles.additionalPeriodWrapper}>
            <span style={styles.additionalPeriod}>2020 - 2022</span>
          </div>
          <p style={styles.additionalDetail}>
            Conservatory program, part time enrollment during high school - skipped 2 years
          </p>
        </div>
      </div>
      </section>

      <ScrollConstellation />
    </div>
  )
}

const styles = {
  container: {
    paddingTop: '2rem',
    paddingBottom: '4rem',
  },
  
  // ===== HERO SECTION =====
  hero: {
    display: 'flex',
    gap: '5rem',
    alignItems: 'center',
    padding: '7rem 0',
  },
  heroContent: {
    maxWidth: '650px',
    flex: 1,
  },
  greeting: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    fontWeight: 300,
    display: 'block',
    marginBottom: '1rem',
  },
  name: {
    marginBottom: '1.5rem',
    filter: 'drop-shadow(0 8px 24px rgba(199, 163, 77, 0.6)) drop-shadow(0 4px 12px rgba(199, 163, 77, 0.4))',
  },
  subtitle: {
    fontSize: '1.6rem',
    fontWeight: 400,
    marginBottom: '2rem',
    fontFamily: 'var(--font-body)',
  },
  bio: {
    fontSize: '1.05rem',
    lineHeight: 1.6,
  },
  profileImageWrapper: {
    flex: '0 0 300px',
  },
  profileImage: {
    width: '100%',
    height: 'auto',
    boxShadow: '0 8px 32px rgba(199, 163, 77, 0.4), 0 4px 16px rgba(199, 163, 77, 0.3), 0 0 60px rgba(199, 163, 77, 0.2)',
  },
  
  // EXPERIENCE SECTION
  experienceSection: {
    padding: '7rem 0',
  },
  sectionTitle: {
    marginBottom: '3rem',
  },
  experienceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2.5rem',
  },
  experienceCard: {
    padding: '2.5rem 2rem',
    background: 'var(--bg-soft)',
    borderRadius: '14px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.2s ease',
  },
  expLogo: {
    width: '120px',
    height: '120px',
    objectFit: 'contain',
    marginBottom: '1.5rem',
    borderRadius: '8px',
  },
  
  /*
  expLogoBSH: {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
    marginTop: '0rem',
    marginBottom: '0rem',
    borderRadius: '8px',
  },
*/

  expRole: {
    fontSize: '1.15rem',
    marginBottom: '0.5rem',
  },
  expCompany: {
    fontSize: '0.95rem',
    marginBottom: '0.5rem',
  },
  expPeriod: {
    fontSize: '0.85rem',
  },
  expPeriodRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  expCurrentBadge: {
    padding: '0.25rem 0.75rem',
    background: 'rgba(199, 163, 77, 0.15)',
    borderRadius: '4px',
    fontSize: '0.7rem',
    color: 'var(--gold)',
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  
  //  SKILLS SECTION 
  skillsSection: {
    padding: '7rem 0',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
    gap: '1.25rem',
  },
  skillBox: {
    padding: '1.75rem 1rem',
    background: 'var(--bg-soft)',
    borderRadius: '14px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    transition: 'transform 0.2s ease',
  },
  skillLogo: {
    width: '48px',
    height: '48px',
    objectFit: 'contain',
  },
  skillName: {
    fontSize: '0.85rem',
    fontWeight: 500,
    textAlign: 'center',
  },
  
  // EDUCATION SECTION
  educationSection: {
    padding: '7rem 0',
  },
  educationCard: {
    padding: '2.5rem',
    paddingTop: '1rem',
    background: 'var(--bg-soft)',
    borderRadius: '14px',
    marginBottom: '2rem',
    position: 'relative',
    textAlign: 'left',
  },
  schoolRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  schoolLogo: {
    width: '48px',
    height: '48px',
    objectFit: 'contain',
    borderRadius: '6px',
  },

  mcgillLogo: {
  width: '48px',
  height: '48px',
  objectFit: 'contain',
  borderRadius: '6px',
  marginLeft: '-2rem',
},

  educationHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    textAlign: 'left',
    flexWrap: 'nowrap',
  },
  degree: {
    fontSize: '1.4rem',
  },
  educationPeriod: {
    fontSize: '0.75rem',
  },
  school: {
    fontSize: '1.1rem',
    margin: 0,
    fontWeight: 600,
    fontFamily: 'var(--font-display)',
  },
  educationDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.55rem',
  },
  educationBadge: {
    padding: '0.5rem 1rem',
    background: 'rgba(199, 163, 77, 0.1)',
    borderRadius: '6px',
    fontSize: '0.6rem',
    color: 'var(--gold)',
    fontWeight: 500,
  },
  educationNote: {
    fontSize: '0.95rem',
    lineHeight: 1.65,
    marginTop: '1rem',
    maxWidth: '100%',
  },
  courseworkSummary: {
    fontSize: '0.95rem',
    lineHeight: 1.65,
    marginTop: '1rem',
    maxWidth: '100%',
    display: 'none',
  },
  courseworkFull: {
    fontSize: '0.95rem',
    lineHeight: 1.65,
    marginTop: '1rem',
    maxWidth: '100%',
    display: 'block',
  },
  additionalEducation: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
  },
  additionalEducationItem: {
    padding: '2rem',
    background: 'var(--bg-soft)',
    borderRadius: '14px',
  },
  additionalSchoolRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
  },
  additionalSchoolLogo: {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
    borderRadius: '6px',
    flexShrink: 0,
  },
  additionalPeriodWrapper: {
    marginBottom: '0.75rem',
  },
  additionalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  additionalSchool: {
    fontSize: '1.1rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    margin: 0,
  },
  additionalPeriod: {
    fontSize: '0.8rem',
  },
  additionalDetail: {
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
};