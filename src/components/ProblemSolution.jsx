import { FadeIn } from "./shared";

export default function ProblemSolution() {
  return (
    <section className="ps-section">
      <FadeIn>
        <div className="section-label">The Challenge & Our Answer</div>
        <h2 className="section-title cinzel">Problem & Solution</h2>
        <div className="gold-line" />
      </FadeIn>
      <div
        className="ps-grid"
        style={{ maxWidth: 1100, margin: "60px auto 0" }}
      >
        <FadeIn delay={100}>
          <div className="ps-card problem">
            <div className="ps-card-title cinzel">The Problem</div>
            {[
              "Pakistan has camel milk, but no organized value chain to commercialize it.",
              "Informal handling makes milk unsafe, wasted, and severely undervalued.",
              "Urban markets have zero trusted, hygienic camel milk options.",
              "Diabetics and lactose-intolerant consumers are ignored, despite camel milk being naturally more digestible and functional.",
              "Desert-to-city gap blocks fair income, branding, and scale.",
              "Lost farmer income and a missed premium dairy market opportunity.",
            ].map((p, i) => (
              <div key={i} className="ps-item">
                <div className="ps-dot" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="ps-card solution">
            <div className="ps-card-title cinzel">Our Solution</div>
            {[
              "Build a structured value chain linking herders, collection centers, and urban markets.",
              "Implement hygienic processing, pasteurization, and quality standards to ensure safety and reduce wastage.",
              "Develop branded camel milk products (fresh, powdered, flavored) with premium packaging for cities.",
              "Launch targeted marketing for diabetics, lactose-intolerant, and health-conscious families.",
              "Use cold-chain logistics and e-commerce to connect desert supply with urban demand and increase herder income.",
            ].map((s, i) => (
              <div key={i} className="ps-item">
                <div className="ps-dot" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
