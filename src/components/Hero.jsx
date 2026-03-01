import { useTheme } from "../context/ThemeContext";
import landingBgDark from "../assets/landing2.png";
import landingBgLight from "../assets/landing2-day.png";

export default function Hero({ scrollTo }) {
  const { theme } = useTheme();
  const landingBg = theme === "light" ? landingBgLight : landingBgDark;

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(180deg, var(--hero-overlay-start) 0%, var(--hero-overlay-end) 100%), url(${landingBg})`,
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
