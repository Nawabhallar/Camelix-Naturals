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
      style={{
        padding: "100px 5%",
        background: "linear-gradient(180deg, #0a0500, #1a0f00)",
      }}
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
              { label: "Email", value: "pirzadasher63@gmail.com", icon: "✉" },
              { label: "Location", value: "Sindh, Pakistan", icon: "📍" },
              { label: "Phone", value: "0321-3048916", icon: "📞" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "24px 16px",
                  background: "rgba(193,154,107,0.04)",
                  border: "1px solid rgba(193,154,107,0.12)",
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
                    color: "rgba(193,154,107,0.6)",
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
                background: "rgba(212,160,23,0.08)",
                border: "1px solid rgba(212,160,23,0.3)",
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
                  color: "rgba(232,201,138,0.7)",
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
                  style={{
                    padding: "14px 18px",
                    background: "rgba(193,154,107,0.06)",
                    border: "1px solid rgba(193,154,107,0.2)",
                    color: "var(--cream)",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    outline: "none",
                    transition: "border-color 0.3s",
                    borderRadius: 0,
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(212,160,23,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(193,154,107,0.2)")
                  }
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "14px 18px",
                    background: "rgba(193,154,107,0.06)",
                    border: "1px solid rgba(193,154,107,0.2)",
                    color: "var(--cream)",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    outline: "none",
                    transition: "border-color 0.3s",
                    borderRadius: 0,
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(212,160,23,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(193,154,107,0.2)")
                  }
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "14px 18px",
                    background: "rgba(193,154,107,0.06)",
                    border: "1px solid rgba(193,154,107,0.2)",
                    color: "var(--cream)",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.3s",
                    borderRadius: 0,
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(212,160,23,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(193,154,107,0.2)")
                  }
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
