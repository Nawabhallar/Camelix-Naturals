import { useState } from "react";
import { FadeIn } from "./shared";
import awardImg1 from "../assets/achevements/award-recieving.jpg";
import awardImg2 from "../assets/achevements/award-recieving2.jpg";

export default function Achievements() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const images = [
    { src: awardImg1, alt: "Award ceremony" },
    { src: awardImg2, alt: "Award receiving" },
  ];

  return (
    <section
      id="achievements"
      style={{
        padding: "100px 5%",
        background: "linear-gradient(135deg, #1a0f00, #2a1500, #1a0f00)",
        textAlign: "center",
      }}
    >
      <FadeIn>
        <div className="section-label">Recognition</div>
        <h2 className="section-title cinzel">Award-Winning Concept</h2>
        <div className="gold-line" />
      </FadeIn>

      <FadeIn delay={200}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3px",
            maxWidth: 800,
            margin: "60px auto 0",
          }}
          className="award-images-grid"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                border: "1px solid rgba(212,160,23,0.25)",
                cursor: "pointer",
              }}
              onClick={() => setLightboxIdx(i)}
            />
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={300}>
        <div
          className="achievement-card"
          style={{ maxWidth: 700, margin: "40px auto 0" }}
        >
          <span className="trophy">🏆</span>
          <div className="award-title cinzel">2nd Position</div>
          <div
            className="award-event"
            style={{
              fontFamily: "Lato",
              fontSize: "1.1rem",
              color: "var(--sand)",
              marginBottom: "0.4rem",
            }}
          >
            ASF Venture Spark 2026
          </div>
          <div className="award-institution">
            Muhammad Nawaz Shareef University of Agriculture, Multan
          </div>
          <div className="award-desc">
            The concept, product validation, and value chain model were
            recognized by industry experts and academic leaders for outstanding
            innovation and strong commercial viability — validating Pakistan's
            readiness for a structured camel milk economy.
          </div>
        </div>
      </FadeIn>

      {lightboxIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx - 1 + images.length) % images.length);
            }}
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightboxIdx(null)}
            >
              ✕
            </button>
            <img src={images[lightboxIdx].src} alt={images[lightboxIdx].alt} />
          </div>
          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx + 1) % images.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
