export default function CV() {
  return (
    <div style={styles.root}>
      <header style={styles.header}>
        <h1 style={styles.title} className="gold">
          CV
        </h1>
        <p style={styles.sub}>
          View my CV below, or download a copy.
        </p>
        <div style={styles.actions}>
          <a href="/cv.pdf" download style={styles.downloadBtn}>
            Download PDF
          </a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" style={styles.secondaryLink}>
            Open in new tab ↗
          </a>
        </div>
        <div style={styles.headerLine} />
      </header>

      <main style={styles.main}>
        <div style={styles.embedWrap}>
          <iframe
            title="CV PDF"
            src="/cv.pdf"
            style={styles.iframe}
          />
        </div>
        <p style={styles.fallback}>
          If the embed doesn’t load,{" "}
          <a href="/cv.pdf" target="_blank" rel="noreferrer" style={styles.inlineLink}>
            open the PDF
          </a>
          .
        </p>
      </main>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "60vh",
    color: "var(--text-main)",
    fontFamily: "var(--font-body)",
    paddingBottom: "var(--space-xl)",
  },
  header: {
    paddingTop: "var(--space-lg)",
    paddingBottom: "var(--space-md)",
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
    fontWeight: 600,
    lineHeight: 1.1,
    marginBottom: "0.5rem",
  },
  sub: {
    fontSize: "0.95rem",
    color: "var(--text-muted)",
    lineHeight: 1.6,
    marginBottom: "var(--space-md)",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.75rem 1rem",
    marginBottom: "var(--space-md)",
  },
  downloadBtn: {
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "0.6rem 1rem",
    border: "1px solid rgba(212, 179, 102, 0.55)",
    borderRadius: 6,
    color: "var(--gold)",
    background: "rgba(212, 179, 102, 0.10)",
    textDecoration: "none",
    transition: "background 0.2s, border-color 0.2s",
  },
  secondaryLink: {
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    textDecoration: "none",
    letterSpacing: "0.02em",
  },
  headerLine: {
    height: 1,
    background: "rgba(255,255,255,0.08)",
  },
  main: {
    paddingTop: 0,
  },
  embedWrap: {
    width: "100%",
    height: "min(78vh, 950px)",
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(0,0,0,0.12)",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: 0,
  },
  fallback: {
    marginTop: "0.75rem",
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    lineHeight: 1.6,
  },
  inlineLink: {
    color: "var(--gold)",
    textDecoration: "none",
  },
};

