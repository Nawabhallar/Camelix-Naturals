import landingBg from "../assets/landing2.png";

export default function Hero({ scrollTo }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(5,2,0,0.55) 0%, rgba(26,15,0,0.7) 100%), url(${landingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-badge">
        Pakistan's First Structured Camel Milk Value Chain
      </div>
      <h1 className="hero-title cinzel">
        Camel Milk
        <span className="playfair">Value Chain & Marketing Innovation</span>
      </h1>
      <p className="hero-subtitle">
        Revolutionizing Pakistan's dairy landscape — building premium,
        chemical-free, health-focused camel milk solutions from desert to
        doorstep.
      </p>
      <div className="hero-cta">
        <button className="btn-primary" onClick={() => scrollTo("about")}>
          Discover Our Story
        </button>
        <button className="btn-outline" onClick={() => scrollTo("products")}>
          View Products
        </button>
      </div>
    </section>
  );
}
