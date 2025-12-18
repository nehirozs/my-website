export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.name}>Nehir Özsunar</h1>
      <p style={styles.subtitle}>Computer Science @ McGill University</p>
      <p style={styles.tagline}>
        Interested in systems, algorithms, and building reliable software.
      </p>
    </section>
  );
}

const styles = {
  hero: {
    padding: "120px 0 80px",
    borderBottom: "1px solid var(--border)",
  },
  name: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "var(--gold)",
    fontSize: "1.2rem",
    marginBottom: "1.2rem",
  },
  tagline: {
    color: "var(--muted)",
    maxWidth: "520px",
  },
};
