export function Footer() {
  return (
    <footer id="links" style={styles.footer}>
      <a href="https://github.com/nehirozs">GitHub</a>
      <a href="https://www.linkedin.com/in/nehirozsunar">LinkedIn</a>
      <a href="/resume.pdf">Resume</a>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "40px 80px",
    display: "flex",
    gap: "20px",
  },
};
