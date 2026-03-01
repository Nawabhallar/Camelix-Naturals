import { FadeIn } from "./shared";

const impactItems = [
  {
    emoji: "🏜️",
    title: "Desert Communities",
    desc: "Empowering herders across Sindh & Balochistan",
  },
  {
    emoji: "💰",
    title: "Stable Income",
    desc: "Fair earnings for camel farming families",
  },
  {
    emoji: "🇵🇰",
    title: "Reduce Imports",
    desc: "Cutting Pakistan's dairy import dependency",
  },
  {
    emoji: "🩺",
    title: "Health Access",
    desc: "Supporting 34.5M diabetic consumers",
  },
  {
    emoji: "🌿",
    title: "Sustainability",
    desc: "Promoting responsible livestock practices",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
    >
      <FadeIn>
        <div className="section-label">Social Impact</div>
        <h2 className="section-title cinzel">
          Creating Impact
          <br />
          Beyond Business
        </h2>
        <div className="gold-line" />
        <p className="section-body">
          Our mission goes beyond profit — we are transforming lives in desert
          communities while making premium health products accessible to all
          Pakistanis.
        </p>
      </FadeIn>
      <div
        className="impact-grid"
        style={{ maxWidth: 1000, margin: "60px auto 0" }}
      >
        {impactItems.map((item, i) => (
          <FadeIn key={i} delay={i * 90}>
            <div className="impact-item">
              <span className="impact-emoji">{item.emoji}</span>
              <div className="impact-title cinzel">{item.title}</div>
              <div className="impact-desc">{item.desc}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
