export default function Footer() {
  return (
    <footer>
      <div className="footer-logo cinzel">
        CAMELIX
        <span style={{
          display: "block",
          fontSize: "0.45em",
          letterSpacing: "0.35em",
          color: "var(--camel)",
          fontWeight: 400,
          marginTop: "2px",
        }}>
          naturals
        </span>
      </div>
      <div className="gold-line" />
      <div className="footer-tagline">
        From the Desert to Your Doorstep — Pakistan's Premium Camel Milk
      </div>
      <p
        style={{
          marginTop: "2rem",
          fontSize: "0.72rem",
          color: "rgba(193,154,107,0.3)",
          letterSpacing: "0.1em",
        }}
      >
        © 2026 CAMELIX NATURALS · All Rights Reserved
      </p>
    </footer>
  );
}
