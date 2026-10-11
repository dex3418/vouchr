import { useMemo } from "react";
import heroImage from "../assets/hero.jpg";

/* ========================= THEME ========================= */
const C = {
  core: "#22508A",
  slate: "#3A82C4",
  cyan: "#00C2FF",
  white: "#FFFFFF",
  offwhite: "#F8F9FA",
  border: "#E2EAF4",
  text: "#0F1A2B",
  mid: "#3D5270",
  light: "#6B7FA3",
};
const MAX_W = 1120;

/* ========================= DATA ========================= */
const platforms = [
  {
    code: "SLP",
    label: "Skill Learning Platform",
    desc: "Connect with vocational training institutes, skill educators, and local learning programs active in your district.",
  },
  {
    code: "JR",
    label: "Job Recruitment",
    desc: "Match job seekers with verified employers, contractors, and district-level recruitment opportunities.",
  },
  {
    code: "B",
    label: "Business Network",
    desc: "Discover local businesses, entrepreneurs, and service providers building inside Bastar division.",
  },
];

const platformCodes = [
  { code: "SLP", verified: false, desc: "Skill Learning Platform · Unverified" },
  { code: "JR", verified: false, desc: "Job Recruitment · Unverified" },
  { code: "B", verified: false, desc: "Business Listing · Unverified" },
  { code: "VSLP", verified: true, desc: "Verified Skill Learning Platform" },
  { code: "VJR", verified: true, desc: "Verified Job Recruitment Platform" },
  { code: "VB", verified: true, desc: "Verified Business Listing" },
];

const districts = ["Dantewada", "Sukma", "Bijapur"];
const individualSteps = [
  "Fill registration form",
  "Our team contacts you",
  "Get connected locally",
];
const platformSteps = [
  "Register your platform",
  "Verification process",
  "Go live on network",
];

/* ========================= GLOBAL STYLES ========================= */
function GlobalStyles() {
  return (
    <style>{`
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        background: ${C.white};
        font-family: 'DM Sans', 'Segoe UI', sans-serif;
        color: ${C.text};
        overflow-x: hidden;
      }
      a { text-decoration: none; }
      img { display: block; }
      a:focus-visible, button:focus-visible {
        outline: 3px solid ${C.cyan};
        outline-offset: 3px;
      }

      .container { width: 100%; max-width: ${MAX_W}px; margin: 0 auto; }
      .section { padding: 72px 20px; position: relative; z-index: 2; }
      .section-alt { background: ${C.offwhite}; }

      .section-label {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 6px 14px; border-radius: 999px;
        background: rgba(34,80,138,0.08); color: ${C.core};
        font-size: 12px; font-weight: 700; letter-spacing: 0.5px;
        text-transform: uppercase; margin-bottom: 18px;
      }
      .section-label::before {
        content: ''; width: 8px; height: 8px;
        border-radius: 50%; background: ${C.cyan};
      }
      .section-title {
        font-size: clamp(28px, 5vw, 44px); line-height: 1.15;
        font-weight: 800; letter-spacing: -1px; margin: 0 0 14px;
      }
      .section-subtitle {
        font-size: 16px; line-height: 1.7; color: ${C.mid};
        margin: 0; max-width: 700px;
      }

      .glass-card {
        background: rgba(255,255,255,0.72);
        border: 1px solid rgba(255,255,255,0.4);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 18px;
        transition: transform 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
      }
      .glass-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 50px rgba(34,80,138,0.12);
        background: rgba(255,255,255,0.9);
      }

      .primary-btn, .secondary-btn {
        border-radius: 12px; padding: 15px 22px; font-weight: 700;
        display: inline-flex; justify-content: center; align-items: center;
        transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
      }
      .primary-btn { background: ${C.core}; color: ${C.white}; border: none; cursor: pointer; }
      .secondary-btn { background: transparent; color: ${C.core}; border: 2px solid ${C.core}; }
      .primary-btn:hover, .secondary-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 18px 30px rgba(34,80,138,0.28);
      }
      .secondary-btn:hover { background: ${C.core}; color: ${C.white}; }

      .floating-shape {
        position: absolute; border-radius: 999px; opacity: 0.06;
        animation: float 10s ease-in-out infinite;
      }
      .shape-1 { width: 320px; height: 320px; background: ${C.core}; top: -120px; left: 8%; }
      .shape-2 { width: 220px; height: 220px; background: ${C.cyan}; right: 5%; top: 40%; animation-delay: 2s; }
      .shape-3 { width: 260px; height: 260px; background: ${C.slate}; bottom: -100px; left: 50%; animation-delay: 4s; }

      @keyframes float {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(12px, -35px); }
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fade-up { animation: fadeUp 0.8s ease forwards; }

      .grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }
      .grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
      .stack { display: flex; flex-direction: column; gap: 18px; }
      .divider { height: 1px; background: ${C.border}; margin: 0 auto; max-width: ${MAX_W}px; }

      .footer-link { color: ${C.light}; transition: color 0.2s ease; }
      .footer-link:hover { color: ${C.core}; }

      @media (max-width: 860px) {
        .grid-2, .grid-3 { grid-template-columns: 1fr; }
        .hero-content { text-align: center; }
        .hero-buttons { width: 100%; }
        .hero-buttons a { width: 100%; }
        .hero-image { height: 340px !important; }
        .nav-wrapper { padding: 0 14px !important; }
      }

      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        .floating-shape, .fade-up { animation: none; }
        .glass-card, .primary-btn, .secondary-btn { transition: none; }
      }
    `}</style>
  );
}

/* ========================= REUSABLE ========================= */
function SectionHeading({ label, title, subtitle, centered = false }) {
  return (
    <div style={{ textAlign: centered ? "center" : "left" }}>
      <div className="section-label">{label}</div>
      <h2 className="section-title">{title}</h2>
      <p
        className="section-subtitle"
        style={{ margin: centered ? "0 auto" : 0 }}
      >
        {subtitle}
      </p>
    </div>
  );
}

function GlassCard({ children, style }) {
  return (
    <div className="glass-card" style={style}>
      {children}
    </div>
  );
}

function StepItem({ number, text }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: C.core,
          color: C.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 13,
          flexShrink: 0,
          boxShadow: "0 8px 16px rgba(34,80,138,0.2)",
        }}
      >
        {number}
      </div>
      <p style={{ margin: 0, color: C.mid, lineHeight: 1.7, fontSize: 15 }}>
        {text}
      </p>
    </div>
  );
}

const cardLabel = {
  fontSize: 13,
  fontWeight: 800,
  letterSpacing: "1px",
  color: C.core,
  textTransform: "uppercase",
  margin: "0 0 26px",
};

/* ========================= BACKGROUND ========================= */
function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        background:
          "radial-gradient(circle at 20% 30%, rgba(34,80,138,0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,194,255,0.04) 0%, transparent 40%)",
      }}
    >
      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />
      <div className="floating-shape shape-3" />
    </div>
  );
}

/* ========================= NAVBAR ========================= */
function NavBar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "rgba(255,255,255,0.82)",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        className="container nav-wrapper"
        style={{
          height: 68,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <a
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <span
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: C.core,
              letterSpacing: "-1px",
            }}
          >
            Vouchr
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: "4px 8px",
              borderRadius: 999,
              background: C.offwhite,
              border: `1px solid ${C.border}`,
              color: C.light,
              textTransform: "uppercase",
              letterSpacing: "0.6px",
            }}
          >
            by Novaforge Labs
          </span>
        </a>

        <a href="#register" className="primary-btn">
          Register
        </a>
      </div>
    </nav>
  );
}

/* ========================= HERO ========================= */
function Hero() {
  return (
    <section className="section">
      <div className="container grid-2" style={{ alignItems: "center" }}>
        <div className="hero-content fade-up">
          <div className="section-label" style={{ marginBottom: 24 }}>
            Dantewada · Sukma · Bijapur
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 8vw, 72px)",
              lineHeight: 1.05,
              fontWeight: 900,
              margin: "0 0 18px",
              letterSpacing: "-2px",
            }}
          >
            real people.
            <br />
            real opportunities.
            <br />
            <span style={{ color: C.core }}>apne district mein.</span>
          </h1>

          <p
            style={{
              color: C.mid,
              lineHeight: 1.8,
              fontSize: 17,
              marginBottom: 34,
              maxWidth: 620,
            }}
          >
            Vouchr connects learners, job seekers, businesses, and local
            opportunities inside Bastar division through one connected
            network.
          </p>

          <div
            className="hero-buttons"
            style={{ display: "flex", flexWrap: "wrap", gap: 14 }}
          >
            <a href="#register" className="primary-btn">
              Register as Individual
            </a>
            <a href="#register" className="secondary-btn">
              Register Your Platform
            </a>
          </div>
        </div>

        <div className="fade-up">
          <GlassCard style={{ padding: 10, overflow: "hidden" }}>
            <img
              src={heroImage}
              alt="People networking through the Vouchr platform"
              className="hero-image"
              style={{
                width: "100%",
                height: 520,
                objectFit: "cover",
                borderRadius: 14,
              }}
            />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

/* ========================= WHAT WE DO ========================= */
function WhatWeDo() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          label="What We Do"
          title="Three platforms. One network."
          subtitle="Vouchr operates three connected ecosystems focused on learning, jobs, and business growth within local districts."
        />

        <div className="grid-3" style={{ marginTop: 40 }}>
          {platforms.map((item) => (
            <GlassCard
              key={item.code}
              style={{ padding: 28, borderBottom: `4px solid ${C.core}` }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "6px 12px",
                  borderRadius: 10,
                  background: C.core,
                  color: C.white,
                  fontWeight: 800,
                  fontSize: 12,
                  letterSpacing: "1px",
                  marginBottom: 18,
                }}
              >
                {item.code}
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>{item.label}</h3>
              <p style={{ margin: 0, color: C.mid, lineHeight: 1.8 }}>
                {item.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= HOW IT WORKS ========================= */
function HowItWorks() {
  const columns = [
    { title: "For Individuals", steps: individualSteps },
    { title: "For Platforms", steps: platformSteps },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="How It Works"
          title="Simple. Fast. Local."
          subtitle="Designed for district-level accessibility without complicated onboarding."
        />

        <div className="grid-2" style={{ marginTop: 40 }}>
          {columns.map((col) => (
            <GlassCard key={col.title} style={{ padding: 30 }}>
              <p style={cardLabel}>{col.title}</p>
              <div className="stack">
                {col.steps.map((step, i) => (
                  <StepItem key={step} number={i + 1} text={step} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= PLATFORM CODES ========================= */
function PlatformCodes() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          label="Platform Codes"
          title="What the codes mean"
          subtitle="Verified platforms carry a V-prefix after background checks and manual validation."
        />

        <div className="stack" style={{ marginTop: 36 }}>
          {platformCodes.map((item) => (
            <GlassCard
              key={item.code}
              style={{
                padding: "18px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    minWidth: 74,
                    textAlign: "center",
                    borderRadius: 10,
                    padding: "8px 14px",
                    background: item.verified ? C.core : C.offwhite,
                    color: item.verified ? C.white : C.text,
                    fontWeight: 800,
                    letterSpacing: "1px",
                    border: item.verified ? "none" : `1px solid ${C.border}`,
                  }}
                >
                  {item.code}
                </div>
                <p style={{ margin: 0, color: C.mid, lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>

              {item.verified && (
                <div
                  style={{
                    background: "#E8F4FF",
                    color: C.core,
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  ✓ Verified
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= DISTRICTS ========================= */
function DistrictCoverage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          centered
          label="Coverage"
          title="Districts we cover"
          subtitle="Operating exclusively inside Bastar division with district-first community networking."
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 20,
            marginTop: 42,
          }}
        >
          {districts.map((district) => (
            <GlassCard
              key={district}
              style={{
                padding: "22px 34px",
                minWidth: 180,
                textAlign: "center",
                borderBottom: `4px solid ${C.core}`,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 22 }}>{district}</h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= CTA ========================= */
function CTASection() {
  return (
    <section className="section section-alt" id="register">
      <div className="container">
        <GlassCard
          style={{
            padding: "60px 32px",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(34,80,138,0.9), rgba(58,130,196,0.92))",
            color: C.white,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 54px)",
              lineHeight: 1.1,
              margin: "0 0 18px",
              fontWeight: 900,
              letterSpacing: "-1.5px",
            }}
          >
            Build locally.
            <br />
            Grow collectively.
          </h2>

          <p
            style={{
              maxWidth: 760,
              margin: "0 auto 34px",
              lineHeight: 1.8,
              opacity: 0.95,
              fontSize: 16,
            }}
          >
            Join the Vouchr network and become part of a district-first
            ecosystem connecting people, opportunities, and verified local
            platforms.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 14,
            }}
          >
            <a
              href="mailto:hello@vouchr.in"
              style={{
                background: C.white,
                color: C.core,
                padding: "15px 22px",
                borderRadius: 12,
                fontWeight: 800,
              }}
            >
              Contact Team
            </a>
            <a
              href="mailto:hello@vouchr.in?subject=Register%20with%20Vouchr"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: C.white,
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "15px 22px",
                borderRadius: 12,
                fontWeight: 800,
              }}
            >
              Register Now
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

/* ========================= FOOTER ========================= */
function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      style={{ padding: "34px 20px", position: "relative", zIndex: 2 }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 6px", fontSize: 22, color: C.core }}>
            Vouchr
          </h3>
          <p style={{ margin: 0, color: C.light, lineHeight: 1.7 }}>
            © {year} Novaforge Labs. Built for district-level opportunities.
          </p>
        </div>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <a className="footer-link" href="/privacy">
            Privacy Policy
          </a>
          <a className="footer-link" href="/terms">
            Terms of Service
          </a>
          <a className="footer-link" href="mailto:hello@vouchr.in">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ========================= PAGE ========================= */
export default function VouchrLanding() {
  return (
    <>
      <GlobalStyles />
      <AnimatedBackground />
      <NavBar />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <PlatformCodes />
      <DistrictCoverage />
      <CTASection />
      <div className="divider" />
      <Footer />
    </>
  );
}
