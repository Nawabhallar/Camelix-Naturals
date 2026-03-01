import { FadeIn } from "./shared";
import zaristImg from "../assets/team-members/zarsiht.jpg";
import sherImg from "../assets/team-members/shermuhammad.jpg";
import asmatullahImg from "../assets/team-members/asmatullah kaka.jpeg";

const teamMembers = [
  {
    name: "Zarisht Naeem Rao",
    role: "Founder",
    image: zaristImg,
    email: "drzarishtnaeem@gmail.com",
    phone: "0328-3718246",
  },
  {
    name: "Sher Muhammad Pirzada",
    role: "Co-Founder",
    image: sherImg,
    email: "pirzadasher63@gmail.com",
    phone: "0321-3048916",
  },
  {
    name: "Dr. Asmatullah Kaka",
    role: "Supervisor",
    image: asmatullahImg,
    email: "asmaullahkaka@gmail.com",
    phone: "0300-3790642",
  },
  {
    name: "Dr. Gulbahar Khaskheli",
    role: "Technical Member",
    initials: "GK",
    email: "khaskheli_75@yahoo.com",
    phone: "0310-0373093",
  },
];

const supportiveMembers = [
  { name: "Moaza Khalid", initials: "MK" },
  { name: "Sumera Roshan", initials: "SR" },
];

export default function Team() {
  return (
    <section
      id="team"
    >
      <FadeIn>
        <div className="section-label">The People</div>
        <h2 className="section-title cinzel">
          Visionaries Behind
          <br />
          The Mission
        </h2>
        <div className="gold-line" />
      </FadeIn>
      <div
        className="team-grid"
        style={{ maxWidth: 1000, margin: "60px auto 0" }}
      >
        {teamMembers.map((m, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="team-card">
              {m.image ? (
                <img
                  src={m.image}
                  alt={m.name}
                  className="team-avatar-img"
                />
              ) : (
                <div className="team-avatar cinzel">{m.initials}</div>
              )}
              <div className="team-name cinzel">{m.name}</div>
              <div className="team-role">{m.role}</div>
              {m.email && (
                <div style={{
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  marginTop: "0.6rem",
                  fontWeight: 300,
                  wordBreak: "break-all",
                }}>
                  {m.email}
                </div>
              )}
              {m.phone && (
                <div style={{
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  marginTop: "0.3rem",
                  fontWeight: 300,
                }}>
                  {m.phone}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Supportive Members */}
      <FadeIn delay={500}>
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <div style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.5rem",
          }}>
            Supportive Members
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2px",
              flexWrap: "wrap",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            {supportiveMembers.map((m, i) => (
              <div
                key={i}
                className="team-card"
                style={{ flex: "1 1 200px", maxWidth: 240 }}
              >
                <div className="team-avatar cinzel">{m.initials}</div>
                <div className="team-name cinzel">{m.name}</div>
                <div className="team-role">Supportive Member</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
