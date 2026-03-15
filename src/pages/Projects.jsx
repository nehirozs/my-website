import { useState, useMemo, useEffect } from "react";
import healthHubImage1 from "../assets/health_hub1.png";
import healthHubImage2 from "../assets/health_hub2.png";
import mptRiskAnalysisImage from "../assets/mpt_risk_analysis.png";
import antonioImage1 from "../assets/antonio1.png";
import antonioImage2 from "../assets/antonio2.png";

const projects = [
  {
    id: "01",
    title: "Antonio",
    subtitle: "A voice-first AI assistant that I've built for my own car — and being developed into something anyone can make their own.",
    tags: ["Next.js", "TypeScript", "Voice", "LLM", "Maps", "Spotify"],
    category: "Personal · AI",
    year: "2026",
    description:
      "Antonio started as a personal AI copilot for my Mini Cooper S — a voice-activated mobile web app tuned to my preferences, with multiple personality modes, persistent conversation history, and Spotify integration. I'm currently expanding it into a fully customizable platform so any driver can configure their own assistant. Built with Next.js and TypeScript, the app integrates a real-time voice pipeline with an LLM backend, a REST API for conversation and user preference persistence, and a responsive frontend optimized for iPhone Safari.",
    highlights: [
      "Voice-activated mobile web app with real-time voice pipeline",
      "Multiple personality modes and persistent conversation history",
      "Spotify integration and REST API for preferences",
      "Responsive frontend optimized for iPhone Safari",
    ],
    link: "https://github.com/nehirozs/antonio.ai",
    images: [antonioImage2, antonioImage1],
    color: "#e07c4c",
  },
  {
    id: "02",
    title: "health_hub-frontend",
    subtitle: "AI Health Kiosk Interface",
    tags: ["TypeScript", "React Three Fiber", "3D Visualization"],
    category: "Internship · 3age",
    year: "2026",
    images: [healthHubImage1, healthHubImage2],
    description:
      "A patient-facing health kiosk interface I have designed and built during my internship at Sabancı University Inovent. Features an interactive 3D Vitruvian figure for anatomical input, patient flow visualization, and a modular component system designed for real clinical environments.",
    highlights: [
      "3D interactive body map using React Three Fiber",
      "Patient flow system with Lucidchart/Mermaid diagrams",
      "Designed for accessibility and clinical usability",
    ],
    link: "https://github.com/nehirozs/health_hub-frontend",
    color: "var(--gold)",
  },
  {
    id: "03",
    title: "MPT-Risk-Analysis",
    subtitle: "Portfolio Optimization Engine",
    tags: ["Python", "Jupyter", "Finance", "Monte Carlo"],
    category: "Quantitative Finance",
    year: "2025",
    image: mptRiskAnalysisImage,
    description:
      "An implementation of Modern Portfolio Theory with backtesting, Monte Carlo simulation, and Black-Litterman models. Built to explore the intersection of statistical modeling and financial decision-making.",
    highlights: [
      "Efficient frontier construction & Sharpe ratio optimization",
      "Monte Carlo simulation for risk forecasting",
      "Black-Litterman model for view-adjusted allocation",
    ],
    link: "https://github.com/nehirozs/MPT-Risk-Analysis",
    color: "#7eb8c8",
  },
  {
    id: "04",
    title: "Language-Data-Science",
    subtitle: "NLP & Linguistic Analysis",
    tags: ["Python", "NLP", "Jupyter", "Data Science"],
    category: "Data Science · COMP 345",
    year: "2026",
    description:
      "A data science project exploring natural language processing techniques applied to linguistic datasets. Covers tokenization, frequency analysis, and statistical modeling of language patterns.",
    highlights: [
      "Corpus analysis and tokenization pipelines",
      "Frequency distributions and statistical modeling",
      "Exploratory data analysis with visual insights",
    ],
    link: "https://github.com/nehirozs/Language-Data-Science",
    color: "#7ec8a0",
  },
  {
    id: "05",
    title: "mini-os",
    subtitle: "Simulated Operating System",
    tags: ["C", "Systems", "OS Design"],
    category: "Systems Programming",
    year: "2024",
    description:
      "A simulated operating system built in C, implementing core OS primitives from scratch. Includes a functional shell, a process scheduler, and an LRU page replacement algorithm for memory management.",
    highlights: [
      "Custom shell with command parsing and execution",
      "Process scheduling with priority queues",
      "LRU page replacement for virtual memory management",
    ],
    link: "https://github.com/nehirozs/mini-os",
    color: "#a97ec8",
  },
];

const tagColors = {
  TypeScript: "#3178c6",
  "Next.js": "#111",
  Python: "#f7c948",
  C: "#888",
  Jupyter: "#f37626",
  "React Three Fiber": "var(--gold)",
  "3D Visualization": "var(--gold)",
  Finance: "#7eb8c8",
  "Monte Carlo": "#7eb8c8",
  NLP: "#7ec8a0",
  "Data Science": "#7ec8a0",
  Systems: "#a97ec8",
  "OS Design": "#a97ec8",
  Voice: "#e07c4c",
  LLM: "#e07c4c",
  Maps: "#4285f4",
  Spotify: "#1db954",
};

const categories = ["All", ...new Set(projects.map((p) => p.category.split(" · ")[0]))];

export default function ProjectsPage() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category.startsWith(filter));
  }, [filter]);

  const selected = active !== null ? projects[active] : null;

  useEffect(() => {
    if (active !== null && selected && !filtered.includes(selected)) {
      setActive(null);
    }
  }, [filter, active, selected, filtered]);


  return (
    <div style={styles.root}>
      <style>{css}</style>

      <header style={styles.header}>
        <h1 style={styles.title} className="gold">
          Selected Work
        </h1>
        <p style={styles.sub}>
          A selection of my projects spanning systems, finance, health tech, and language.
        </p>

        <div style={styles.filterRow}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              style={{
                ...styles.filterBtn,
                ...(filter === cat ? styles.filterBtnActive : {}),
              }}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div style={styles.headerLine} />
      </header>

      <main style={styles.main}>
        <div style={styles.list}>
          {filtered.map((p) => {
            const globalIndex = projects.indexOf(p);
            const isHovered = hovered === globalIndex;
            const isActive = active === globalIndex;
            const showDetail = isActive && selected && selected.id === p.id;
            return (
              <div key={p.id} style={styles.rowWrapper}>
                <div
                  role="button"
                  tabIndex={0}
                  className="project-row"
                  style={{
                    ...styles.row,
                    borderLeftColor: isHovered || isActive ? p.color : "transparent",
                    background: isActive ? "rgba(255,255,255,0.06)" : undefined,
                  }}
                  onMouseEnter={() => setHovered(globalIndex)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(active === globalIndex ? null : globalIndex)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(active === globalIndex ? null : globalIndex);
                    }
                    if (e.key === "Escape") setActive(null);
                  }}
                >
                  <span style={styles.rowNum}>{p.id}</span>
                  <div style={styles.rowMeta}>
                    <h2
                      style={{
                        ...styles.rowTitle,
                        color: isHovered || isActive ? p.color : "var(--text-main)",
                      }}
                    >
                      {p.title}
                    </h2>
                    <p style={styles.rowSub}>{p.subtitle}</p>
                  </div>
                  <div className="row-tags" style={styles.rowTags}>
                    {p.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        style={{
                          ...styles.tag,
                          borderColor: tagColors[t] || "var(--text-muted)",
                          color: tagColors[t] || "var(--text-muted)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="row-year" style={styles.rowYear}>{p.year}</span>
                  <span
                    style={{
                      ...styles.rowArrow,
                      transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                      color: p.color,
                      opacity: isHovered || isActive ? 1 : 0.35,
                    }}
                    aria-hidden
                  >
                    →
                  </span>
                </div>

                {showDetail && (
                  <div
                    className="detail-panel"
                    role="region"
                    aria-label={`Details for ${p.title}`}
                    style={{
                      ...styles.detail,
                      borderColor: p.color,
                      boxShadow: `0 0 0 1px ${p.color}22`,
                    }}
                  >
                    <div style={styles.detailHeader}>
                      <div>
                        <p style={{ ...styles.detailCategory, color: p.color }}>
                          {p.category}
                        </p>
                        <h3 style={styles.detailTitle}>{p.title}</h3>
                        <p style={styles.detailSubtitle}>{p.subtitle}</p>
                      </div>
                      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      {p.website && (
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            ...styles.detailLink,
                            borderColor: p.color,
                            color: p.color,
                          }}
                          className="detail-link-btn"
                        >
                          Visit site ↗
                        </a>
                      )}
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          ...styles.detailLink,
                          borderColor: p.color,
                          color: p.color,
                        }}
                        className="detail-link-btn"
                      >
                        View on GitHub ↗
                      </a>
                    </div>
                    </div>

                    {(p.images?.length > 0 || p.image) && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
                        {p.images ? (
                          p.images.map((img, i) => (
                            <div key={i} style={styles.detailImageWrap}>
                              <img
                                src={img}
                                alt={`${p.title} screenshot ${i + 1}`}
                                style={styles.detailImage}
                              />
                            </div>
                          ))
                        ) : (
                          <div style={styles.detailImageWrap}>
                            <img
                              src={p.image}
                              alt={`${p.title} interface screenshot`}
                              style={styles.detailImage}
                            />
                          </div>
                        )}
                      </div>
                    )}

                    <p style={styles.detailDesc}>{p.description}</p>

                    <ul style={styles.detailHighlights}>
                      {p.highlights.map((h, i) => (
                        <li key={i} style={styles.highlight}>
                          <span style={{ ...styles.highlightDot, background: p.color }} />
                          <span style={styles.highlightText}>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={styles.detailTags}>
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            ...styles.tag,
                            borderColor: tagColors[t] ?? "var(--text-muted)",
                            color: tagColors[t] ?? "var(--text-muted)",
                            fontSize: "0.75rem",
                            padding: "4px 10px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      style={styles.closeBtn}
                      onClick={() => setActive(null)}
                      aria-label="Close project details"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

const css = `
  .project-row {
    cursor: pointer;
    transition: background 0.25s ease, border-left-color 0.25s ease;
  }
  .project-row:hover { background: rgba(255,255,255,0.03); }
  .project-row:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }

  .detail-panel {
    animation: projectsSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes projectsSlideIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @media (prefers-reduced-motion: reduce) {
    .detail-panel { animation: none; }
  }

  .detail-link-btn {
    transition: background 0.2s, color 0.2s;
    text-decoration: none;
  }
  .detail-link-btn:hover {
    background: rgba(255,255,255,0.08);
  }

  @media (max-width: 700px) {
    .project-row {
      grid-template-columns: 28px 1fr 24px;
      gap: 0.5rem 1rem;
    }
    .project-row .row-tags,
    .project-row .row-year { display: none !important; }
  }
`;

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
  filterRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "var(--space-md)",
  },
  filterBtn: {
    fontFamily: "var(--font-body)",
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "0.4rem 0.75rem",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 4,
    background: "transparent",
    color: "var(--text-muted)",
    cursor: "pointer",
    transition: "border-color 0.2s, color 0.2s, background 0.2s",
  },
  filterBtnActive: {
    borderColor: "var(--gold)",
    color: "var(--gold)",
    background: "rgba(212, 179, 102, 0.08)",
  },
  headerLine: {
    height: 1,
    background: "rgba(255,255,255,0.08)",
  },
  main: {
    paddingTop: 0,
  },
  list: {
    marginTop: 0,
  },
  rowWrapper: {
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "36px 1fr auto auto 28px",
    alignItems: "center",
    gap: "1rem 1.5rem",
    padding: "1.25rem 0",
    borderLeft: "3px solid transparent",
    paddingLeft: "0.5rem",
    transition: "all 0.2s ease",
  },
  rowNum: {
    fontSize: "0.65rem",
    color: "var(--text-muted)",
    opacity: 0.7,
    letterSpacing: "0.1em",
    fontVariantNumeric: "tabular-nums",
  },
  rowMeta: {
    minWidth: 0,
  },
  rowTitle: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    fontWeight: 500,
    transition: "color 0.2s",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  rowSub: {
    fontSize: "0.75rem",
    color: "var(--text-muted)",
    marginTop: 2,
    letterSpacing: "0.02em",
  },
  rowTags: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  tag: {
    fontSize: "0.65rem",
    padding: "3px 8px",
    border: "1px solid",
    borderRadius: 2,
    letterSpacing: "0.05em",
    whiteSpace: "nowrap",
  },
  rowYear: {
    fontSize: "0.65rem",
    color: "var(--text-muted)",
    opacity: 0.8,
    letterSpacing: "0.08em",
    whiteSpace: "nowrap",
  },
  rowArrow: {
    fontSize: "1rem",
    transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.2s",
    display: "block",
    lineHeight: 1,
  },
  detail: {
    marginTop: 0,
    padding: "2rem 1.75rem",
    border: "1px solid",
    borderTop: "none",
    background: "rgba(255,255,255,0.02)",
    borderRadius: "0 0 8px 8px",
  },
  detailHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1.5rem",
    marginBottom: "1.25rem",
    flexWrap: "wrap",
  },
  detailCategory: {
    fontSize: "0.65rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "0.25rem",
  },
  detailTitle: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
    fontWeight: 600,
    color: "var(--text-main)",
    marginBottom: "0.25rem",
  },
  detailSubtitle: {
    fontSize: "0.85rem",
    color: "var(--text-muted)",
  },
  detailLink: {
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    padding: "0.5rem 1rem",
    border: "1px solid",
    borderRadius: 4,
    whiteSpace: "nowrap",
    display: "inline-block",
  },
  detailImageWrap: {
    marginBottom: "1.5rem",
    borderRadius: 8,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
    width: "100%",
  },
  detailImage: {
    width: "100%",
    height: "auto",
    display: "block",
    verticalAlign: "middle",
  },
  detailDesc: {
    fontSize: "0.9rem",
    color: "var(--text-muted)",
    lineHeight: 1.75,
    marginBottom: "1.5rem",
  },
  detailHighlights: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 1.5rem 0",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  highlight: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
  },
  highlightDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    flexShrink: 0,
    marginTop: 6,
  },
  highlightText: {
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    lineHeight: 1.5,
  },
  detailTags: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  closeBtn: {
    fontFamily: "var(--font-body)",
    fontSize: "0.75rem",
    letterSpacing: "0.06em",
    padding: "0.4rem 0.8rem",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: 4,
    background: "transparent",
    color: "var(--text-muted)",
    cursor: "pointer",
    transition: "border-color 0.2s, color 0.2s",
  },
};
