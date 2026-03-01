import { FadeIn } from "./shared";

export default function MarketOpportunity() {
  return (
    <section
      id="market"
      style={{
        padding: "100px 5%",
        background: "linear-gradient(180deg, #1a0f00, #0f0800)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="market-orb" />
      <FadeIn>
        <div className="section-label">Market Opportunity</div>
        <h2 className="section-title cinzel">A Growing Opportunity</h2>
        <div className="gold-line" />
      </FadeIn>
      <div className="market-content">
        <FadeIn delay={100}>
          <span className="market-big-number cinzel" data-text="PKR 523B+">
            PKR 523B+
          </span>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-body" style={{ marginTop: "1rem" }}>
            The premium camel milk segment represents a rapidly growing market
            driven by rising diabetes cases, health awareness, and functional
            food demand. Operating on a B2C and B2B hybrid model with national
            scalability and export potential.
          </p>
        </FadeIn>
        <div className="market-features" style={{ marginTop: "60px" }}>
          {[
            {
              title: "B2C + B2B Hybrid",
              desc: "Retail consumers and institutional buyers",
            },
            {
              title: "National Scalability",
              desc: "From Sindh & Balochistan to all major cities",
            },
            {
              title: "Export Potential",
              desc: "UAE, UK, and diaspora markets",
            },
          ].map((f, i) => (
            <FadeIn key={i} delay={300 + i * 80}>
              <div className="mf-card">
                <div className="mf-title cinzel">{f.title}</div>
                <div className="mf-desc">{f.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
