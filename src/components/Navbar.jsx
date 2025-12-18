import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>★ Nehir</div>

      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/projects" style={styles.link}>Projects</NavLink>
        <NavLink to="/experience" style={styles.link}>Experience</NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 64px",
    borderBottom: "1px solid var(--border)",
    background: "var(--bg)",
  },
  logo: {
    color: "var(--gold)",
    fontWeight: 600,
    letterSpacing: "0.05em",
  },
  links: {
    display: "flex",
    gap: "32px",
  },
  link: {
    color: "var(--muted)",
    textDecoration: "none",
    fontWeight: 500,
  },
};
