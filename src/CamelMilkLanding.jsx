import { SAND_PALETTE } from "./components/shared";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProblemSolution from "./components/ProblemSolution";
import Products from "./components/Products";
import MarketOpportunity from "./components/MarketOpportunity";
import Impact from "./components/Impact";
import Achievements from "./components/Achievements";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const fontLink = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');`;

const globalStyle = `
${fontLink}

* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --deep: ${SAND_PALETTE.deep};
  --dark: ${SAND_PALETTE.dark};
  --brown: ${SAND_PALETTE.brown};
  --camel: ${SAND_PALETTE.camel};
  --sand: ${SAND_PALETTE.sand};
  --gold: ${SAND_PALETTE.gold};
  --cream: ${SAND_PALETTE.cream};
  --white: ${SAND_PALETTE.white};
  --accent: ${SAND_PALETTE.accent};
  --rust: ${SAND_PALETTE.rust};

  /* Surfaces */
  --surface: rgba(193,154,107,0.04);
  --surface-hover: rgba(212,160,23,0.08);
  --surface-gold: rgba(212,160,23,0.06);

  /* Borders */
  --border-subtle: rgba(193,154,107,0.12);
  --border-medium: rgba(193,154,107,0.2);
  --border-camel: rgba(193,154,107,0.5);
  --border-gold: rgba(212,160,23,0.3);
  --border-gold-strong: rgba(212,160,23,0.5);

  /* Text */
  --text-body: rgba(232,201,138,0.7);
  --text-body-strong: rgba(232,201,138,0.75);
  --text-muted: rgba(193,154,107,0.6);
  --text-faint: rgba(193,154,107,0.4);
  --text-faintest: rgba(193,154,107,0.3);

  /* Section backgrounds */
  --bg-1: #050200;
  --bg-2: #0f0800;
  --bg-3: #1a0f00;
  --bg-4: #230e00;
  --bg-5: #2a1500;

  /* Overlays */
  --nav-solid: rgba(10,5,0,0.97);
  --overlay-bg: rgba(5,2,0,0.97);
  --hero-overlay-start: rgba(5,2,0,0.55);
  --hero-overlay-end: rgba(26,15,0,0.7);

  /* Problem/solution */
  --problem-text: #d4735a;
  --problem-bg: rgba(139,58,15,0.15);
  --problem-bg-end: rgba(139,58,15,0.05);
  --problem-border: rgba(139,58,15,0.3);
}

:root[data-theme="light"] {
  --deep: #faf6f0;
  --dark: #f0e6d6;
  --brown: #8b6914;
  --camel: #6b4a2e;
  --sand: #38200a;
  --gold: #b8860b;
  --cream: #2d1a00;
  --white: #1a0f00;
  --accent: #9a7209;
  --rust: #b83a1a;

  /* Surfaces */
  --surface: rgba(120,80,30,0.06);
  --surface-hover: rgba(180,130,20,0.12);
  --surface-gold: rgba(180,130,20,0.08);

  /* Borders */
  --border-subtle: rgba(120,80,30,0.15);
  --border-medium: rgba(120,80,30,0.22);
  --border-camel: rgba(120,80,30,0.3);
  --border-gold: rgba(160,118,8,0.35);
  --border-gold-strong: rgba(160,118,8,0.5);

  /* Text */
  --text-body: rgba(45,26,0,0.72);
  --text-body-strong: rgba(45,26,0,0.8);
  --text-muted: rgba(80,50,10,0.6);
  --text-faint: rgba(80,50,10,0.4);
  --text-faintest: rgba(80,50,10,0.25);

  /* Section backgrounds */
  --bg-1: #fffdf8;
  --bg-2: #f5eedf;
  --bg-3: #f0e6d2;
  --bg-4: #ebe0c8;
  --bg-5: #e6dac0;

  /* Overlays */
  --nav-solid: rgba(250,246,240,0.97);
  --overlay-bg: rgba(245,238,223,0.97);
  --hero-overlay-start: transparent;
  --hero-overlay-end: transparent;

  /* Problem/solution */
  --problem-text: #b83a1a;
  --problem-bg: rgba(184,58,26,0.08);
  --problem-bg-end: rgba(184,58,26,0.02);
  --problem-border: rgba(184,58,26,0.2);
}

html { scroll-behavior: smooth; }

body {
  background: var(--deep);
  color: var(--cream);
  font-family: 'Lato', sans-serif;
  overflow-x: hidden;
  transition: background 0.3s, color 0.3s;
}

.cinzel { font-family: 'Cinzel', serif; }
.playfair { font-family: 'Playfair Display', serif; }

/* Hide mobile button on desktop */
.mobile-menu-btn { display: none; }

/* SECTION STYLES */
section {
  position: relative;
  transition: background 0.3s;
}

/* NAV */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 18px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, var(--nav-solid) 0%, transparent 100%);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid var(--border-subtle);
  transition: background 0.3s;
}

.nav-logo-img {
  height: 45px;
  width: auto;
  object-fit: contain;
}

[data-theme="light"] .nav-logo-img {
  filter: brightness(0.3);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
}

.nav-links a {
  color: var(--camel);
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: color 0.3s;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
}
.nav-links a:hover { color: var(--sand); }

/* THEME TOGGLE */
.theme-toggle {
  background: none;
  border: 1px solid var(--border-subtle);
  color: var(--gold);
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s, background 0.3s;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}
.theme-toggle:hover {
  border-color: var(--gold);
  background: var(--surface);
}

/* HERO */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 120px 5% 60px;
  position: relative;
  overflow: hidden;
}

.hero-badge {
  display: inline-block;
  padding: 6px 20px;
  border: 1px solid var(--border-camel);
  border-radius: 20px;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--camel);
  margin-bottom: 2rem;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  background: var(--surface);
  animation: fadeUp 1s ease both;
}

.hero-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(2.8rem, 7vw, 6rem);
  font-weight: 700;
  line-height: 1.05;
  color: var(--sand);
  text-shadow: 0 0 80px var(--text-faintest);
  margin-bottom: 1rem;
  animation: fadeUp 1s ease 0.2s both;
}

.hero-title span {
  color: var(--gold);
  font-style: italic;
  font-family: 'Playfair Display', serif;
  display: block;
  font-size: 0.75em;
}

.hero-subtitle {
  font-size: clamp(0.95rem, 2vw, 1.2rem);
  color: var(--camel);
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: 3rem;
  animation: fadeUp 1s ease 0.4s both;
  font-weight: 300;
}

/* Light theme hero text readability — no overlay so add text shadows */
[data-theme="light"] .hero-badge {
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(6px);
  border-color: rgba(107,74,46,0.4);
  color: #2d1a00;
}
[data-theme="light"] .hero-title {
  color: #1a0f00;
  text-shadow: 0 1px 8px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5);
}
[data-theme="light"] .hero-title span {
  color: #8b6914;
}
[data-theme="light"] .hero-subtitle {
  color: #2d1a00;
  text-shadow: 0 1px 6px rgba(255,255,255,0.7);
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeUp 1s ease 0.6s both;
}

.btn-primary {
  padding: 14px 36px;
  background: linear-gradient(135deg, var(--gold), var(--accent));
  color: var(--deep);
  font-family: 'Cinzel', serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  text-transform: uppercase;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 40px var(--border-gold-strong);
}

.btn-outline {
  padding: 14px 36px;
  background: transparent;
  color: var(--sand);
  font-family: 'Cinzel', serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  border: 1px solid var(--border-camel);
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
}
.btn-outline:hover {
  border-color: var(--gold);
  color: var(--gold);
  background: var(--surface-hover);
}

/* SECTION COMMONS */
.section-label {
  font-family: 'Lato', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}
.section-label::before, .section-label::after {
  content: '';
  flex: 1;
  max-width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold));
}
.section-label::after { background: linear-gradient(90deg, var(--gold), transparent); }

.section-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  color: var(--sand);
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.2;
}

.section-body {
  font-size: 1rem;
  color: var(--text-body);
  line-height: 1.8;
  max-width: 680px;
  text-align: center;
  margin: 0 auto;
  font-weight: 300;
}

/* ABOUT */
#about {
  padding: 100px 5%;
  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-3) 100%);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  max-width: 1100px;
  margin: 60px auto 0;
}

.about-stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  align-items: stretch;
}

.about-stats-grid > .fade-in {
  height: 100%;
}

.about-stat {
  text-align: center;
  padding: 30px;
  border: 1px solid var(--border-medium);
  background: var(--surface);
  position: relative;
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.about-stat::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px; height: 100%;
  background: linear-gradient(180deg, var(--gold), transparent);
}
.about-stat:hover {
  border-color: var(--border-gold);
  background: var(--surface-gold);
  transform: translateX(4px);
}

.stat-number {
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  color: var(--gold);
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
}
.stat-label {
  font-size: 0.85rem;
  color: var(--camel);
  letter-spacing: 0.1em;
  font-weight: 300;
}

.about-text p {
  color: var(--text-body-strong);
  line-height: 1.9;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 300;
}

/* PROBLEM / SOLUTION */
.ps-section {
  padding: 100px 5%;
  background: linear-gradient(180deg, var(--bg-3), var(--bg-4));
}

.ps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  max-width: 1100px;
  margin: 60px auto 0;
  align-items: stretch;
}

.ps-grid > .fade-in {
  height: 100%;
}

.ps-card {
  padding: 60px 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ps-card.problem {
  background: linear-gradient(135deg, var(--problem-bg), var(--problem-bg-end));
  border: 1px solid var(--problem-border);
}
.ps-card.solution {
  background: linear-gradient(135deg, var(--surface-hover), var(--surface));
  border: 1px solid var(--border-gold);
}

.ps-card-title {
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 12px;
}
.ps-card.problem .ps-card-title { color: var(--problem-text); }
.ps-card.solution .ps-card-title { color: var(--gold); }

.ps-item {
  display: flex;
  gap: 14px;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  color: var(--text-body);
  line-height: 1.6;
  font-weight: 300;
}
.ps-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-top: 7px;
  flex-shrink: 0;
}
.problem .ps-dot { background: var(--problem-text); }
.solution .ps-dot { background: var(--gold); }

/* PRODUCTS */
#products {
  padding: 100px 5%;
  background: linear-gradient(180deg, var(--bg-4), var(--bg-3));
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2px;
  max-width: 1100px;
  margin: 60px auto 0;
}

.product-card {
  padding: 40px 30px;
  background: var(--surface);
  border: 1px solid var(--border-subtle);
  position: relative;
  overflow: hidden;
  transition: all 0.4s;
  cursor: default;
}

.product-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.product-card:hover {
  background: var(--surface-hover);
  border-color: var(--border-gold);
  transform: translateY(-4px);
}
.product-card:hover::after { transform: scaleX(1); }

.product-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: block;
  border: 1px solid var(--border-subtle);
}

.product-name {
  font-family: 'Cinzel', serif;
  font-size: 0.95rem;
  color: var(--sand);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.product-tag {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--gold);
  text-transform: uppercase;
  font-weight: 700;
}

.product-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 60px;
  justify-content: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.badge {
  padding: 7px 18px;
  border: 1px solid var(--border-gold);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  background: var(--surface-gold);
  font-weight: 700;
  font-family: 'Lato', sans-serif;
}

/* MARKET */
#market {
  padding: 100px 5%;
  background: linear-gradient(180deg, var(--bg-3), var(--bg-2));
  position: relative;
  overflow: hidden;
}

.market-orb {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--surface-gold) 0%, transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.market-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.market-big-number {
  font-family: 'Cinzel', serif;
  font-size: clamp(5rem, 15vw, 12rem);
  color: transparent;
  -webkit-text-stroke: 1px var(--border-gold);
  line-height: 0.9;
  margin: 40px 0;
  display: block;
  position: relative;
}
.market-big-number::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: transparent;
  background: linear-gradient(135deg, var(--gold), var(--camel));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.4;
}

.market-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin-top: 60px;
}

.mf-card {
  padding: 30px 20px;
  border: 1px solid var(--border-subtle);
  background: var(--surface);
  text-align: center;
}
.mf-title {
  font-family: 'Cinzel', serif;
  font-size: 0.9rem;
  color: var(--sand);
  margin-bottom: 0.5rem;
}
.mf-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 300;
  line-height: 1.5;
}

/* IMPACT */
#impact {
  padding: 100px 5%;
  background: linear-gradient(180deg, var(--bg-2), var(--bg-3));
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2px;
  max-width: 1000px;
  margin: 60px auto 0;
}

.impact-item {
  padding: 40px 25px;
  background: var(--surface);
  border: 1px solid var(--border-subtle);
  text-align: center;
  transition: all 0.3s;
}
.impact-item:hover {
  background: var(--surface-hover);
  transform: scale(1.02);
}
.impact-emoji { font-size: 2rem; margin-bottom: 1rem; display: block; }
.impact-title { font-family: 'Cinzel', serif; font-size: 0.85rem; color: var(--sand); margin-bottom: 0.5rem; font-weight: 600; }
.impact-desc { font-size: 0.78rem; color: var(--text-muted); font-weight: 300; line-height: 1.5; }

/* ACHIEVEMENTS */
#achievements {
  padding: 100px 5%;
  background: linear-gradient(135deg, var(--bg-3), var(--bg-5), var(--bg-3));
  position: relative;
  text-align: center;
}

.achievement-card {
  max-width: 700px;
  margin: 60px auto 0;
  padding: 60px;
  background: linear-gradient(135deg, var(--surface-hover), var(--surface));
  border: 1px solid var(--border-gold);
  position: relative;
}

.achievement-card::before, .achievement-card::after {
  content: '';
  position: absolute;
  width: 40px; height: 40px;
  border-color: var(--gold);
  border-style: solid;
}
.achievement-card::before { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.achievement-card::after { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

.trophy { font-size: 4rem; display: block; margin-bottom: 1.5rem; }
.award-title {
  font-family: 'Cinzel', serif;
  font-size: 1.6rem;
  color: var(--gold);
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.award-event {
  font-size: 0.9rem;
  color: var(--camel);
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  font-weight: 300;
}
.award-institution {
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
}
.award-desc {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-body);
  line-height: 1.7;
  font-weight: 300;
}

/* TEAM */
#team {
  padding: 100px 5%;
  background: linear-gradient(180deg, var(--bg-3), var(--bg-1));
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 2px;
  max-width: 1000px;
  margin: 60px auto 0;
  align-items: stretch;
}

.team-grid > .fade-in {
  height: 100%;
}

.team-card {
  padding: 40px 25px 35px;
  background: var(--surface);
  border: 1px solid var(--border-subtle);
  text-align: center;
  transition: all 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.team-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  transform: scaleX(0);
  transition: transform 0.4s;
}
.team-card:hover::before { transform: scaleX(1); }
.team-card:hover {
  background: var(--surface-hover);
  transform: translateY(-4px);
}

.team-avatar {
  width: 80px; height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--surface-hover), var(--surface));
  border: 2px solid var(--border-gold);
  margin: 0 auto 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-family: 'Cinzel', serif;
  color: var(--gold);
}

.team-name {
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  color: var(--sand);
  margin-bottom: 0.4rem;
  font-weight: 600;
}
.team-role {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 700;
  font-family: 'Lato', sans-serif;
}

.team-avatar-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-gold);
  margin: 0 auto 1.2rem;
  display: block;
}

/* CONTACT */
#contact {
  padding: 100px 5%;
  background: linear-gradient(180deg, var(--bg-1), var(--bg-3));
}

#contact input::placeholder,
#contact textarea::placeholder {
  color: var(--text-faint);
}

.contact-input {
  padding: 14px 18px;
  background: var(--surface);
  border: 1px solid var(--border-medium);
  color: var(--cream);
  font-family: 'Lato', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  outline: none;
  transition: border-color 0.3s;
  border-radius: 0;
  width: 100%;
}
.contact-input:focus {
  border-color: var(--border-gold-strong);
}

/* FOOTER */
footer {
  padding: 60px 5%;
  background: var(--bg-1);
  border-top: 1px solid var(--border-subtle);
  text-align: center;
}
.footer-logo {
  font-family: 'Cinzel', serif;
  font-size: 2rem;
  color: var(--sand);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.footer-tagline {
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 300;
}

/* LIGHTBOX */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  display: block;
  border: 1px solid var(--border-gold);
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: var(--sand);
  font-size: 1.8rem;
  cursor: pointer;
  font-family: 'Cinzel', serif;
  transition: color 0.3s;
}
.lightbox-close:hover { color: var(--gold); }

.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(193,154,107,0.15);
  border: 1px solid var(--border-medium);
  color: var(--sand);
  font-size: 2.5rem;
  line-height: 1;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 310;
  padding: 0;
  font-family: 'Cinzel', serif;
}
.lightbox-arrow:hover {
  background: var(--surface-hover);
  border-color: var(--border-gold-strong);
  color: var(--gold);
}
.lightbox-arrow-left { left: 20px; }
.lightbox-arrow-right { right: 20px; }

.lightbox-caption {
  text-align: center;
  margin-top: 12px;
  font-size: 1rem;
  color: var(--sand);
  letter-spacing: 0.1em;
}

/* ANIMATIONS */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.gold-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin: 20px auto;
}

/* ===== RESPONSIVE: TABLET (max 900px) ===== */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .ps-grid {
    grid-template-columns: 1fr;
  }
  .market-features {
    grid-template-columns: 1fr;
    gap: 2px;
  }
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ===== RESPONSIVE: MOBILE (max 768px) ===== */
@media (max-width: 768px) {
  /* NAV */
  nav {
    padding: 14px 5%;
  }
  nav .nav-links { display: none; }
  .nav-logo-img { height: 35px; }

  /* HAMBURGER MENU BUTTON (shown on mobile) */
  .mobile-menu-btn {
    display: flex !important;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }
  .mobile-menu-btn span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--camel);
    transition: all 0.3s;
  }

  /* Show mobile theme toggle */
  nav .theme-toggle { display: flex !important; }

  /* MOBILE NAV OVERLAY */
  .mobile-nav-open {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: var(--overlay-bg);
    z-index: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  }
  .mobile-nav-open a {
    color: var(--sand);
    text-decoration: none;
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .mobile-nav-close {
    position: absolute;
    top: 20px; right: 20px;
    background: none;
    border: none;
    color: var(--camel);
    font-size: 2rem;
    cursor: pointer;
    font-family: 'Cinzel', serif;
  }

  /* HERO */
  .hero {
    padding: 100px 6% 80px;
    min-height: 100svh;
  }
  .hero-badge {
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    padding: 6px 14px;
    text-align: center;
  }
  .hero-title {
    font-size: clamp(2rem, 10vw, 3.2rem);
  }
  .hero-title span { font-size: 0.8em; }
  .hero-subtitle {
    font-size: 0.9rem;
    padding: 0 4px;
  }
  .hero-cta {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
  .btn-primary, .btn-outline {
    width: 100%;
    max-width: 280px;
    text-align: center;
    font-size: 0.75rem;
    padding: 13px 24px;
  }

  /* SECTIONS GENERAL */
  section { padding-left: 5%; padding-right: 5%; }

  .section-title {
    font-size: clamp(1.6rem, 6vw, 2.4rem);
  }
  .section-label {
    font-size: 0.6rem;
    letter-spacing: 0.25em;
  }
  .section-label::before, .section-label::after { display: none; }
  .section-body { font-size: 0.88rem; padding: 0 4px; }

  /* ABOUT */
  #about { padding: 70px 5%; }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 40px !important;
  }
  .about-text p { font-size: 0.88rem; }
  .about-stat { padding: 20px 16px; }
  .stat-number { font-size: 2.2rem; }
  .stat-label { font-size: 0.75rem; }

  /* PROBLEM / SOLUTION */
  .ps-section { padding: 70px 5%; }
  .ps-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 40px !important;
  }
  .ps-card { padding: 30px 22px; }
  .ps-card-title { font-size: 1.1rem; }
  .ps-item { font-size: 0.83rem; }

  /* PRODUCTS */
  #products { padding: 70px 5%; }
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
    margin-top: 40px !important;
  }
  .product-card { padding: 28px 18px; }
  .product-img { height: 120px; }
  .product-name { font-size: 0.82rem; }
  .product-tag { font-size: 0.65rem; }
  .product-badges { gap: 8px; margin-top: 36px !important; }
  .badge { font-size: 0.62rem; padding: 6px 12px; }

  /* MARKET */
  #market { padding: 70px 5%; }
  .market-big-number {
    font-size: clamp(3.5rem, 15vw, 7rem);
    margin: 24px 0 !important;
  }
  .market-features {
    grid-template-columns: 1fr;
    margin-top: 36px !important;
  }
  .mf-card { padding: 24px 18px; }

  /* IMPACT */
  #impact { padding: 70px 5%; }
  .impact-grid {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px !important;
  }
  .impact-item { padding: 28px 16px; }
  .impact-emoji { font-size: 1.6rem; }
  .impact-title { font-size: 0.78rem; }
  .impact-desc { font-size: 0.72rem; }

  /* ACHIEVEMENTS */
  #achievements { padding: 70px 5%; }
  .achievement-card {
    padding: 36px 24px;
    margin-top: 40px !important;
  }
  .trophy { font-size: 3rem; }
  .award-title { font-size: 1.3rem; }
  .award-event { font-size: 0.95rem !important; }
  .award-institution { font-size: 0.72rem; }
  .award-desc { font-size: 0.83rem; margin-top: 1rem; }

  /* TEAM */
  #team { padding: 70px 5%; }
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
    margin-top: 40px !important;
  }
  .team-card { padding: 28px 16px; }
  .team-avatar { width: 60px; height: 60px; font-size: 1.3rem; }
  .team-avatar-img { width: 60px; height: 60px; }
  .team-name { font-size: 0.85rem; }
  .team-role { font-size: 0.65rem; }

  /* ACHIEVEMENTS */
  .award-images-grid { grid-template-columns: 1fr !important; }
  .award-images-grid img { height: 220px !important; }

  /* CONTACT */
  #contact { padding: 70px 5%; }

  /* LIGHTBOX ARROWS */
  .lightbox-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
  }
  .lightbox-arrow-left { left: 8px; }
  .lightbox-arrow-right { right: 8px; }

  /* THEME TOGGLE MOBILE */
  .theme-toggle {
    width: 32px;
    height: 32px;
  }

  /* FOOTER */
  footer { padding: 50px 5%; }
  .footer-logo { font-size: 1.5rem; }
  .footer-tagline { font-size: 0.7rem; }
}

/* ===== RESPONSIVE: SMALL MOBILE (max 400px) ===== */
@media (max-width: 400px) {
  .products-grid,
  .impact-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }
  .hero-title { font-size: 1.9rem; }
  .market-big-number { font-size: 3rem; }
  .achievement-card { padding: 28px 18px; }
}
`;

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function CamelMilkLanding() {
  return (
    <>
      <style>{globalStyle}</style>
      <Navbar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <ProblemSolution />
      <Products />
      <MarketOpportunity />
      <Impact />
      <Achievements />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
