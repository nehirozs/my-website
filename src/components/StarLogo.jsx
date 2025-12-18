export default function StarLogo({ onClick }) {
  return (
    <span
      onClick={onClick}
      title="Navigate"
      style={{
        cursor: "pointer",
        color: "var(--gold)",
        fontSize: "1.4rem",
        transition: "transform 0.3s ease, color 0.3s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "rotate(25deg) scale(1.2)";
        e.currentTarget.style.color = "var(--gold-soft)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "rotate(0deg) scale(1)";
        e.currentTarget.style.color = "var(--gold)";
      }}
    >
      ★
    </span>
  );
}
