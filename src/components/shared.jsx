import { useState, useEffect, useRef } from "react";

export const SAND_PALETTE = {
  deep: "#1a0f00",
  dark: "#2d1a00",
  brown: "#5c3317",
  camel: "#c19a6b",
  sand: "#e8c98a",
  gold: "#d4a017",
  cream: "#fdf3e3",
  white: "#fffdf8",
  accent: "#b8860b",
  rust: "#8b3a0f",
};

export function useIntersect(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, visible] = useIntersect();
  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

export function DunesSVG({ fill = "#1a0f00" }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "100%" }}
    >
      <path
        d="M0,80 C180,20 360,100 540,60 C720,20 900,90 1080,50 C1260,10 1350,70 1440,50 L1440,120 L0,120 Z"
        fill={fill}
        opacity="0.8"
      />
      <path
        d="M0,90 C200,50 380,110 560,75 C740,40 920,100 1100,65 C1280,30 1380,80 1440,60 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  );
}
