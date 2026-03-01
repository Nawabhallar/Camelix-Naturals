import { useState, useEffect } from "react";
import logo from "../assets/main-logo2.png";

export default function Navbar({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navSections = [
    "about",
    "products",
    "market",
    "impact",
    "achievements",
    "team",
    "contact",
  ];

  const handleScrollTo = (id) => {
    scrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav style={{ background: scrolled ? "rgba(10,5,0,0.97)" : undefined }}>
        <img src={logo} alt="CamelIQ" className="nav-logo-img" />
        <ul className="nav-links">
          {navSections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(s);
                }}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="mobile-menu-btn"
          style={{ display: "none" }}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-nav-open">
          <button
            className="mobile-nav-close"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
          {navSections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(s);
              }}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
