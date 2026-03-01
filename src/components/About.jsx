import { FadeIn } from "./shared";

export default function About() {
  return (
    <section
      id="about"
    >
      <FadeIn>
        <div className="section-label">Our Story</div>
        <h2 className="section-title cinzel">
          The Untapped Potential
          <br />
          of Camel Milk in Pakistan
        </h2>
        <div className="gold-line" />
      </FadeIn>
      <div
        className="about-grid"
        style={{ maxWidth: 1100, margin: "60px auto 0" }}
      >
        <FadeIn delay={100}>
          <div className="about-text">
            <p>
              Pakistan has one of the world's largest camel populations, yet
              camel milk remains unstructured, informally sold, and often
              wasted. Meanwhile, Pakistan imports camel milk powder and skincare
              products despite having abundant domestic supply.
            </p>
            <p>
              With{" "}
              <strong style={{ color: "var(--gold)" }}>
                34.5 million diabetes patients
              </strong>{" "}
              and nearly{" "}
              <strong style={{ color: "var(--gold)" }}>
                60% lactose intolerance
              </strong>
              , millions of consumers lack access to healthier dairy
              alternatives — until now.
            </p>
            <p>
              We are bridging the gap between desert herders and urban
              consumers, creating a sustainable premium value chain that
              transforms an underutilized resource into a national asset.
            </p>
          </div>
        </FadeIn>
        <div className="about-stats-grid">
          {[
            { num: "34.5M", label: "Diabetic Patients in Pakistan" },
            { num: "60%", label: "Population Lactose Intolerant" },
            { num: "3rd", label: "Largest Camel Population" },
            { num: "0", label: "Organized Camel Milk Brands" },
          ].map((s, i) => (
            <FadeIn key={i} delay={150 + i * 80}>
              <div className="about-stat">
                <div className="stat-number cinzel">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
