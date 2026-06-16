import { useState, useRef, useCallback, useEffect } from "react";

const SWIPE_THRESHOLD = 40;

export default function ProjectImageCarousel({ images, title, accentColor = "var(--gold)" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationOffset, setRotationOffset] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const dragRef = useRef({ startX: 0, dragging: false });

  useEffect(() => {
    setActiveIndex(0);
    setRotationOffset(0);
  }, [images]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const count = images.length;
  const angleStep = 360 / count;
  const radius = count <= 2 ? 150 : count <= 3 ? 165 : 175;

  const goTo = useCallback(
    (index) => {
      const target = ((index % count) + count) % count;
      if (target === activeIndex) return;

      const forward = (target - activeIndex + count) % count;
      const backward = (activeIndex - target + count) % count;

      if (forward <= backward) {
        setRotationOffset((prev) => prev - forward * angleStep);
      } else {
        setRotationOffset((prev) => prev + backward * angleStep);
      }
      setActiveIndex(target);
    },
    [activeIndex, angleStep, count]
  );

  const goNext = useCallback(() => {
    setRotationOffset((prev) => prev - angleStep);
    setActiveIndex((prev) => (prev + 1) % count);
  }, [angleStep, count]);

  const goPrev = useCallback(() => {
    setRotationOffset((prev) => prev + angleStep);
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [angleStep, count]);

  const onPointerDown = (e) => {
    dragRef.current = { startX: e.clientX, dragging: true };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e) => {
    if (!dragRef.current.dragging) return;
    const deltaX = e.clientX - dragRef.current.startX;
    dragRef.current.dragging = false;
    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const onPointerCancel = () => {
    dragRef.current.dragging = false;
  };

  if (reducedMotion) {
    return (
      <div style={styles.fallback} role="region" aria-label={`${title} screenshots`}>
        <img
          src={images[activeIndex]}
          alt={`${title} screenshot ${activeIndex + 1}`}
          style={styles.fallbackImage}
          loading="lazy"
          decoding="async"
        />
        <div style={styles.controls}>
          <CarouselButton onClick={goPrev} label="Previous screenshot" accentColor={accentColor}>
            ‹
          </CarouselButton>
          <span style={styles.counter}>
            {activeIndex + 1} / {count}
          </span>
          <CarouselButton onClick={goNext} label="Next screenshot" accentColor={accentColor}>
            ›
          </CarouselButton>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.root} role="region" aria-label={`${title} screenshots`}>
      <style>{carouselCss}</style>
      <div
        className="carousel-scene"
        style={styles.scene}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div
          className="carousel-ring"
          style={{
            ...styles.ring,
            transform: `translateZ(-${radius}px) rotateY(${rotationOffset}deg)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="carousel-cell"
              style={{
                transform: `translate(-50%, -50%) rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
              }}
              aria-hidden={i !== activeIndex}
            >
              <div
                style={{
                  ...styles.cellFrame,
                  borderColor: i === activeIndex ? accentColor : "rgba(255,255,255,0.1)",
                  boxShadow: i === activeIndex ? `0 24px 48px ${accentColor}33` : "none",
                }}
              >
                <img
                  src={img}
                  alt={`${title} screenshot ${i + 1}`}
                  style={styles.image}
                  loading={i === activeIndex ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.controls}>
        <CarouselButton onClick={goPrev} label="Previous screenshot" accentColor={accentColor}>
          ‹
        </CarouselButton>
        <div style={styles.dots} role="tablist" aria-label="Screenshot navigation">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Screenshot ${i + 1}`}
              style={{
                ...styles.dot,
                background: i === activeIndex ? accentColor : "rgba(255,255,255,0.2)",
                transform: i === activeIndex ? "scale(1.2)" : "scale(1)",
              }}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <CarouselButton onClick={goNext} label="Next screenshot" accentColor={accentColor}>
          ›
        </CarouselButton>
      </div>
      <p style={styles.hint}>Swipe or use arrows to rotate</p>
    </div>
  );
}

function CarouselButton({ onClick, label, accentColor, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      style={{
        ...styles.navBtn,
        borderColor: accentColor,
        color: accentColor,
      }}
      className="carousel-nav-btn"
    >
      {children}
    </button>
  );
}

const carouselCss = `
  .carousel-scene {
    touch-action: pan-y;
    cursor: grab;
  }
  .carousel-scene:active {
    cursor: grabbing;
  }
  .carousel-ring {
    transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .carousel-cell {
    position: absolute;
    left: 50%;
    top: 50%;
    transform-style: preserve-3d;
    transition: opacity 0.45s ease;
  }
  .carousel-nav-btn {
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .carousel-nav-btn:hover {
    background: rgba(255,255,255,0.08);
  }
  .carousel-nav-btn:active {
    transform: scale(0.95);
  }
  @media (max-width: 700px) {
    .carousel-scene {
      height: 340px !important;
    }
    .carousel-cell img {
      height: 280px !important;
    }
  }
`;

const styles = {
  root: {
    marginBottom: "1.5rem",
  },
  scene: {
    position: "relative",
    height: 420,
    perspective: 1200,
    perspectiveOrigin: "50% 50%",
    overflow: "hidden",
    userSelect: "none",
  },
  ring: {
    position: "absolute",
    inset: 0,
    transformStyle: "preserve-3d",
    width: "100%",
    height: "100%",
  },
  cellFrame: {
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid",
    background: "rgba(0,0,0,0.35)",
    transition: "border-color 0.45s ease, box-shadow 0.45s ease",
  },
  image: {
    height: 360,
    width: "auto",
    display: "block",
    pointerEvents: "none",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "0.75rem",
  },
  navBtn: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: "1px solid",
    background: "transparent",
    fontSize: "1.25rem",
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    flexShrink: 0,
  },
  dots: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    border: "none",
    padding: 0,
    cursor: "pointer",
    transition: "background 0.25s ease, transform 0.25s ease",
  },
  hint: {
    textAlign: "center",
    fontSize: "0.7rem",
    letterSpacing: "0.06em",
    color: "var(--text-muted)",
    marginTop: "0.5rem",
    opacity: 0.75,
  },
  fallback: {
    marginBottom: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
  },
  fallbackImage: {
    maxHeight: 400,
    width: "auto",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.08)",
  },
  counter: {
    fontSize: "0.75rem",
    color: "var(--text-muted)",
    letterSpacing: "0.08em",
    minWidth: 48,
    textAlign: "center",
  },
};
