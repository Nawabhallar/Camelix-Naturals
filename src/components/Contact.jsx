import { useState } from "react";
import { FadeIn } from "./shared";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
    >
      <FadeIn>
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title cinzel">Contact Us</h2>
        <div className="gold-line" />
        <p className="section-body">
          Interested in partnering, investing, or learning more about our camel
          milk value chain? We'd love to hear from you.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <div
          style={{
            maxWidth: 600,
            margin: "60px auto 0",
          }}
        >
          {/* Contact Info Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "2px",
              marginBottom: "40px",
            }}
          >
            {[
              { label: "Email", value: "pirzadasher63@gmail.com", icon: "\u2709" },
              { label: "Location", value: "Sindh, Pakistan", icon: "\uD83D\uDCCD" },
              { label: "Phone", value: "0321-3048916", icon: "\uD83D\uDCDE" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "24px 16px",
                  background: "var(--surface)",
                  border: "1px solid var(--border-subtle)",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.icon}
                </span>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.8rem",
                    color: "var(--sand)",
                    marginBottom: "0.3rem",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 300,
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div
              style={{
                padding: "40px",
                background: "var(--surface-gold)",
                border: "1px solid var(--border-gold)",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "2.5rem",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                ✓
              </span>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1.2rem",
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                }}
              >
                Message Sent
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-body)",
                  fontWeight: 300,
                }}
              >
                Thank you for reaching out. We'll get back to you soon.
              </p>
              <button
                className="btn-outline"
                style={{ marginTop: "1.5rem", fontSize: "0.75rem" }}
                onClick={() => setSubmitted(false)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  style={{ resize: "vertical" }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ alignSelf: "center", marginTop: "8px" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
